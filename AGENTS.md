# 项目协作规范

## 当前项目

- 项目定位：USB、HDMI、DisplayPort、Hub/Docking Station 与 Charger 的 B2B SEO + RFQ 网站。
- 强制执行顺序：商业定位与产品边界 → 关键词清洗/去重/聚类 → 页面与 URL 规划 → 页面 Brief/内容 → 网站实现 → 验证。
- 未经产品资料或认证文件支持的参数、MOQ、交期、认证和工厂能力，不得作为确定事实发布。
- 页面保持 `private-review`/`noindex`，直到 SERP、语义、商业证据和 RFQ 门禁均通过。
- 页面视觉与响应式修改后，必须同步更新 `astro/page-responsive-audit.md`；至少覆盖桌面、平板、手机三个视口，并记录每个活动路由的状态。

## 易错点记录

- 2026-08-19：应用内浏览器在页面锚点跳转后可能短暂无法生成截图；不要重复截图，应先通过只读布局计算验证样式，随后回到稳定 URL 再进行可视化检查。
- 2026-08-19：Astro dev 热更新或首次编译后，Browser `goto()` 返回不代表目标模块已经可定位；视觉验收深层选择器前必须调用 `waitForLoadState({state:'domcontentloaded'})`，并给 locator 明确的较长超时，避免默认 3 秒导致误报。
- 2026-08-19：`astro/package.json` 没有独立的 `check` script；验证 Astro 页面应直接运行 `npm.cmd run build`，该脚本已串联 `astro check && astro build`，不得先调用不存在的 `npm.cmd run check`。
- 2026-08-19：在受限工作区启动 Astro 开发服务时，若未设置 `ASTRO_TELEMETRY_DISABLED=1`，遥测模块会尝试创建用户目录 `AppData/Roaming/astro/Config` 并触发 `EPERM`；启动预览前必须在同一进程环境中禁用 Astro telemetry。
- 2026-08-16：PowerShell 中通过工具参数传递包含双引号的 `rg` 正则容易被二次解析并产生 `unclosed group`；核对 frontmatter 固定值时应使用 `rg -F` 与单引号包裹的完整字面量，避免不必要的正则。
- 2026-08-16：使用 `rg` 搜索以双连字符开头的 CSS 自定义属性（如 `--green`）时，必须通过 `-e` 指定模式或先使用 `--` 结束选项，否则搜索词会被误判为命令参数。
- 2026-08-16：调整共享组件样式前必须核对页面实际渲染的变体类；`/products/` 与主页都会给 `CategoryDirectory` 传入 `compact=true`，因此排除 `.category-directory--visual` 的选择器不会命中产品目录。需要通过路由语义类区分 home 与 products，并在最终 CSS 中验证选择器优先级。
- 2026-08-16：向大型 CSS 文件追加全局覆盖规则时，不能使用可能在文件中多次出现的通用 `@media` 结尾作为补丁锚点；补丁后必须检查规则实际行号与文件尾部，确保旧规则不会在后面反向覆盖。
- 2026-08-16：PowerShell 不支持 Bash 风格的 `{file-a,file-b}` 路径展开；批量审计指定文件时应分别传入明确路径，或传目录并使用多个 `-g` 过滤条件。
- 2026-08-15：检查 Astro 内容集合配置前必须先用 `rg --files astro/src` 定位真实文件，不得假定配置一定在 `astro/src/content.config.ts`。
- 2026-08-15：从 `astro/` 工作目录复制产品图片时，目标应写成 `public/images/...`，不得再次添加 `astro/`；图片转换脚本没有 npm `images` 别名，应直接执行 `node scripts/convert-to-webp.js`。
- 2026-08-15：PowerShell/工具输出可能把 UTF-8 破折号和箭头显示为乱码，导致 `apply_patch` 按整行匹配失败；修改含特殊字符的长数据行时应使用稳定的 ASCII 字段边界或先拆分数据结构。

