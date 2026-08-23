/**
 * Content Security Policy 配置
 * 防止 XSS、点击劫持等攻击
 */

interface CSPConfig {
  'default-src'?: string;
  'script-src'?: string;
  'script-src-elem'?: string;
  'style-src'?: string;
  'img-src'?: string;
  'font-src'?: string;
  'connect-src'?: string;
  'media-src'?: string;
  'object-src'?: string;
  'frame-src'?: string;
  'base-uri'?: string;
  'form-action'?: string;
  'frame-ancestors'?: string;
  'upgrade-insecure-requests'?: boolean;
}

/**
 * 生成 CSP 字符串
 */
export function generateCSP(config: CSPConfig): string {
  const directives: string[] = [];

  // Default policies
  const defaults = {
    'default-src': "'self'",
    'script-src': "'self' 'unsafe-inline' https://unpkg.com",
    'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
    'font-src': "'self' https://fonts.gstatic.com",
    'img-src': "'self' data: https: blob:",
    'connect-src': "'self' https://formspree.io https://unpkg.com https://fonts.googleapis.com https://fonts.gstatic.com",
    'media-src': "'self'",
    'object-src': "'none'",
    'base-uri': "'self'",
    'form-action': "'self' https://formspree.io",
    'upgrade-insecure-requests': true
  };

  const merged = { ...defaults, ...config };

  // 生成指令字符串
  for (const [key, value] of Object.entries(merged)) {
    if (key === 'upgrade-insecure-requests') {
      if (value === true) directives.push('upgrade-insecure-requests');
    } else if (value) {
      directives.push(`${key} ${value}`);
    }
  }

  return directives.join('; ');
}

/**
 * 开发环境 CSP (更宽松，便于调试)
 */
export const devCSP = generateCSP({
  'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com",
  'connect-src': "'self' https://formspree.io https://unpkg.com ws://localhost:* ws://127.0.0.1:*"
});

/**
 * 生产环境 CSP (严格)
 *
 * 注意：'unsafe-inline' 保留用于 Astro 的 set:html（schema.org JSON-LD）
 * 这些内联脚本内容是静态的，风险较低
 */
export const prodCSP = generateCSP({
  'script-src': "'self' 'unsafe-inline' https://unpkg.com/decap-cms@3.1.0/ https://challenges.cloudflare.com https://static.cloudflareinsights.com https://www.googletagmanager.com",
  'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
  'connect-src': "'self' https://formspree.io https://challenges.cloudflare.com https://static.cloudflareinsights.com https://www.googletagmanager.com",
  'img-src': "'self' data: https: blob:",
  'font-src': "'self' https://fonts.gstatic.com",
  'frame-src': "'self' https://challenges.cloudflare.com https://www.googletagmanager.com", // Allow GTM and Turnstile iframe
  'object-src': "'none'",
  'base-uri': "'self'",
  'form-action': "'self' https://formspree.io",
  'upgrade-insecure-requests': true
});

/**
 * 获取当前环境的 CSP
 */
export function getCSP(): string {
  return import.meta.env.PROD ? prodCSP : devCSP;
}
