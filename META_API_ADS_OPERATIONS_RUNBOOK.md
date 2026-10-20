# YBD Global Meta API 广告操作手册

> 用途：记录 YBD Global 通过 Meta Graph API 创建 Facebook / Instagram 广告的资产、凭证变量、操作顺序和故障处理。
>
> 安全规则：本文不记录 Token、App Secret、密码或 Cookie。任何人不得把完整凭证放入聊天、截图、日志、Git 或工单。

## 0.1 最容易搞混的三件事（先看这里）

| 问题 | 答案 | 详见 |
|---|---|---|
| 帖子版广告的 WhatsApp 点击能用像素/CAPI 追踪吗？ | **不能。** 用户不经过 ybdglobal.com，像素代码没有被执行的机会。 | 第 14 节 |
| 帖子版广告怎么统计转化？ | **Meta 平台自身归因**，靠 Ad Set 的 `optimization_goal=CONVERSATIONS`，不需要像素。 | 14.2 |
| CAPI 装上后是不是所有转化都更全？ | **只对站内转化成立。** 帖子版没有服务端事件可回传。 | 14.3 |

一句话记忆：**像素和 CAPI 只看得见“经过我们网站”的转化；帖子版直接跳 WhatsApp，由 Meta 自己数。**

## 0. 下次更换 Token 速查卡

遇到 Token 失效时，先判断报错：

```text
HTTP 401 / OAuth code 190 / subcode 463 = Token 失效，按下面流程换新
HTTP_STATUS=000 / Could not connect = VPN/代理问题，先修网络，不要换 Token
```

### A. 更换 Instagram Long-lived User Token

适用于 `IG_ACCESS_TOKEN`：

```powershell
# 1. Graph API Explorer 生成短期 Token 后执行
$shortToken = Read-Host "请粘贴短期 Token"

# 2. 从 Meta for Developers → 应用设置 → 基本取得 App ID 和 App Secret
$appId = Read-Host "请输入 App ID"
$appSecret = Read-Host "请输入 App Secret"

# 3. 交换长期 Token
$params = @{grant_type='fb_exchange_token'; client_id=$appId; client_secret=$appSecret; fb_exchange_token=$shortToken}
$response = Invoke-RestMethod -Method Get -Uri 'https://graph.facebook.com/v26.0/oauth/access_token' -Body $params
$response | Select-Object token_type, expires_in

# 4. 保存完整 Token（不要打印 $response）
[Environment]::SetEnvironmentVariable("IG_ACCESS_TOKEN", $response.access_token, "User")

# 5. 只检查长度
$v = [Environment]::GetEnvironmentVariable("IG_ACCESS_TOKEN", "User")
"IG_ACCESS_TOKEN length=$($v.Length)"
```

看到 `bearer` 和约 `5184000` 秒后，完全退出并重启 Codex/发布程序。

### B. 更换广告 API 的 System User Token

适用于 `META_SYSTEM_USER_TOKEN`：

```powershell
$newSystemToken = Read-Host "请粘贴新的 System User Token"
[Environment]::SetEnvironmentVariable("META_SYSTEM_USER_TOKEN", $newSystemToken, "User")
$v = [Environment]::GetEnvironmentVariable("META_SYSTEM_USER_TOKEN", "User")
"META_SYSTEM_USER_TOKEN length=$($v.Length)"
```

然后完全退出并重启 Codex/发布程序。广告 API 不读取 `IG_ACCESS_TOKEN` 作为替代品。

### C. 四条防忘规则

1. `Read-Host` 后先看到提示，再粘贴 Token；不要把 Token 写进引号。
2. 每次只粘贴一条 PowerShell 命令，避免出现 `>>` 或 `UnexpectedToken`。
3. 永远只检查字符数，不输入 `$response` 或 Token 变量本身。
4. 更新后必须重启读取环境变量的程序；不要重复创建 Campaign、Ad Set 或 Ad。

## 1. 当前业务资产

| 资源 | 当前值 | 说明 |
|---|---|---|
| Meta App | `ybdglobal` | 已从 Development 发布为 Live |
| Ad Account | `act_2057020151608679` | 当前广告账户 |
| Facebook Page | `1353929984467874` | YBD Global 公共主页 |
| Instagram Business Account | `17841436689935705` | 通过 Page 关联 |
| Campaign | `120249942924980760` | 美国 WhatsApp 线索广告，`PAUSED` |
| Ad Set | `120250081630700760` | 美国受众，$25/day，`PAUSED` |
| Creative | `3323920341144239` | USB-C 产品图文素材 |
| Ad | `120250081940030760` | 已创建，`PAUSED` |