- 2026-08-11：读取 Excel 前必须先核对工作表名与真实表头，不能假定状态列统一为 `Status`；本项目验证表位于 `Validation_Checks`，列名为小写 `status`。
- 2026-08-11：交接目录中的 `.git` 是空目录，不是真正 Git 仓库；运行 Git/GitNexus 前先验证 `git status`，不得擅自 `git init`。
- 2026-08-11：Astro 检查可能扫描 `astro/archive`；纯旧行业组件应归档到工作区根目录 `archive/`。
- 2026-08-11：网站构建成功不等于行业迁移完成；还必须检查首页 title/H1、CSS、SVG、图片和旧路由条件。
- 2026-08-11：端口已监听不代表属于当前项目；打开 Dashboard 前必须核对页面标题和数据源。完整 SEO Dashboard 使用 8602，Streamlit 简化筛选器使用 8501。
- 2026-08-11：Gemini 语义复核会向外部 API 发送关键词及指标，必须先获得用户对具体数据传输的明确授权；未授权时保持 `pending-embedding`。
- 2026-08-11：Windows 后台服务应禁用 Astro telemetry，并先检查端口占用；避免破坏已有旧项目预览。
- 2026-08-11：过期工作簿与旧行业脚本不得留在活动输出/根目录中造成误用，应移入可恢复的 `archive/` 并明确标注。
- 2026-08-11：从 `astro/` 执行根目录工具时必须使用正确的绝对路径或切回项目根目录，不能假定相对路径仍从根目录解析。
- 2026-08-11：本机 PowerShell 执行策略会阻止 `npm.ps1`；项目验证应调用 `npm.cmd`。
- 2026-08-11：不要用递归 `Get-ChildItem | Select-String` 扫描整个项目，会被构建依赖拖慢并超时；文本审计优先使用 `rg` 且明确排除 `node_modules`、`dist` 和归档目录。
- 2026-08-11：`usb_connectivity_keyword_architecture_full.xlsx` 的活动表名是 `Keyword_Master`、`Production_Batches`、`SERP_Content_Blueprint` 等，不包含通用模板名 `SEO_Keyword_Library`；读取前必须以实际 sheet list 为准。
- 2026-08-11：PowerShell 读取 Astro 动态路由文件（如 `src/pages/[...slug].astro`）必须使用 `Get-Content -LiteralPath`，否则方括号会被当作通配符。
- 2026-08-12：当前 Astro 主样式入口是 `astro/public/styles/site.css`，不是 `src/styles/global.css`；修改样式前先从 `MainLayout.astro` 核对实际引用路径。
- 2026-08-11：仅让 Astro 执行 `page.render()` 不代表正文会进入生成页面；修改集合页正文逻辑后必须检查最终 JSX 分支是否传入 `<ContentComponent />`，并在 `dist` 中搜索正文锚点验证。
- 2026-08-11：不要把含单双引号正则的多行 Python `-c` 直接嵌进 PowerShell 双引号命令；容易在 PowerShell 解析阶段失败。应使用简单字段解析、现有脚本或单独的 `.py` 文件。
- 2026-08-11：对 Astro 压缩后的单行 HTML 不要使用 `href="/products/.+/.+/"` 这类宽泛正则，会跨标签产生误报；应检查明确的旧 URL 清单。PowerShell `Select-String -SimpleMatch` 的动态含空格字符串也应先赋给变量再用 `-Pattern $needle`。
- 2026-08-11：页面完成度统计必须区分“构建页面数”和“内容路由数”；Astro 构建输出包含自动 404。当前基线是 25 个构建页面、24 个内容路由，不能把 404 算作待重做内容页。
- 2026-08-11：Astro 静态 `redirects` 生成的页面使用 `robots=noindex`，不会带内容页的 `noindex, nofollow`；私有发布检查应识别 meta-refresh 重定向并按其实际 noindex 规则验证。
- 2026-08-11：PowerShell 变量名不区分大小写，`$home` 会覆盖只读的 `$HOME` 并导致后续路径解析错误；所有审计命令必须使用任务专用变量名（如 `$homePageFile`）。
- 2026-08-11：内容 frontmatter、工作簿或多字段审计禁止继续使用含正则的 `python -c`；即使已有转义也容易被 PowerShell 二次解析。必须通过 `apply_patch` 创建可复用 `.py` 审计脚本后执行。
- 2026-08-11：Windows 登录 shell 可能同时注入 `Path` 与 `PATH`，导致 `Start-Process` 报环境字典重复键；启动本地预览服务时优先使用 `login: false` 的 shell。
- 2026-08-11：Windows 下不要把 `*.py` 等通配符直接拼进传给 `rg` 的目录路径；应传目录并使用 `-g '*.py'` 过滤，否则会触发路径语法错误。
- 2026-08-11：设备兼容词的归一化必须同时覆盖 `Mac` 与 `MacBook`；SERP 审核脚本遇到未覆盖词应中止并补规则，不能静默给出默认分类。
- 2026-08-15：旧 Astro/Markdown 文件中的破折号或箭头可能已发生编码损坏，终端显示文本不能直接作为 `apply_patch` 匹配上下文；遇到此类行应拆分无乱码片段修改，必要时用 `apply_patch` 删除并重建短内容文件。
- 2026-08-15：Browser 插件当前绑定不提供 `browser.tabs.newTab()`；本地页面验收应复用已打开标签并调用 `goto()`，或先从插件实时 API 核对可用的新标签方法。
- 2026-08-15：Browser 插件当前 `tab.playwright` 绑定不提供 `consoleMessages()`；不要假定 Playwright 原生或旧版封装方法存在，控制台检查前必须从插件实时 API 核对方法。
- 2026-08-15：产品详情组件为 `astro/src/components/ProductDetail.astro`，不是 `.jsx`；读取或修改前必须先用 `rg --files src/components` 核对真实扩展名。
- 2026-08-15：本地预览构建后 Browser 旧标签可能被回收并返回 `No tab with id`；此时必须丢弃旧 tab 绑定，从当前 browser 的标签列表重新获取，不得继续复用失效句柄。
- 2026-08-15：网站源码位于工作区的 `astro/` 子目录；从项目根目录执行 `rg` 时必须使用 `astro/src`、`astro/public`，或将工作目录切换到 `astro/`，不能直接假定根目录存在 `src/`。
- 2026-08-15：PowerShell 输出可能把 UTF-8 标点显示成乱码，不能把终端中的乱码文本直接作为 `apply_patch` 上下文；应使用稳定的 ASCII 邻近行拆分补丁，或整文件替换。
- 2026-08-15：`apply_patch` 不允许在同一个补丁中对同一路径同时执行 Delete File 和 Add File；整文件重建必须拆成先删除、后新增两个补丁调用。
- 2026-08-15：`PageVisualSummary.astro` 的旧故事文案含乱码箭头，不应依赖整条故事记录作为补丁上下文；新增功能应使用独立路由映射，并以稳定的 ASCII 声明位置插入。
- 2026-08-15：Chrome 页面若有其他扩展界面打开会阻止自动化；在用户未指定浏览器的本地视觉验收中，应保留 Chrome 状态并切换到应用内浏览器继续，不要求用户关闭其扩展界面。
- 2026-08-15：浏览器页面作用域中的全局 `parseFloat` 可能被页面脚本覆盖；视觉验收计算应使用 `Number.parseFloat()` 或避免依赖页面全局同名函数。
- 2026-08-15：`SitePage.astro` 的底部组件调用压缩在同一长行中，补丁不要混入推测的局部行片段；应先用 `Get-Content -Tail` 获取完整实际行，或把变量、Hero和底部调用拆成独立补丁。
- 2026-08-15：工具会话可能只暴露 `exec_command` 而不再提供旧的 `shell_command` 别名；执行前应以当前工具清单为准，避免沿用上个会话的调用名。
- 2026-08-15：Alibaba 商品详情页在 Chrome 中可能超过默认 30 秒加载并重置浏览器控制会话；首次导航应使用至少 60 秒工具超时，优先读取 `domcontentloaded` 和已呈现资源，不等待完整网络空闲。
- 2026-08-15：本机旧版 PowerShell 的 `Format-Hex` 不支持 `-Count`；检查文件头应使用 `Get-Content -Encoding Byte -TotalCount N`。
- 2026-08-15：Chrome 扩展验证刚启动的 Astro dev 页面时，`domcontentloaded` 可能在首次编译阶段超时；超时后应读取当前 title/DOM/图片自然尺寸判断实际状态，不要立即重复导航。
- 2026-08-19：Browser 插件标签对象不一定提供 Playwright 原生 `waitForTimeout()`；视觉验收需要等待时应优先用页面内 `setTimeout`/`evaluate` 或实时核对可用方法。
- 2026-08-19：Browser 插件中旧的裸 `sampleTab` 变量可能不是完整 Tab；应重新通过 `browser.tabs.selected()`、`browser.tabs.new()` 或 `browser.user.claimTab()` 获取 Tab，并使用 `tab.playwright.*` 做 DOM 验收。
- 2026-08-19：英文网站更新中国公司主体信息时，页面主标题、站点名、导航品牌、SEO title 和版权必须使用准确英文译名；中文公司名只能作为 `Chinese legal name` 辅助说明，不得直接作为英文站主品牌展示。
- 2026-08-19：`astro/public/styles/site.css` 是纯 CSS 文件，不支持 Sass 的父选择器 `&`；追加局部样式时必须使用完整选择器，并在构建前用 `rg` 检查残留的无效选择器。
