# 安全响应头部配置指南

Astro 构建的是静态站点，安全响应头部需要在服务器/CDN 层配置。

## 推荐的安全头部

### 1. Content-Security-Policy (CSP)
✅ 已在 BaseHead.astro 中通过 meta 标签配置

### 2. X-Frame-Options
```http
X-Frame-Options: DENY
```
防止点击劫持攻击

### 3. X-Content-Type-Options
```http
X-Content-Type-Options: nosniff
```
防止 MIME 类型嗅探

### 4. X-XSS-Protection
```http
X-XSS-Protection: 1; mode=block
```
启用浏览器 XSS 过滤器

### 5. Strict-Transport-Security (HSTS)
```http
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```
强制 HTTPS 连接

### 6. Referrer-Policy
```http
Referrer-Policy: strict-origin-when-cross-origin
```
控制 Referer 信息发送

### 7. Permissions-Policy
```http
Permissions-Policy: geolocation=(), microphone=(), camera=()
```
禁用不需要的浏览器功能

---

## 配置方法

### Netlify 配置

创建 `netlify.toml`:

```toml
# Netlify 配置文件

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"

[[headers]]
  for = "/*.webp"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Vercel 配置

创建 `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Cloudflare Pages 配置

在 `_headers` 文件中:

```http
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.webp
  Cache-Control: public, max-age=31536000, immutable
```

### Apache 配置

在 `.htaccess` 文件中:

```apache
<IfModule mod_headers.c>
  # 安全头部
  Header always set X-Frame-Options "DENY"
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"

  # HSTS (仅 HTTPS)
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

  # 缓存控制
  <FilesMatch "\.(webp|jpg|png|gif|ico|svg)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>

  <FilesMatch "^assets">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
```

### Nginx 配置

```nginx
server {
    listen 443 ssl http2;
    server_name axitermmfg.com;

    # SSL 证书配置
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # 安全头部
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;

    # HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

    # 缓存控制
    location ~* \.(webp|jpg|png|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 站点根目录
    root /var/www/axiterm/dist;
    index index.html;

    # SPA 路由支持
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```

---

## 验证工具

### 1. 在线检查
- Security Headers: https://securityheaders.com/
- Mozilla Observatory: https://observatory.mozilla.org/

### 2. 命令行工具
```bash
# 使用 curl 检查响应头
curl -I https://axitermmfg.com

# 使用 HTTPie
https https://axitermmfg.com
```

### 3. 浏览器 DevTools
1. 打开开发者工具
2. Network 面板
3. 刷新页面
4. 查看响应头

---

## 当前状态

| 头部 | 状态 | 配置方式 |
|------|------|----------|
| Content-Security-Policy | ✅ 已配置 | Meta 标签 |
| X-Frame-Options | ⚠️ 需配置 | 服务器配置 |
| X-Content-Type-Options | ⚠️ 已配置 | Meta 标签 |
| X-XSS-Protection | ⚠️ 需配置 | 服务器配置 |
| Strict-Transport-Security | ⚠️ 需配置 | 服务器配置 (HTTPS) |
| Referrer-Policy | ✅ 已配置 | Meta 标签 |
| Permissions-Policy | ⚠️ 需配置 | 服务器配置 |

---

## 部署检查清单

部署前确认:
- [ ] 已创建 `netlify.toml` 或相应的服务器配置
- [ ] 已启用 HTTPS
- [ ] 已配置 HSTS
- [ ] 已测试安全头部
- [ ] 已运行安全扫描

部署后验证:
- [ ] 访问 https://securityheaders.com
- [ ] 输入网站 URL 进行扫描
- [ ] 目标评分: A 或 A+
