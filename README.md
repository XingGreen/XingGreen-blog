# XingGreen Blog

一个基于 Astro 框架构建的现代化个人博客，采用 Material Design 3 设计风格和动漫背景，提供优雅的阅读体验。

## 特性

-  **Material Design 3** - 现代化的设计语言
-  **响应式布局** - 完美适配桌面、平板和移动设备
-  **高性能** - 基于 Astro 静态站点生成，加载速度极快
-  **智能搜索** - 使用 Fuse.js 实现文章搜索功能
-  **站点统计** - 显示文章、分类、标签等统计信息
-  **代码高亮** - 支持语法高亮，提升代码阅读体验
-  **Markdown 支持** - 轻松编写和管理博客文章
-  **主题切换** - 支持浅色/深色主题自动切换
-  **雨声背景** - 提供沉浸式阅读体验

##  快速开始

### 前提条件

- Node.js 18+ 版本
- npm 或 yarn 包管理器

### 安装步骤

1. 克隆项目
```bash
git clone <repository-url>
cd Blog
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

##  项目结构

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

##  配置说明

项目的主要配置位于 `src/config.ts` 文件中，您可以根据需要自定义以下内容：

### 站点信息
```typescript
export const siteConfig = {
  title: 'XingGreen Blog',
  description: 'A beautiful Astro blog with Material Design 3 and anime background',
  author: 'XingGreen',
  siteUrl: 'http://localhost:4323',
  // ...
};
```

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

##  编写博客文章

博客文章位于 `src/content/blog/` 目录下，使用 Markdown 格式编写。每个文章文件需要包含以下 Frontmatter 信息：

```yaml
title: 文章标题
excerpt: 文章摘要
date: 2023-01-01
category: 分类
tags: [标签1, 标签2]
author: 作者名
```

##  命令说明

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产版本 |
| `npm run astro` | 运行 Astro CLI 命令 |

##  主题定制

### 自定义颜色

在 `src/config.ts` 中修改主题颜色：

```typescript
export const themeConfig = {
  colors: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
    accent: '#your-accent-color',
  },
  // ...
};
```

### 自定义背景

将您的背景图片放置在 `public/` 目录下，然后在 `src/config.ts` 中配置：

```typescript
export const themeConfig = {
  background: {
    image: '/your-background.jpg',
    enableOverlay: true,
    overlayOpacity: 0.1,
  },
  // ...
};
```

##  部署

### 静态部署

1. 构建生产版本：
```bash
npm run build
```

2. 将 `dist/` 目录下的文件部署到任何静态站点托管服务，如：
   - GitHub Pages
   - Vercel
   - Netlify
   - Cloudflare Pages

##  技术栈

- **Astro** - 静态站点生成器
- **Material Web** - Material Design 3 组件
- **TypeScript** - 类型安全的 JavaScript
- **Fuse.js** - 轻量级搜索库
- **Waline** - 评论系统（可选）
- **Shiki** - 代码高亮

##  许可证

MIT License

##  贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

##  联系方式

- GitHub: [XingGreen](https://github.com/XingGreen)
- Bilibili: [XingGreen](https://space.bilibili.com/1342082835)

---