## 2. 凭证变量

广告 API 使用：

```text
META_SYSTEM_USER_TOKEN
```

Long-lived Instagram User Token 使用：

```text
IG_ACCESS_TOKEN
```

两者不是同一种 Token，不能默认互换。Windows 用户级保存示例：

```powershell
$newSystemToken = Read-Host "请粘贴新的 System User Token"
[Environment]::SetEnvironmentVariable("META_SYSTEM_USER_TOKEN", $newSystemToken, "User")
$check = [Environment]::GetEnvironmentVariable("META_SYSTEM_USER_TOKEN", "User")
"字符数：$($check.Length)"
```

更新后必须完全重启 Codex、PowerShell 或调用程序。检查时只输出长度，不要输出变量值：

```powershell
$v = [Environment]::GetEnvironmentVariable("META_SYSTEM_USER_TOKEN", "User")
if ($v) { "SET; length=$($v.Length)" } else { "EMPTY" }
```

## 3. Meta App 发布

如果 App 仍是 Development Mode，创建 Creative 可能返回“只有应用发布后才能创建广告”。处理顺序：

1. Meta for Developers 选择 `ybdglobal`。
2. 在“发布”页补齐应用图标、隐私政策网址、用户数据删除网址和类别。
3. 广告 API 用例选择“用市场营销 API 创建和管理广告”。
4. 完成“必要操作”后，将 App 发布为 Live。
5. Campaign、Ad Set、Creative、Ad 仍然通过 API 创建，不用浏览器创建广告。

当前图标文件：

```text
astro/public/images/brand/ybd-global-app-icon-1024.png
```

建议公开页面：

```text
https://ybdglobal.com/privacy/
https://ybdglobal.com/data-deletion/
```

提交前必须确认页面已经部署、公开可访问，并符合实际数据处理流程。

## 4. API 创建顺序

```text
产品声明和证据确认
  -> 图片 URL 返回 200 image/*
  -> App = Live
  -> System User Token 可访问 Ad Account
  -> Campaign（PAUSED）
  -> Ad Set（PAUSED）
  -> Ad Creative
  -> Ad（PAUSED）
  -> 只读复核
  -> 人工确认后才允许 ACTIVE
```

常用 Graph API 路径：

```text
GET  /v26.0/{ad-account-id}?fields=id,account_status
GET  /v26.0/{page-id}?fields=access_token
POST /v26.0/{ad-account-id}/campaigns
POST /v26.0/{ad-account-id}/adsets
POST /v26.0/{ad-account-id}/adcreatives
POST /v26.0/{ad-account-id}/ads
GET  /v26.0/{ad-account-id}/campaigns
GET  /v26.0/{ad-account-id}/adsets
GET  /v26.0/{ad-account-id}/ads
```

项目脚本：

```text
tmp/meta_ads_preflight.py
tmp/create_meta_creative_ad.py
tmp/build_paused_meta_ads.py
```

## 5. 当前广告配置和上线门禁

```text
目标：OUTCOME_LEADS
地区：United States
预算：25 USD/day
目标位置：WhatsApp
Campaign：PAUSED
Ad Set：PAUSED
Ad：PAUSED
```

API 创建成功不代表可以投放。激活前必须确认：产品参数有证据、图片 URL 正常、落地页可访问、WhatsApp 可接收消息、广告文案和 Page/Instagram 正确，并且有人负责回复线索。Campaign、Ad Set、Ad 三层必须经过人工确认。

## 6. Token 更新

### Long-lived User Token：完整操作步骤

这套方法适用于把 Graph API Explorer 生成的短期 User Token 换成通常约 60 天有效的 Long-lived User Token。它解决“每天重新生成”的问题，但不保证永久有效，也不会自动续期。

#### A. 获取短期 User Token

1. 打开 Meta Graph API Explorer。
2. 右上角选择正确的 App（当前为 `ybdglobal`）。
3. 点击生成 Access Token，并选择实际需要的权限，例如：

```text
instagram_basic
instagram_content_publish
pages_show_list
pages_read_engagement
pages_manage_posts
```

广告 API 另需根据实际用途申请：

