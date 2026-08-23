# Legacy Electric Dirt Bike → USB Connectivity Migration Matrix

## 迁移原则

保持功能能力一致，不保持旧行业文案、旧路由、旧 SKU 和旧品牌证据。任何旧数据只有在 USB 项目存在对应真实资料时才能转写为公开 claim。

## 顶层目录处置

| 目录 | 原作用 | USB 项目处置 |
|---|---|---|
| `astro/` | 当前正式静态网站 | 主迁移对象；保留技术栈和功能，全面改写行业数据与内容 |
| `electric dirt bike/` | 关键词架构、Dashboard、Brief 导出 | 保留工具能力，改造为 USB SEO 工作台；旧输出不进入新站 |
| `site-content/` | 旧站 Markdown 内容生产区 | 改为 USB 编辑、证据和状态控制区；发布文案、结构化产品数据和组件职责分层管理 |
| `obsidian-electric-dirt-bike/` | 品牌与内容规则 | 替换为 USB B2B 品牌、claim 和 CTA 规则 |
| `handoff/` | 旧项目 skill 与运行说明 | 改写交接说明；旧 skill 归档，不作为 USB skill 使用 |
| `outputs/` | 旧 SKU 参数提取和新 SEO 输出 | 旧 G1/K2/X1 资料归档；保留 `outputs/usb-seo/` |
| `tools/` | 旧产品表检查脚本 | 根据新产品目录格式重写后再启用 |
| `website/` | Next.js/Vinext 实验站及依赖 | 不作为主站；只审查是否有独立通用能力，随后归档 |
| 根目录社媒脚本 | 旧社媒 Excel 自动化 | 与新网站主线隔离，后续按输入工作簿决定归档或改写 |

## Astro 功能等价迁移

| 旧功能 | 原实现 | USB 等价功能 | 保持标准 |
|---|---|---|---|
| 内容集合 | `src/content/config.ts` | 产品、分类、方案、资源和信任页面 | 保留 schema 校验与状态字段 |
| 动态路由 | `src/pages/[...slug].astro` | 根据新内容 `route` 生成页面 | 保留静态生成和 404 行为 |
| 首页 | `src/pages/index.astro` | B2B 产品能力 + RFQ 首页 | 保留独立首页入口 |
| 产品数据 | `src/data/products.ts` | USB/HDMI/DP/Hub/Charger 数据 | 保留结构化数据驱动，不在组件硬编码 SKU |
| 产品列表 | `ProductGrid.astro` | 产品族和规格卡片 | 保留筛选/浏览职责 |
| 产品详情 | `ProductDetail.astro` | 规格、定制、MOQ/样品状态和 RFQ | 未确认字段显示询问路径，不伪造参数 |
| 决策引擎 | `DecisionEngine.astro` | Connectivity Configurator | 保留多步骤、结果路径、重新开始和 analytics 事件 |
| 购买路径 | 旧 `ShopPathways.astro` | 路径职责合并到 Header、SitePage、ProductGrid 与内容架构 | 保留 Product / Specification / Buyer Intent 分流，不保留旧独立组件 |
| 决策块 | 旧 `BuyerDecisionBlocks.astro` | 采购问题整合到 Configurator 与产品详情 | 保留接口、性能、定制、证据四类决策，不保留旧独立组件 |
| 支持入口 | 旧 `SupportLanding.astro` | Get a Quote、Request Sample、OEM/ODM 与 Evidence Pack 路由 | 保留集中转化职责，不保留旧独立组件 |
| SEO Head | `BaseHead.astro` | 新品牌、关键词、Organization Schema | 保留 canonical、OG、Twitter、noindex |
| CSP | `src/utils/csp.ts` | RFQ 表单/分析服务白名单 | 保留默认拒绝和表单域限制 |
| 私密预览门禁 | `check-launch-readiness.mjs` | 上线前 noindex + 旧品牌/占位符泄漏检查 | 保留并扩展旧行业禁词 |
| 公开上线门禁 | `check-public-launch-readiness.mjs` | 新域名 canonical/robots/sitemap 检查 | 域名确认前不得通过公开门禁 |
| 功能检查 | `check-decision-engine.mjs` | Configurator 的步骤、结果和埋点检查 | 保留自动断言，改写所需片段 |
| 链接检查 | `check-static-links.mjs` | 新路由内部链接检查 | 原样保留功能 |

## 页面映射

旧的成人/儿童/电压/道路合法/竞品页面不逐页改名。它们按页面职责重新映射：

- 成人/儿童产品分类 → USB、HDMI、DisplayPort、Hub/Dock、Charger 产品分类
- 48V/60V/72V 规格页 → 功率、带宽、协议、分辨率和刷新率规格页
- 购买指南 → 接口、功率、带宽、材料、长度和采购指南
- 品牌对比 → 协议/规格比较；竞品品牌词单独审核
- Street Legal → Compliance & Certifications
- Shipping/Warranty/Parts → Sampling、Lead Time、Warranty、Quality 与 After-sales
- Contact Support → Get a Quote / Request a Sample

## 验收标准

1. `npm run build` 通过。
2. 动态路由、产品列表、详情页和配置器均能静态生成。
3. `check:links`、改写后的配置器检查和私密预览门禁通过。
4. 发布产物中不存在 Ovkara、电动越野车 SKU、rider、street-legal 等旧行业内容。
5. 所有产品 claim 都能追溯到新产品资料；缺资料时提供 RFQ 确认路径。
6. 网站主 CTA 统一为 Get a Quote、Request a Sample、Configure & Quote。
7. 公共索引继续关闭，直到品牌名、域名、公司身份、RFQ 接收端和法律政策确认。
