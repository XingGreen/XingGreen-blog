# XingGreen Blog

一个基于 Astro 框架构建的现代化个人博客，采用动漫背景，提供优雅的阅读体验。

## 特性

-  **响应式布局** - 完美适配桌面、平板和移动设备
-  **高性能** - 基于 Astro 静态站点生成，加载速度极快
-  **智能搜索** - 使用 Fuse.js 实现文章搜索功能
-  **站点统计** - 显示文章、分类、标签等统计信息
-  **代码高亮** - 支持语法高亮，提升代码阅读体验
-  **Markdown 支持** - 轻松编写和管理博客文章
-  **主题切换** - 支持浅色/深色主题自动切换
-  **雨声背景** - 提供沉浸式阅读体验
-  **音乐播放器** - 支持背景音乐播放
-  **Live2D 动画** - 可自定义的 Live2D 角色
-  **博客活跃度概览** - 显示文章发布频率和统计图表
-  **数学公式支持** - 使用 KaTeX 渲染数学公式
-  **阅读时间估算** - 显示文章阅读所需时间
-  **RSS 订阅** - 支持通过 RSS 订阅博客更新

## 快速开始

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

## 设计风格

博客的风格设计参考了mizuki二次元动漫博客和vahiru博客的设计风格，同时加入了自己的个人风格。

## 项目结构

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

## 配置说明

项目的主要配置位于 `src/config.ts` 文件中，您可以根据需要自定义以下内容：

### 站点信息
```typescript
export const siteConfig = {
  title: 'XingGreen Blog',
  description: 'A beautiful Astro blog with anime background',
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
  // 搜索功能
  search: {
    enabled: true,
    provider: 'fusejs', // fusejs/pagefind
  },
  // 评论系统
  comment: {
    enabled: false,
    provider: 'waline', // waline/giscus/utterances
    config: {
      serverURL: 'https://waline.vercel.app',
      placeholder: '留下你的评论吧~',
      requiredMeta: ['nick', 'mail'],
      login: 'enable',
      pageSize: 10,
      emoji: [
        'https://cdn.jsdelivr.net/npm/@waline/emojis@1.0.1/weibo/index.json',
        'https://cdn.jsdelivr.net/npm/@waline/emojis@1.0.1/alus/index.json'
      ],
    },
  },
  // 阅读时间估算
  readingTime: {
    enabled: true,
    wordsPerMinute: 300,
  },
  // RSS订阅
  rss: {
    enabled: true,
    maxItems: 20,
  },
  // 代码高亮
  codeHighlight: {
    enabled: true,
    theme: 'github-dark',
    enableCopy: true,
    enableLineNumbers: true,
    enableCodeGroup: true,
  },
  // 数学公式
  math: {
    enabled: true,
    provider: 'katex',
  },
};
```

### 侧边栏组件配置
```typescript
export const sidebarLayoutConfig = [
  // 左侧边栏组件
  {
    position: 'left',
    components: [
      {
        name: 'Profile',
        enabled: true,
        order: 1,
        config: {
          avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=483165474&spec=640&img_type=jpg',
          name: 'XingGreen',
          bio: '热爱技术，分享生活',
          socialLinks: [
            { name: 'GitHub', url: 'https://github.com/XingGreen', icon: 'code' },
            { name: 'Bilibili', url: 'https://space.bilibili.com/1342082835', icon: 'play_circle' },
          ],
        },
      },
      {
        name: 'CategoryList',
        enabled: true,
        order: 2,
        config: {
          title: '分类',
        },
      },
      {
        name: 'TagCloud',
        enabled: true,
        order: 3,
        config: {
          title: '标签云',
          maxTags: 20,
        },
      },
    ],
  },
  // 右侧边栏组件
  {
    position: 'right',
    components: [
      {
        name: 'Search',
        enabled: true,
        order: 1,
        config: {
          placeholder: '搜索文章...',
        },
      },
      {
        name: 'RecentPosts',
        enabled: true,
        order: 2,
        config: {
          title: '最新文章',
          maxPosts: 5,
        },
      },
      {
        name: 'SiteStats',
        enabled: true,
        order: 3,
        config: {
          title: '站点统计',
        },
      },
    ],
  },
];
```

### 友链配置
```typescript
export const friendsConfig = [
  {
    name: 'vahiru的博客',
    url: 'https://vahiru.is-cute.cat',
    description: '这是vahiru的博客',
    avatar: 'https://via.placeholder.com/80'
  },
];
```

## 编写博客文章

博客文章位于 `src/content/blog/` 目录下，使用 Markdown 格式编写。每个文章文件需要包含以下 Frontmatter 信息：

```yaml
title: 文章标题
excerpt: 文章摘要
date: 2023-01-01
category: 分类
tags: [标签1, 标签2]
author: 作者名
```

## 命令说明

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产版本 |
| `npm run astro` | 运行 Astro CLI 命令 |

## 主题定制

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

## 部署

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

## 技术栈

- **Astro** - 静态站点生成器
- **Material Web** - Material Design 3 组件
- **TypeScript** - 类型安全的 JavaScript
- **Fuse.js** - 轻量级搜索库
- **Waline** - 评论系统（可选）
- **Shiki** - 代码高亮

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 联系方式

- GitHub: [XingGreen](https://github.com/XingGreen)
- Bilibili: [记忆_瞬间的永恒](https://space.bilibili.com/1342082835)
- QQ: 483165474
---