```text
ads_read
ads_management
```

4. 生成后只复制到本机 PowerShell，不要截图或发到聊天。
5. 在 PowerShell 输入下面一行，然后在提示出现后粘贴 Token：

```powershell
$shortToken = Read-Host "请粘贴短期 Token"
```

正确做法是 Token 出现在提示之后；不要把 Token 写进引号，例如不要写成 `Read-Host "EA..."`。

#### B. 获取 App ID 和 App Secret

在 Meta for Developers 中：

```text
我的应用 → ybdglobal → 应用设置 → 基本
```

字段对应关系：

```text
应用编号 = App ID
应用密钥 = App Secret
```

App Secret 只在本机使用，不要发送给同事或写入脚本。若曾经被截图或粘贴到聊天，先在 Meta 后台重置 App Secret。

在同一个 PowerShell 窗口输入：

```powershell
$appId = Read-Host "请输入 App ID"
$appSecret = Read-Host "请输入 App Secret"
```

#### C. 用 OAuth 接口交换 Long-lived Token

确认 `$shortToken`、`$appId`、`$appSecret` 都已在当前 PowerShell 窗口设置后，逐行执行：

```powershell
$params = @{grant_type='fb_exchange_token'; client_id=$appId; client_secret=$appSecret; fb_exchange_token=$shortToken}
```

```powershell
$response = Invoke-RestMethod -Method Get -Uri 'https://graph.facebook.com/v26.0/oauth/access_token' -Body $params
```

只查看类型和有效期：

```powershell
$response | Select-Object token_type, expires_in
```

成功示例：

```text
token_type expires_in
---------- ----------
bearer     5184000
```

`5184000` 秒约为 60 天。不要输入 `$response`，因为它会显示完整 Token。

#### D. 保存到 Windows 用户环境变量

将交换结果中的完整 Token 保存到 Instagram User Token 变量：

```powershell
[Environment]::SetEnvironmentVariable("IG_ACCESS_TOKEN", $response.access_token, "User")
```

只验证是否保存完整，不输出 Token：

```powershell
$storedToken = [Environment]::GetEnvironmentVariable("IG_ACCESS_TOKEN", "User")
"已保存，字符数：$($storedToken.Length)"
```

最后完全退出并重新打开 Codex、PowerShell 或发布程序。已运行的进程不会自动读取新环境变量。

#### E. 重要区别：不要写错变量

```text
IG_ACCESS_TOKEN         = Long-lived Instagram User Token
META_SYSTEM_USER_TOKEN  = Meta 广告 API 使用的 System User Token
META_PAGE_ACCESS_TOKEN  = Page Token，通常应由发布链路动态换取
```

不能因为 `IG_ACCESS_TOKEN` 换成功，就认为 `META_SYSTEM_USER_TOKEN` 已更新。广告账户预检和广告创建脚本当前读取的是 `META_SYSTEM_USER_TOKEN`。

#### F. 有效期维护

Long-lived Token 应在过期前重新交换。不要等到 Meta 返回 `OAuth code 190` 或 `subcode 463` 后才处理。若已经过期，通常需要重新从 Graph API Explorer 获取短期 Token，再重复 A-D。

不要把 App Secret、短期 Token、Long-lived Token 或完整 API 请求 URL 写入日志、截图、Git 或聊天。若 Token 被公开，立即撤销/重新生成。

### System User Token

广告 API 返回 HTTP 401、OAuth code 190 或 `Session has expired` 时：

1. 不要删除现有 Campaign、Ad Set 或 Ad。
2. 在 Business Settings → 用户 → 系统用户确认资产仍已分配。
3. 重新生成可访问 App、Page、Instagram 和 Ad Account 的 System User Token。
4. 更新 `META_SYSTEM_USER_TOKEN`，重启调用程序。
5. 先做只读账户验证，再创建新资源。

## 7. 网络与代理排查

当前项目常用 Clash HTTP 代理：

```text
http://127.0.0.1:7897
```

```powershell
Test-NetConnection 127.0.0.1 -Port 7897 -InformationLevel Quiet
curl.exe --proxy http://127.0.0.1:7897 https://graph.facebook.com
```

`Test-NetConnection=True` 只代表 TCP 端口打开，不代表 HTTPS 代理可用。`HTTP_STATUS=000` 或 `Could not connect` 是代理、DNS、TUN 或线路问题，不是 Token 失效。若 TUN 导致不稳定，可临时关闭 TUN、保留系统代理、选择明确可用节点并重启 Clash 核心。

