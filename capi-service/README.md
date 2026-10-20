# Meta CAPI Service

Server-side relay for Meta Conversions API events from `ybdglobal.com`.

The site is a static Astro build served from the Vercel project whose Root
Directory is `astro`, and that project pins `outputDirectory: dist`. Vercel
therefore treats it as a pure static site and never scans an `api/` folder, so
the relay lives in its own project and is deployed separately.

## Why a separate project

- Zero risk to the live marketing site build config (`astro/vercel.json` is
  untouched).
- An outage or bad deploy here cannot take the site down.
- The relay can be redeployed independently.

## Endpoint

```
POST https://<capi-project>.vercel.app/api/capi
```

Body:

```json
{
  "event_name": "Lead",
  "event_id": "uuid-shared-with-browser-pixel",
  "event_time": 1792500000,
  "event_source_url": "https://ybdglobal.com/products/...",
  "custom_data": { "content_name": "WhatsApp Click" }
}
```

Accepted `event_name` values: `PageView`, `Lead`, `WhatsAppClick`.
`event_id` is required: it is the deduplication key shared with the browser
pixel, so Meta counts the conversion once even though it arrives twice.

Response on success:

```json
{ "ok": true, "events_received": 1, "event_id": "..." }
```

Failures return HTTP 200 with `ok: false` and Meta's diagnostic text, so the
browser never throws and the UI is never blocked by tracking problems.

## Environment variables (set in the CAPI Vercel project)

| Name | Required | Notes |
|---|---|---|
| `META_CAPI_TOKEN` | yes | System user token with `ads_management`. Mark as Secret. |
| `META_CAPI_PIXEL_ID` | no | Defaults to `2073977616567222`. |
| `META_CAPI_TEST_EVENT` | no | `1` routes events to Test Events. |
| `META_CAPI_TEST_CODE` | no | The `TESTxxxxx` value from Events Manager. |
| `META_GRAPH_API_VERSION` | no | Defaults to `v26.0`. |

Never commit the token. It must only exist in the Vercel dashboard.

## Deploy

1. In Vercel, **Add New → Project** and import this repository.
2. Set **Root Directory** to `capi-service`.
3. Framework preset: **Other**. Build command: none. Output directory: none.
4. Add the environment variables above (Production).
5. Deploy. Note the resulting URL, e.g. `ybdglobal-capi.vercel.app`.

## Verify

Health check (no Origin header, so the origin guard is skipped):

```powershell
curl.exe -s -X POST "https://<capi-url>/api/capi" `
  -H "Content-Type: application/json" `
  -d '{\"event_name\":\"Lead\",\"event_id\":\"smoke-test-1\"}'
```

Expect `{"ok":true,"events_received":1,...}`. If it returns
`capi_token_not_configured`, the environment variable is missing in the CAPI
project.

Origin guard check, which must be rejected:

```powershell
curl.exe -s -X POST "https://<capi-url>/api/capi" `
  -H "Origin: https://evil.example" `
  -H "Content-Type: application/json" `
  -d '{\"event_name\":\"Lead\",\"event_id\":\"x\"}'
```

Expect `{"ok":false,"error":"origin_not_allowed"}`.

## Wiring GTM to this endpoint

The browser pixel and this relay must send the **same `event_id`**, otherwise
Meta counts the conversion twice.

In the GTM tag `Meta Pixel - WhatsApp Lead`, generate one id and use it for both
calls:

```javascript
var eid = (window.crypto && crypto.randomUUID)
  ? crypto.randomUUID()
  : String(Date.now()) + '-' + Math.random().toString(16).slice(2);

// browser pixel
if (window.fbq) {
  fbq('track', 'Lead', { content_name: 'WhatsApp Click' }, { eventID: eid });
}

// server relay
fetch('https://<capi-url>/api/capi', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  keepalive: true,
  body: JSON.stringify({
    event_name: 'Lead',
    event_id: eid,
    event_time: Math.floor(Date.now() / 1000),
    event_source_url: location.href,
    custom_data: { content_name: 'WhatsApp Click' }
  })
}).catch(function () {});
```

## Scope limit: post-based ads

This relay only sees conversions that happen on `ybdglobal.com`. Ads that use a
Page post whose WhatsApp button jumps straight to `api.whatsapp.com` never touch
our server, so no pixel or CAPI event exists for them. Meta's own
`CONVERSATIONS` attribution covers those instead.
