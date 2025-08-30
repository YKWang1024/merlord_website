# 🖼️ Merlord 网站图片优化指南

## 📋 概述
本文档详细列出了 Merlord 淋浴门销售网站中所有图片的推荐尺寸、格式和优化策略，帮助提升网站加载速度和用户体验。

---

## 🎯 图片优化目标
- **减少页面加载时间**：目标减少 30-50% 的图片加载时间
- **提升 PageSpeed 分数**：解决图片相关的性能问题
- **优化用户体验**：确保图片在不同设备上都能快速加载
- **节省带宽**：减少不必要的图片数据传输

---

## 📱 响应式断点
```css
/* 移动端优先设计 */
/* 小屏幕手机: 320px - 480px */
/* 大屏幕手机: 481px - 768px */
/* 平板电脑: 769px - 1024px */
/* 桌面电脑: 1025px - 1200px */
/* 大屏幕桌面: 1201px+ */
```

---

## 🏷️ Logo 和品牌图片

### 主 Logo
- **文件**: `assets/img/logo/merlord_logo.jpeg`
- **推荐尺寸**: 200px × 80px (2.5:1 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 导航栏、页脚
- **优化策略**: 
  - 移动端: 150px × 60px
  - 桌面端: 200px × 80px

### Logo 变体
- **文件**: `assets/img/logo/logo.png`, `assets/img/logo/logo-light.png`
- **推荐尺寸**: 180px × 72px (2.5:1 比例)
- **格式**: PNG (支持透明背景)
- **用途**: 深色/浅色主题切换

### Favicon
- **文件**: `assets/img/logo/favicon.png`
- **推荐尺寸**: 32px × 32px, 16px × 16px
- **格式**: PNG, ICO
- **用途**: 浏览器标签页图标

---

## 🎠 轮播图 (Slider)

### 主轮播图
- **文件**: `assets/img/slider/` 目录下的图片
- **推荐尺寸**: 1920px × 1080px (16:9 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 首页横幅、产品展示
- **响应式尺寸**:
  - 移动端: 768px × 432px (16:9)
  - 平板端: 1024px × 576px (16:9)
  - 桌面端: 1920px × 1080px (16:9)

### 轮播图优化策略
```html
<!-- 使用 picture 元素实现响应式图片 -->
<picture>
  <source media="(max-width: 768px)" 
          srcset="slider-1-768w.webp" 
          type="image/webp">
  <source media="(max-width: 1024px)" 
          srcset="slider-1-1024w.webp" 
          type="image/webp">
  <source srcset="slider-1-1920w.webp" 
          type="image/webp">
  <img src="slider-1-1920w.jpg" 
       alt="California Coastal Master Suite">
</picture>
```

---

## 🏠 首页特色图片

### 关于我们区域
- **文件**: `assets/img/index/california-casual-primary-bathroom-remodel-marin-county-interior-designer-california-daydreams24.webp`
- **推荐尺寸**: 600px × 400px (3:2 比例)
- **格式**: WebP (已优化)
- **用途**: 首页关于我们介绍

- **文件**: `assets/img/index/California_Spanish_Inspired_Bathroom.jpg`
- **推荐尺寸**: 600px × 400px (3:2 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 首页关于我们介绍

### 服务图标
- **文件**: `assets/img/service/measurement.png`, `conversation.png`, `asian_installation.png`, `beyond.png`
- **推荐尺寸**: 120px × 120px (1:1 比例)
- **格式**: PNG (支持透明背景)
- **用途**: 服务介绍图标
- **优化策略**: 使用 SVG 格式替代 PNG

---

## 🖼️ 案例展示图片

### 项目案例
- **文件**: `assets/img/case/01.jpg` 到 `assets/img/case/06.jpg`
- **推荐尺寸**: 400px × 300px (4:3 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 项目展示、作品集
- **响应式尺寸**:
  - 移动端: 300px × 225px
  - 平板端: 350px × 263px
  - 桌面端: 400px × 300px

### 案例详情页
- **文件**: `assets/img/case/single.jpg`
- **推荐尺寸**: 800px × 600px (4:3 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 案例详情页大图

---

## 👥 团队照片

### 团队成员
- **文件**: `assets/img/team/01.jpg` 到 `assets/img/team/04.jpg`
- **推荐尺寸**: 300px × 400px (3:4 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 团队介绍、关于我们页面
- **优化策略**: 使用正方形裁剪 (300px × 300px) 保持一致性

---

## 💬 客户评价头像

### 评价头像
- **文件**: `assets/img/testimonial/` 目录下的图片
- **推荐尺寸**: 120px × 120px (1:1 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 客户评价展示
- **优化策略**: 圆形裁剪，使用 CSS border-radius

---

## 📝 博客图片

### 博客缩略图
- **文件**: `assets/img/blog/01.jpg`, `02.jpg`, `03.jpg`
- **推荐尺寸**: 400px × 250px (8:5 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 博客列表页缩略图

### 博客详情图
- **文件**: `assets/img/blog/single.jpg`
- **推荐尺寸**: 800px × 500px (8:5 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 博客详情页大图

### 博客作者头像
- **文件**: `assets/img/blog/author.jpg`
- **推荐尺寸**: 80px × 80px (1:1 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 博客作者信息

---

## 🚿 淋浴门产品图片

### 产品展示图
- **文件**: `assets/img/frameless_shower_doors/` 目录下的图片
- **推荐尺寸**: 600px × 400px (3:2 比例)
- **格式**: WebP + PNG 后备 (保持透明背景)
- **用途**: 产品展示、详情页

---

## 🤝 合作伙伴 Logo

### 合作伙伴
- **文件**: `assets/img/partner/01.png`, `02.png`
- **推荐尺寸**: 200px × 100px (2:1 比例)
- **格式**: PNG (支持透明背景)
- **用途**: 合作伙伴展示
- **优化策略**: 使用 SVG 格式替代 PNG

---

## 📍 页面背景图片

### 联系页面背景
- **文件**: `assets/img/contact/contact.jpg`
- **推荐尺寸**: 1200px × 600px (2:1 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 联系页面背景

### 面包屑背景
- **文件**: `assets/img/breadcrumb/breadcrumb.jpg`
- **推荐尺寸**: 1920px × 300px (6.4:1 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 页面面包屑导航背景

---

## 🎬 视频缩略图

### 视频封面
- **文件**: `assets/img/video/video.jpg`
- **推荐尺寸**: 800px × 450px (16:9 比例)
- **格式**: WebP + JPEG 后备
- **用途**: 视频播放器封面

---

## ⚡ 图片优化技术策略

### 1. 格式选择
```html
<!-- 使用 picture 元素提供多种格式 -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="描述">
</picture>
```

### 2. 响应式图片
```html
<!-- 使用 srcset 和 sizes 属性 -->
<img src="image-800w.jpg"
     srcset="image-400w.jpg 400w,
             image-800w.jpg 800w,
             image-1200w.jpg 1200w"
     sizes="(max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
     alt="描述">
```

### 3. 懒加载
```html
<!-- 使用 loading="lazy" 属性 -->
<img src="image.jpg" loading="lazy" alt="描述">

<!-- 或使用 Intersection Observer API -->
<img data-src="image.jpg" class="lazy" alt="描述">
```

### 4. 图片压缩
- **WebP**: 质量 80-85%
- **JPEG**: 质量 85-90%
- **PNG**: 使用 pngquant 压缩

---

## 📱 移动端优化

### 图片尺寸策略
```css
/* 移动端图片优化 */
@media (max-width: 768px) {
  .hero-image {
    width: 100%;
    height: auto;
    max-width: 768px;
  }
  
  .case-image {
    width: 100%;
    height: auto;
    max-width: 400px;
  }
}
```

### 触摸优化
- 确保图片在触摸设备上有足够的点击区域
- 使用适当的图片尺寸避免过度缩放

---

## 🚀 性能优化建议

### 1. 图片预加载
```html
<!-- 预加载关键图片 -->
<link rel="preload" as="image" href="hero-image.webp">
<link rel="preload" as="image" href="logo.webp">
```

### 2. 图片缓存
```nginx
# Nginx 配置 - 图片缓存策略
location ~* \.(jpg|jpeg|png|gif|ico|webp|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    add_header Vary "Accept-Encoding";
}
```

### 3. CDN 优化
- 使用字节跳动 CDN 加速图片加载
- 配置图片压缩和格式转换
- 启用 HTTP/2 和 Brotli 压缩

---

## 📊 图片优化检查清单

### ✅ 格式优化
- [ ] 将 JPEG 转换为 WebP 格式
- [ ] 保持 PNG 的透明背景
- [ ] 使用适当的压缩质量

### ✅ 尺寸优化
- [ ] 根据使用场景调整图片尺寸
- [ ] 实现响应式图片加载
- [ ] 避免加载过大的图片

### ✅ 性能优化
- [ ] 启用图片懒加载
- [ ] 配置适当的缓存策略
- [ ] 使用 CDN 加速

### ✅ 用户体验
- [ ] 确保图片加载时的占位符
- [ ] 优化图片 alt 属性
- [ ] 测试不同网络环境下的加载速度

---

## 🛠️ 工具推荐

### 图片压缩工具
- **TinyPNG**: 在线压缩 PNG/JPEG
- **Squoosh**: Google 在线图片优化工具
- **ImageOptim**: Mac 桌面应用
- **FileOptimizer**: Windows 桌面应用

### 格式转换工具
- **cwebp**: 命令行 WebP 转换
- **ImageMagick**: 批量图片处理
- **GIMP**: 免费图片编辑软件

### 性能测试工具
- **PageSpeed Insights**: Google 性能测试
- **GTmetrix**: 网站性能分析
- **WebPageTest**: 详细性能测试

---

## 📈 预期效果

### 性能提升
- **页面加载时间**: 减少 30-50%
- **图片加载时间**: 减少 40-60%
- **带宽使用**: 减少 25-40%
- **PageSpeed 分数**: 提升 15-25 分

### 用户体验改善
- **首屏加载**: 更快的内容展示
- **滚动体验**: 流畅的图片加载
- **移动端**: 更好的网络适应性
- **SEO 优化**: 提升搜索引擎排名

---

## 🔄 维护计划

### 定期检查
- **每月**: 检查图片加载性能
- **每季度**: 更新图片优化策略
- **每年**: 全面图片优化审查

### 持续优化
- 监控用户行为数据
- 根据设备使用情况调整策略
- 跟进新的图片优化技术

---

*最后更新: 2024年12月20日*
*版本: 1.0*
*维护者: Merlord 开发团队*