## 8. 错误对照

| 错误 | 含义 | 处理 |
|---|---|---|
| HTTP 401 / OAuth code 190 | Token 失效、撤销或无权访问 | 更新 System User Token，先只读验证 |
| subcode 463 / Session expired | 当前凭证过期 | 重新生成对应类型 Token |
| HTTP_STATUS=000 | 请求没有稳定到达 Meta | 检查 Clash、DNS、TUN、HTTP 端口 |
| Development Mode 无法创建广告 | App 尚未 Live | 完成发布资料并发布 App |
| Unsupported get request | endpoint、字段或 ID 不适用 | 检查 API 路径、ID 和版本 |

## 9. 数据资源审计记录

每次创建或修改后记录：操作时间（中国标准时间）、操作人、App、Ad Account、Page、Instagram ID、Campaign/Ad Set/Creative/Ad ID、目标、地区、预算、WhatsApp 目标、API 版本、脚本、结果状态、错误码和负责人。

永远不要记录 Access Token、App Secret、密码、Cookie、Session Token，或包含完整凭证的请求 URL/截图。

## 10. 当前完成状态

- Meta App 已发布为 Live。
- Campaign、Ad Set 已创建并保持 `PAUSED`。
- Creative、Ad 已通过 Graph API 创建并保持 `PAUSED`。
- 尚未授权自动激活广告。
- 下一步是只读复核素材、落地页、WhatsApp 和线索跟进流程。
- 2026-10-20：像素与 WhatsApp 转化追踪已接通并实测通过，详见第 11 节。

## 11. 像素与 WhatsApp 转化追踪

### 11.1 资产 Record

| 项目 | 值 |
|---|---|
| Meta Pixel ID | `2073977616567222`（名称 `YBDglobal`，`is_unavailable=false`） |
| Pixel 创建时间 | 2026-10-19 16:51:26 UTC |
| 像素所属资产 | 已关联 Ad Account `act_2057020151608679` |
| GTM 账户 | `accounts/6373694362`（ybdglobal） |
| GTM 容器 | `accounts/6373694362/containers/262417631` |
| GTM 公开 ID | `GTM-M6PD9TNJ` |
| GTM Workspace | `6`（Default Workspace） |
| 线上容器版本 | `6`（Meta Pixel + WhatsApp Lead tracking） |
| WhatsApp 号码 | `8613613046291`（`wa.me` 已实测返回 200） |

### 11.2 GTM 资源

| 类型 | 名称 | ID | 触发条件 |
|---|---|---|---|
| 触发器 | WhatsApp CTA click | `9` | Click URL 包含 `wa.me/8613613046291`（`linkClick`） |
| 标签 | Meta Pixel - Base (PageView) | `10` | All Pages |
| 标签 | Meta Pixel - WhatsApp Lead | `11` | 上述触发器 |

Lead 标签内容为 `fbq('track','Lead',{content_name:'WhatsApp Click',content_category:'Product CTA'})`，并用 `if (window.fbq)` 做存在性保护。

### 11.3 页面侧改动

- `astro/src/components/ProductDetail.astro`：购买面板第三个动作 `Chat on WhatsApp`，`data-whatsapp-source="product-detail"`，预填产品型号。
- `astro/src/layouts/MainLayout.astro`：全站悬浮入口 `.whatsapp-float`，`data-whatsapp-source="floating"`。
- `astro/public/styles/site.css`：`v131`，断点契约见 `astro/page-responsive-audit.md`。
- 2026-10-20 已 commit `190162f`、`79d923e` 并推送到 `origin/main`，Vercel 已上线 `v131`。

### 11.4 验证方法与结果（2026-10-20 实测）

静态检查：

```powershell
# 线上容器是否含像素
curl.exe -s --proxy http://127.0.0.1:7897 "https://www.googletagmanager.com/gtm.js?id=GTM-M6PD9TNJ" | Select-String "2073977616567222"

# 页面是否含 wa.me 与悬浮入口
curl.exe -s --proxy http://127.0.0.1:7897 "https://ybdglobal.com/" | Select-String "wa.me/8613613046291"
```

浏览器验证（Chrome DevTools → Network，筛选 `2073977616567222`，勾选 Keep log）：

