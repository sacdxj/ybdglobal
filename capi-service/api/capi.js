/**
 * Meta Conversions API (CAPI) relay endpoint.
 *
 * Receives a browser-side event from GTM and forwards it to Meta's
 * server-to-server endpoint, so the conversion survives ad blockers,
 * ITP and other client-side signal loss.
 *
 * Requires these Vercel environment variables:
 *   META_CAPI_TOKEN        - System user token with ads_management
 *   META_CAPI_PIXEL_ID     - defaults to 2073977616567222
 *   META_CAPI_TEST_EVENT   - optional, "1" routes to the test event code below
 *   META_CAPI_TEST_CODE    - optional, value shown in Events Manager > Test Events
 *
 * Never prints the token. Errors are returned without echoing secrets.
 */

const GRAPH_VERSION = process.env.META_GRAPH_API_VERSION || 'v26.0';
const DEFAULT_PIXEL_ID = '2073977616567222';

// Only these origins may post events, so the endpoint cannot be used as an open
// relay for someone else's traffic.
const ALLOWED_ORIGINS = new Set([
  'https://ybdglobal.com',
  'https://www.ybdglobal.com',
]);

// Events we accept from the browser. Anything else is rejected so the endpoint
// cannot be used to inject arbitrary events into the pixel.
const ALLOWED_EVENTS = new Set(['PageView', 'Lead', 'WhatsAppClick']);

function applyCors(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function json(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length > 0) {
    return fwd.split(',')[0].trim();
  }
  return req.socket && req.socket.remoteAddress ? req.socket.remoteAddress : undefined;
}

function cookieValue(req, name) {
  const raw = req.headers.cookie;
  if (!raw) return undefined;
  for (const part of raw.split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    if (part.slice(0, idx).trim() === name) {
      return decodeURIComponent(part.slice(idx + 1).trim());
    }
  }
  return undefined;
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string' && req.body.length > 0) {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  return null;
}

export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    json(res, 405, { ok: false, error: 'method_not_allowed' });
    return;
  }

  // Reject posts from origins we do not own. Requests without an Origin header
  // are allowed so server-side smoke tests (curl) keep working.
  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    json(res, 403, { ok: false, error: 'origin_not_allowed' });
    return;
  }

  const token = process.env.META_CAPI_TOKEN;
  const pixelId = process.env.META_CAPI_PIXEL_ID || DEFAULT_PIXEL_ID;
  if (!token) {
    json(res, 500, { ok: false, error: 'capi_token_not_configured' });
    return;
  }

  const body = parseBody(req);
  if (!body || typeof body !== 'object') {
    json(res, 400, { ok: false, error: 'invalid_json' });
    return;
  }

  const eventName = String(body.event_name || '');
  if (!ALLOWED_EVENTS.has(eventName)) {
    json(res, 400, { ok: false, error: 'event_not_allowed' });
    return;
  }

  // event_id ties this server event to the browser pixel event so Meta
  // deduplicates them instead of counting the conversion twice.
  const eventId = body.event_id ? String(body.event_id).slice(0, 100) : undefined;
  if (!eventId) {
    json(res, 400, { ok: false, error: 'event_id_required' });
    return;
  }

  // event_time must be a recent unix seconds value; default to now and clamp
  // anything more than 7 days old, which Meta rejects.
  const now = Math.floor(Date.now() / 1000);
  let eventTime = Number(body.event_time);
  if (!Number.isFinite(eventTime) || eventTime <= 0) eventTime = now;
  if (now - eventTime > 7 * 24 * 60 * 60) eventTime = now;

  const userData = {
    client_ip_address: clientIp(req),
    client_user_agent: req.headers['user-agent'],
  };
  // fbp/fbc come from the browser; pass them through when present so Meta can
  // stitch the server event to the same browsing session.
  const fbp = body.fbp || cookieValue(req, '_fbp');
  const fbc = body.fbc || cookieValue(req, '_fbc');
  if (fbp) userData.fbp = String(fbp).slice(0, 200);
  if (fbc) userData.fbc = String(fbc).slice(0, 400);
  if (body.fbclid) userData.fbc = `fb.1.${now}.${String(body.fbclid).slice(0, 200)}`;

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: eventTime,
        event_id: eventId,
        action_source: 'website',
        event_source_url: body.event_source_url
          ? String(body.event_source_url).slice(0, 1000)
          : undefined,
        user_data: userData,
        custom_data:
          body.custom_data && typeof body.custom_data === 'object'
            ? body.custom_data
            : { content_name: 'WhatsApp Click' },
      },
    ],
  };

  const testCode = process.env.META_CAPI_TEST_CODE;
  if (process.env.META_CAPI_TEST_EVENT === '1' && testCode) {
    payload.test_event_code = testCode;
  }

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`;

  try {
    const upstream = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const text = await upstream.text();
    if (!upstream.ok) {
      // Return Meta's event-level diagnostics without leaking the token.
      json(res, 200, {
        ok: false,
        status: upstream.status,
        detail: text.slice(0, 500),
      });
      return;
    }
    json(res, 200, { ok: true, events_received: 1, event_id: eventId });
  } catch (err) {
    json(res, 200, {
      ok: false,
      error: 'upstream_unreachable',
      detail: String(err && err.message ? err.message : err).slice(0, 200),
    });
  }
}
