# 图片优化方案

## 当前状态

| 指标 | 值 |
|------|-----|
| 图片总数 | 35 张 |
| 最大图片 | 1.1MB |
| WebP 格式 | ❌ 未使用 |
| 懒加载 | ❌ 未启用 |
| 响应式 | ❌ 未启用 |

## 已配置的优化

### ✅ 1. Astro 图片服务

在 `astro.config.mjs` 中已启用 Sharp 图片处理服务，支持：
- 自动格式转换 (WebP, AVIF)
- 响应式图片生成
- 自动压缩

### ✅ 2. OptimizedImage 组件

已创建 `src/components/OptimizedImage.astro`，提供：
- 自动 WebP 转换
- 响应式 srcset
- 懒加载支持
- 首屏图片预加载

## 使用方法

### 基础用法

```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<!-- 懒加载图片 (默认) -->
<OptimizedImage
  src="/images/product.jpg"
  alt="Product Name"
/>

<!-- 首屏重要图片 (立即加载) -->
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero Section"
  priority
/>

<!-- 自定义尺寸 -->
<OptimizedImage
  src="/images/factory.jpg"
  alt="Factory"
  widths={[600, 1200, 1800]}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 进阶配置

```astro
<OptimizedImage
  src="/images/team.jpg"
  alt="Our Team"
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  format="webp"
  quality={75}
  fit="cover"
  priority={false}
  class="rounded-lg shadow-lg"
/>
```

### 组件参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `src` | `string` | - | 图片路径 (必需) |
| `alt` | `string` | - | 替代文本 (必需) |
| `widths` | `number[]` | `[400,800,1200]` | 响应式宽度列表 |
| `sizes` | `string` | - | 响应式尺寸条件 |
| `priority` | `boolean` | `false` | 是否预加载 |
| `format` | `string` | `"webp"` | 输出格式 |
| `quality` | `number` | `80` | 压缩质量 (1-100) |
| `fit` | `string` | `"cover"` | 缩放方式 |
| `loading` | `"eager"\|"lazy"` | `"lazy"` | 加载方式 |

## 现有页面更新建议

### 优先级 1: 首页 Hero 图片

```astro
<!-- 当前 -->
<img src="/images/homepage/hero.jpg" alt="Hero" />

<!-- 优化后 -->
<OptimizedImage
  src="/images/homepage/hero.jpg"
  alt="Precision Terminal Wire Assembly Manufacturing"
  priority
  widths={[1200, 1920, 2560]}
  sizes="100vw"
  format="webp"
  quality={85}
/>
```

### 优先级 2: 产品/应用页面图片

```astro
<!-- 当前 -->
<img
  src="/images/applications/consumer-electronics.jpg"
  alt="Consumer Electronics"
  class="w-full h-full object-cover"
  loading="lazy"
/>

<!-- 优化后 -->
<OptimizedImage
  src="/images/applications/consumer-electronics.jpg"
  alt="Consumer Electronics Applications"
  widths={[600, 1200, 1800]}
  sizes="(max-width: 768px) 100vw, 50vw"
  fit="cover"
  class="w-full h-full"
/>
```

## 批量优化现有图片

### 方法 1: 使用 imagemin 脚本

1. 安装依赖：
```bash
npm install --save-dev imagemin imagemin-webp imagemin-mozjpeg imagemin-pngquant
```

2. 运行优化脚本：
```bash
node scripts/optimize-images.js
```

3. 替换图片或更新路径

### 方法 2: 在线工具

- [Squoosh (Google)](https://squoosh.app/) - 批量转换为 WebP
- [TinyPNG](https://tinypng.com/) - 压缩 PNG/JPEG
- [Cloudinary](https://cloudinary.com/) - 在线优化

### 方法 3: 使用 Astro 构建时自动优化

只需要使用 `<OptimizedImage>` 组件，Astro 会在构建时自动：
1. 转换为 WebP
2. 生成多个尺寸
3. 添加合适的 srcset

## 预期效果

### 文件大小

| 格式 | 当前 | 优化后 | 节省 |
|------|------|--------|------|
| JPEG | 1.1MB | ~300KB | **73%** |
| PNG | 940KB | ~200KB | **79%** |

### 性能提升

- ✅ 首屏加载时间减少 **40-60%**
- ✅ LCP (Largest Contentful Paint) 提升
- ✅ 移动端流量节省 **70%**
- ✅ SEO 排名提升 (Core Web Vitals)

## 检查清单

- [ ] 安装图片优化依赖
- [ ] 更新首页 Hero 图片使用 OptimizedImage
- [ ] 更新产品页面图片
- [ ] 更新应用页面图片
- [ ] 更新博客文章图片
- [ ] 运行 Lighthouse 测试验证
- [ ] 检查 Core Web Vitals 分数

## 验证工具

1. **Lighthouse**: Chrome DevTools → Lighthouse
2. **PageSpeed Insights**: https://pagespeed.web.dev/
3. **Image Quality**: Squoosh.app 对比优化前后

## 注意事项

1. **Sharp 依赖**: Sharp 需要 Node.js 原生模块，首次安装可能较慢
2. **构建时间**: 图片优化会增加构建时间，但提升用户体验
3. **占位符**: 可考虑添加 blur 占位符提升感知性能
4. **CDN**: 生产环境建议使用 CDN 加速图片