| 请求 | 预期 |
|---|---|
| `2073977616567222?v=...&r=stable` | 200 script（像素脚本加载） |
| `tr?id=2073977616567222&ev=PageView` | 200 text/plain |
| `tr?id=2073977616567222&ev=Lead` | 200 text/plain（点击 WhatsApp 后） |

实测结果：三条请求均返回 **200**，`ev=Lead` 已到达 Meta。

服务端交叉验证：

```powershell
$tok = [Environment]::GetEnvironmentVariable('META_SYSTEM_USER_TOKEN','User')
$u = "https://graph.facebook.com/v26.0/2073977616567222?fields=id,name,last_fired_time&access_token=$tok"
curl.exe -s --max-time 30 --proxy http://127.0.0.1:7897 $u
```

实测 `last_fired_time` 在测试后由 `2026-10-20T14:49:31+0000` 更新为 `2026-10-20T15:05:05+0000`，证明 Meta 端真实接收。

安全头检查：`ybdglobal.com` 当前**未下发** `Content-Security-Policy` 响应头，`connect.facebook.net` 不被拦截。`astro/src/utils/csp.ts` 中的 CSP 配置目前未生效于线上；若将来启用 CSP，必须放行 `connect.facebook.net`（`script-src`）与 `www.facebook.com`（`connect-src`），否则像素会被拦截。

### 11.5 排错要点

| 现象 | 判断 |
|---|---|
| GTM 预览显示标签「成功」但无 `tr?` 请求 | 仅代表标签无异常；`window.fbq` 可能未就绪导致 `if` 静默跳过，须以 Network 面板为准 |
| Network 无 `fbevents.js` | 像素脚本未加载，检查 Base 标签是否触发 |
| 预览面板「未触发」随后又「已触发」 | 面板刷新时序，不代表故障，以点击事件为准 |
| `last_fired_time` 未立即更新 | 聚合字段有延迟；以 Network 的 `ev=Lead` 200 为准 |
| Network 筛选 `tr?` 无结果 | `?` 在 DevTools 筛选中有特殊含义，改用纯数字像素 ID 或清空筛选 |

### 11.6 已知待决策项

1. **优化目标与事件不匹配**：Ad Set `optimization_goal=CONVERSATIONS`（Meta 自带 WhatsApp 对话统计），像素上报的是 `Lead` 事件。目前 `Lead` 数据只能观察，不能用于优化。如需用上，须将 Ad Set 改为 `OFFSITE_CONVERSIONS` 并绑定该事件。
2. **事件命名**：已决定**保持 `Lead`**（2026-10-20），不再改为 `WhatsAppClick`。CAPI 白名单同时接受 `PageView`、`Lead`、`WhatsAppClick`，将来如要切换无需改服务端。
3. **广告仍全部 PAUSED**：三层均未激活，激活需人工明确确认。

## 12. 服务器端事件回传（CAPI）

### 12.1 为什么单独一个 Vercel 项目

站点从 `astro/` 根目录部署（Root Directory = `astro`），且 `astro/vercel.json` 固定 `outputDirectory: dist`。Vercel 因此把它当纯静态站点，**不会扫描 `api/` 目录**。为不动线上构建配置，CAPI 端点独立成第二个 Vercel 项目，共用同一仓库 `sacdxj/ybdglobal`，Root Directory 指向 `capi-service`。

| 项目 | Root Directory | 用途 | 域名 |
|---|---|---|---|
| `ybdglobal` | `astro` | 网站 | `ybdglobal.com` |
| `ybdglobal-capi-service` | `capi-service` | CAPI 端点 | `ybdglobal-capi-service.vercel.app` |

### 12.2 端点

```text
POST https://ybdglobal-capi-service.vercel.app/api/capi
```

请求体：

```json
{
  "event_name": "Lead",
  "event_id": "与浏览器像素共用的唯一 ID",
  "event_time": 1792500000,
  "event_source_url": "https://ybdglobal.com/products/...",
  "custom_data": {"content_name": "WhatsApp Click"}
}
```

服务端行为：

- 白名单事件：`PageView`、`Lead`、`WhatsAppClick`，其他一律 400。
- `event_id` 必填，用于与浏览器像素去重。
- `event_time` 缺失或超过 7 天自动纠正为当前时间。
- 来源白名单：仅 `https://ybdglobal.com` 与 `https://www.ybdglobal.com`；无 `Origin` 头的请求（服务端 curl 测试）放行。
- 失败时返回 **HTTP 200 + `ok:false`**，避免追踪故障阻断页面交互。

