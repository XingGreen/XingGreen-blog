# XingGreen Blog

一个基于 Astro 框架构建的现代化个人博客，采用动漫背景与柔和渐变绿色主题，提供优雅的阅读体验。

## 目录

- [特性](#特性)
- [快速开始](#快速开始)
- [设计风格](#设计风格)
- [项目结构](#项目结构)
- [配置说明](#配置说明)
- [编写博客文章](#编写博客文章)
- [命令说明](#命令说明)
- [主题定制](#主题定制)
- [部署](#部署)
- [技术栈](#技术栈)
- [许可证](#许可证)
- [贡献](#贡献)
- [联系方式](#联系方式)

## 特性

### 🚀 性能与体验

- **高性能** - 基于 Astro 静态站点生成，加载速度极快，首屏时间优化至毫秒级
- **响应式布局** - 完美适配桌面、平板和移动设备，确保在任何屏幕尺寸下都有最佳显示效果
- **雨声背景** - 提供沉浸式阅读体验，可自由开关
- **流畅动画** - 精心设计的过渡动画，提升用户交互体验

### 🎯 功能与交互

- **智能搜索** - 使用 Fuse.js 实现高效文章搜索，支持模糊匹配
- **站点统计** - 实时显示文章、分类、标签等统计信息
- **评论系统** - 集成 Waline 评论系统（可选启用）
- **社交分享** - 支持将文章分享至主流社交平台
- **返回顶部** - 快速返回页面顶部的便捷按钮

### 📝 内容管理

- **Markdown 支持** - 使用熟悉的 Markdown 语法轻松编写和管理博客文章
- **代码高亮** - 基于 Shiki 实现的语法高亮，支持多种编程语言
- **分类与标签** - 灵活的文章分类和标签管理系统
- **TOC 目录** - 自动生成文章目录，便于长文阅读

### 🎨 视觉设计

- **柔和渐变绿色主题** - 采用清新的绿色渐变配色方案，营造舒适阅读环境
- **动漫背景** - 精美的动漫背景图片，增强视觉吸引力
- **主题切换** - 支持浅色/深色主题自动切换，适应不同光线环境
- **内凹外凸阴影** - 现代化的拟态设计风格，增强视觉层次感

##  快速开始

### 前提条件

- Node.js 18+ 版本
- npm 或 yarn 包管理器

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/XingGreen/XingGreen-blog.git
cd XingGreen-blog
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 在浏览器中访问
```
http://localhost:4321
```

**注意**：如果端口4321已被占用，Astro会自动选择其他可用端口（如4322、4323等），请根据终端输出的实际地址访问。

## 🎨 设计风格

博客的风格设计参考了mizuki二次元动漫博客和vahiru博客的设计风格，同时加入了自己的个人风格：

- **柔和渐变绿色主题** - 清新自然的绿色配色方案
- **动漫背景** - 精美的动漫风格背景图片
- **Material Design 3** - 采用最新的 Material Design 3 设计规范
- **内凹外凸阴影** - 现代化的拟态设计风格

## 📁 项目结构

```
├── src/
│   ├── assets/          # 静态资源文件
│   │   ├── images/      # 图片资源
│   │   └── styles/      # 样式文件
│   ├── components/      # Astro 组件
│   │   ├── sidebar/     # 侧边栏组件
│   │   └── ...          # 其他组件
│   ├── content/         # 内容集合
│   │   └── blog/        # 博客文章
│   ├── layouts/         # 布局组件
│   ├── pages/           # 页面组件
│   └── config.ts        # 项目配置文件
├── public/              # 公共资源
├── astro.config.mjs     # Astro 配置
├── package.json         # 项目依赖
└── tsconfig.json        # TypeScript 配置
```

## ⚙️ 配置说明

项目的主要配置位于 `src/config.ts` 文件中，您可以根据需要自定义以下内容：

### 站点信息
```typescript
export const siteConfig = {
  title: 'XingGreen Blog',
  description: 'A beautiful Astro blog with Material Design 3 and anime background',
  author: 'XingGreen',
  siteUrl: 'http://localhost:4321', // 开发服务器默认地址，实际部署时需修改为您的域名
  // ...
};
```

**注意**：开发服务器端口可能会因为占用而自动调整，请根据实际情况修改。

### 主题设置
```typescript
export const themeConfig = {
  colors: {
    primary: '#c5ffb7',
    secondary: '#85d4ff',
    accent: '#98fb98',
  },
  defaultMode: 'light',
  // ...
};
```

### 布局配置
```typescript
export const layoutConfig = {
  sidebarPosition: 'left',
  tocPosition: 'auto',
  responsive: true,
  // ...
};
```

### 功能开关
```typescript
export const featureConfig = {
  search: { enabled: true },
  comment: { enabled: false },
  codeHighlight: { enabled: true },
  // ...
};
```

## ✍️ 编写博客文章

博客文章位于 `src/content/blog/` 目录下，使用 Markdown 格式编写。每个文章文件需要包含以下 Frontmatter 信息：

```yaml
title: 文章标题
excerpt: 文章摘要
date: 2023-01-01
category: 分类
tags: [标签1, 标签2]
author: 作者名
```

## 📋 命令说明

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产版本 |
| `npm run astro` | 运行 Astro CLI 命令 |

## 主题定制

### 🎨 自定义颜色

主题颜色通过 CSS 变量进行管理，您可以在 `src/assets/styles/global.css` 文件中修改以下变量来自定义主题：

```css
/* 浅色主题 - 柔和绿色风格 */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f0fff4;
  --bg-tertiary: #e6fffa;
  --text-primary: #2d3748;
  --text-secondary: #4a5568;
  --text-tertiary: #718096;
  --border-color: #9ae6b4;
  --accent-primary: #48bb78; /* 主强调色 */
  --accent-secondary: #68d391; /* 次级强调色 */
  --accent-tertiary: #81e6d9; /* 第三强调色 */
  --accent-gradient: linear-gradient(135deg, #48bb78, #68d391, #81e6d9); /* 渐变效果 */
  /* ... 更多变量 */
}

/* 深色主题 - 柔和绿色霓虹风格 */
[data-theme="dark"] {
  --bg-primary: #1a202c;
  --bg-secondary: #2d3748;
  --bg-tertiary: #4a5568;
  --text-primary: #ffffff;
  --text-secondary: #f1f5f9;
  --text-tertiary: #cbd5e1;
  --border-color: #48bb78;
  --accent-primary: #48bb78;
  --accent-secondary: #68d391;
  --accent-tertiary: #81e6d9;
  --accent-gradient: linear-gradient(135deg, #48bb78, #68d391, #81e6d9);
  /* ... 更多变量 */
}
```

### 🖼️ 自定义背景

将您的背景图片放置在 `public/` 目录下，然后在 `src/assets/styles/global.css` 中修改以下变量：

```css
:root {
  --bg-image: url('/your-background.jpg'); /* 替换为您的背景图片路径 */
  --bg-image-opacity: 0.1; /* 背景图片透明度 */
}

/* 深色主题下的背景图透明度 */
[data-theme="dark"] {
  --bg-image-opacity: 0.05;
}
```

### 🌙 主题切换

默认主题模式可以在 `src/config.ts` 中配置：

```typescript
export const themeConfig = {
  defaultMode: 'light', // 可选值: 'light', 'dark', 'auto'
  // ...
};
```

### 🎭 Material Design 3 变量

主题还包含 Material Design 3 变量，您可以在 `src/assets/styles/global.css` 中修改：

```css
:root {
  --md3-primary: var(--accent-primary);
  --md3-primary-container: rgba(72, 187, 120, 0.1);
  --md3-secondary: var(--accent-secondary);
  --md3-secondary-container: rgba(104, 211, 145, 0.1);
  /* ... 更多 MD3 变量 */
}
```

## 性能优化与浏览器支持

### ⚡ 性能优化

项目内置了多种性能优化措施，确保网站加载速度快、运行流畅：

1. **静态站点生成** - 基于 Astro 的 SSG 技术，预渲染所有页面，首屏加载时间极短
2. **资源压缩** - 使用 `astro-compress` 自动压缩 HTML、CSS、JavaScript 和图片资源
3. **懒加载** - 图片和非关键资源采用懒加载策略，减少初始加载时间
4. **代码分割** - 自动将 JavaScript 代码分割成小块，按需加载
5. **CDN 友好** - 生成的静态资源支持 CDN 部署，可轻松实现全球加速
6. **预连接与预加载** - 优化资源加载顺序，提高关键资源加载速度

### 🌐 浏览器支持

项目支持所有现代浏览器，包括：

- Chrome (推荐)
- Firefox
- Safari
- Edge
- Opera

**注意**：不支持 Internet Explorer (IE) 浏览器。

## 部署

### 📦 静态部署

1. 构建生产版本：
```bash
npm run build
```

2. 将 `dist/` 目录下的文件部署到任何静态站点托管服务。

### 🎯 托管服务配置指南

#### GitHub Pages

1. **创建仓库**：在 GitHub 上创建一个新仓库

2. **推送代码**：
```bash
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

3. **配置 GitHub Actions**：
   - 在项目根目录创建 `.github/workflows/deploy.yml` 文件
   - 添加以下内容：
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build site
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. **启用 GitHub Pages**：
   - 进入仓库设置 → Pages
   - 选择 `gh-pages` 分支作为源
   - 点击 "Save" 完成配置

#### Vercel

1. **导入项目**：
   - 访问 [Vercel](https://vercel.com/) 并登录
   - 点击 "New Project" → "Import" 导入 GitHub 仓库

2. **配置项目**：
   - 框架预设选择 "Astro"
   - 构建命令：`npm run build`
   - 输出目录：`dist`

3. **部署**：
   - 点击 "Deploy" 开始部署
   - 部署完成后，Vercel 会提供一个临时域名
   - 可以在项目设置中绑定自定义域名

#### Netlify

1. **导入项目**：
   - 访问 [Netlify](https://www.netlify.com/) 并登录
   - 点击 "Add new site" → "Import an existing project"
   - 连接 GitHub 并选择仓库

2. **配置构建**：
   - 构建命令：`npm run build`
   - 发布目录：`dist`

3. **部署**：
   - 点击 "Deploy site" 开始部署
   - 部署完成后，可以在 "Domain settings" 中绑定自定义域名

#### Cloudflare Pages

1. **导入项目**：
   - 访问 [Cloudflare Pages](https://pages.cloudflare.com/) 并登录
   - 点击 "Create a project" → "Connect to Git"
   - 选择 GitHub 仓库并授权

2. **配置构建**：
   - 框架预设：`Astro`
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`

3. **部署**：
   - 点击 "Save and Deploy" 开始部署
   - 部署完成后，可以在 "Custom domains" 中绑定自定义域名

## 🛠️ 技术栈

- **Astro** - 静态站点生成器
- **Material Web** - Material Design 3 组件
- **TypeScript** - 类型安全的 JavaScript
- **Fuse.js** - 轻量级搜索库
- **Waline** - 评论系统（可选）
- **Shiki** - 代码高亮

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 📞 联系方式

- GitHub: [XingGreen](https://github.com/XingGreen)
- Bilibili: [记忆_瞬间的永恒](https://space.bilibili.com/1342082835)
- QQ: 483165474
---