### 12.3 环境变量（配置在 `ybdglobal-capi-service` 项目）

| 变量 | 必需 | 说明 |
|---|---|---|
| `META_CAPI_TOKEN` | 是 | System User Token，需 `ads_management`，必须存为 Secret |
| `META_CAPI_PIXEL_ID` | 否 | 默认 `2073977616567222` |
| `META_CAPI_TEST_EVENT` | 否 | `1` 时把事件送入 Test Events |
| `META_CAPI_TEST_CODE` | 否 | Events Manager 里形如 `TESTxxxxx` 的测试代码 |
| `META_GRAPH_API_VERSION` | 否 | 默认 `v26.0` |

Token 只存在于 Vercel 面板，不进入仓库、日志或聊天。

### 12.4 GTM 标签（`Meta Pixel - WhatsApp Lead`，tagId 11）

同一个 `event_id` 同时供浏览器像素和 CAPI 使用，Meta 据其去重：

```javascript
var eid = (window.crypto && crypto.randomUUID)
  ? crypto.randomUUID()
  : String(Date.now()) + '-' + Math.random().toString(16).slice(2);

if (window.fbq) {
  fbq('track', 'Lead', {content_name: 'WhatsApp Click'}, {eventID: eid});
}

fetch('https://ybdglobal-capi-service.vercel.app/api/capi', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  keepalive: true,
  body: JSON.stringify({
    event_name: 'Lead',
    event_id: eid,
    event_time: Math.floor(Date.now() / 1000),
    event_source_url: location.href,
    custom_data: {content_name: 'WhatsApp Click'}
  })
}).catch(function () {});
```

容器版本 **7**（`CAPI relay for WhatsApp Lead`）已发布，线上 `gtm.js` 实测包含 `capi-service` 调用与 `eventID` 参数。

### 12.5 验证记录（2026-10-20）

端点自测：

| 用例 | 结果 |
|---|---|
| 合法 POST | `{"ok":true,"events_received":1}` |
| `Origin: https://evil.example` | `{"ok":false,"error":"origin_not_allowed"}` |
| `Origin: https://ybdglobal.com` | `{"ok":true,...}` |
| `event_name: Purchase` | `{"ok":false,"error":"event_not_allowed"}` |
| 缺 `event_id` | `{"ok":false,"error":"event_id_required"}` |

浏览器侧验证：产品页点击 WhatsApp 后，Network 中应同时出现 `tr?id=2073977616567222&ev=Lead`（200）与 `capi-service.vercel.app/api/capi`（`ok:true`）两条请求。

### 12.6 GTM 工作区注意事项

发布容器版本后，GTM 会重建默认工作区，**workspaceId 会变化**（本次从 `6` 变为 `7`）。继续用旧 ID 操作会返回 `Workspace is already submitted`。每次发布后应重新查询：

```text
GET /tagmanager/v2/accounts/6373694362/containers/262417631/workspaces
```

### 12.7 CAPI 覆盖边界

CAPI 只能捕获发生在 `ybdglobal.com` 上的转化。**帖子版广告**（`object_story_id` 指向主页帖子，按钮直接跳 `api.whatsapp.com`）完全不经过本站服务器，因此既无像素事件也无 CAPI 事件，只能依赖 Meta 自身的 `CONVERSATIONS` 归因。这是平台限制，不是配置缺陷。

## 13. 广告素材：帖子版 vs 站内版

2026-10-20 在同一 Ad Set（`120250081630700760`）下并存两个广告，均 `PAUSED`：

| Ad ID | 素材形式 | Creative | 转化路径 | 追踪方式 |
|---|---|---|---|---|
| `120250081940030760` | 产品图文 → 站内页 | `3323920341144239` | 落站后点 WhatsApp | 像素 + CAPI |
| `120250098986220760` | 主页帖子原生按钮 | `1051997141224100` | 直接进 WhatsApp | Meta `CONVERSATIONS` |

帖子 ID `1353929984467874_122122938123463557`，`is_eligible_for_promotion=true`，CTA 由 Meta 自动改写为 `api.whatsapp.com/send?phone=8613613046291`。

已知瑕疵：该帖子 `full_picture` 抓取的是首页通用横幅 `connectivity-range-hero.webp`，非具体产品图。因 Creative 通过 `object_story_id` 引用帖子，在 Facebook 后台编辑帖子图片后广告会自动同步，无需重建 Creative。

**两个广告均未激活，激活需人工明确确认。**

## 14. 概念澄清：为什么帖子版的 WhatsApp 点击追踪不到

这一节记录 2026-10-20 讨论中反复被混淆的点，避免以后误判为配置遗漏。

### 14.1 核心事实：事件代码只在站内生效

像素 `Lead` 事件由**用户浏览器执行 `fbq()`** 发出，前提是页面加载了 GTM 与像素脚本。该脚本只存在于 `ybdglobal.com`。

```text
站内版：点击广告 → 打开 ybdglobal.com → GTM 加载 → 点 WhatsApp → fbq('Lead') 发出
帖子版：点击帖子按钮 → api.whatsapp.com → 从不经过 ybdglobal.com → 无代码可执行
```

帖子版追踪不到**不是漏配**，而是那条路径上没有我们的代码。

### 14.2 两种广告的追踪归属（不要混用）

| 广告形式 | 转化由谁记录 | 需要像素 | 需要 CAPI | 需要的优化目标 |
|---|---|---|---|---|
| 站内版（产品图文 → 站内页） | 我们的像素 + CAPI | 是 | 是 | `OFFSITE_CONVERSIONS`（绑 pixel + LEAD） |
| 帖子版（主页帖子原生按钮） | Meta 平台自身 | 否 | 否 | `CONVERSATIONS` |

### 14.3 四条常见误判（逐条纠正）

1. **“已经装了 WhatsApp 转化事件，所以任何 WhatsApp 点击都能追踪”** — 错。事件只在站内页面生效。帖子版用户从未到站，事件无从触发。
2. **“帖子版也需要配像素/CAPI 才能统计”** — 错。Meta 在“广告点击 → 跳转 WhatsApp”链路上自己就能归因，`CONVERSATIONS` 不依赖像素。
3. **“CAPI 装上后所有转化都会更全”** — 只在**站内转化**上成立。帖子版没有任何服务端事件可回传，CAPI 帮不上。
4. **“优化目标一旦设成 CONVERSATIONS 就改不了”** — 错。`optimization_goal` 是普通可写字段，随时可改。真正约束不是“改不了”，而是**改了之后帖子版广告就失去优化信号**，因为帖子版产生不了 `Lead` 事件。

### 14.4 优化目标与事件的对应关系

```text
optimization_goal = CONVERSATIONS
  → Meta 用平台内 WhatsApp 对话优化
  → 像素/CAPI 的 Lead 仅进报表，不参与优化
  → 帖子版可用

optimization_goal = OFFSITE_CONVERSIONS
  + promoted_object = {pixel_id: 2073977616567222, custom_event_type: LEAD}
  → Meta 用像素/CAPI 上报的 Lead 优化
  → 需要广告路径经过 ybdglobal.com
  → 帖子版不可用（产生不了 Lead 事件）
```

### 14.5 决策记录（2026-10-21）

- 当前 Ad Set `120250081630700760` 保持 `optimization_goal=CONVERSATIONS`，`destination_type=WHATSAPP`，`promoted_object.page_id=1353929984467874`。此配置**正好匹配帖子版广告**，无需修改即可激活。
- 倾向使用**帖子版**投放；站内版广告 `120250081940030760` 保留但暂停，不消耗预算。
- 若要改走站内版 + CAPI 优化，需将 Ad Set 改为 `OFFSITE_CONVERSIONS` 并绑定像素 `2073977616567222` 的 `LEAD` 事件；帖子版届时会失去优化信号。
- 两种形式若需并行对比，必须拆成两个 Ad Set（优化目标不同，无法共用）。
- **三层广告仍全部 `PAUSED`，激活需人工明确确认。**

### 14.6 激活前必须人工确认的门禁

API 无法验证以下事项，激活前必须由负责人确认：

1. WhatsApp 号码 `+86 136 1304 6291` 有人实时接待，且能覆盖美国买家活跃时段（北京时间深夜）。
2. 帖子图片是否替换为具体产品图（当前为首页通用横幅）。
3. 预算与结束时间：`$15/day`，`end_time=2026-11-03T23:59:59+0800`。
4. 明确激活范围（Campaign / Ad Set / 哪个 Ad），且保持未选中的广告为 `PAUSED`。
