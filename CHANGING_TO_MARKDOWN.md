# 从HTML/静态数据改为使用Markdown文件

当前项目使用静态TypeScript数据文件（`src/data/blogPosts.ts`）来存储博客文章信息，文章内容直接写在HTML中。本指南将向您展示如何配置Astro以支持Markdown文件，并使用它们来管理博客内容。

## 1. 启用Astro Content Collections

首先，我们需要更新Astro配置文件以启用Content Collections功能：

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [],
  output: 'static',
  compressHTML: true,
  build: {
    format: 'file'
  },
  content: {
    collections: {
      blog: {
        schema: (z) => z.object({
          title: z.string(),
          excerpt: z.string(),
          date: z.date(),
          category: z.string(),
          tags: z.array(z.string()),
          author: z.string(),
        }),
      },
    },
  },
});
```

## 2. 创建内容集合

创建`src/content/blog`目录来存储Markdown文章：

```bash
mkdir -p src/content/blog
```

## 3. 创建示例Markdown文章

在`src/content/blog`目录中创建示例Markdown文章，例如`hello-world.md`：

```markdown
---
title: "hello world"
excerpt: "这是一个测试文章，用于测试博客功能。"
date: 2025-12-14
category: "文章资讯"
tags: ["Astro", "主题", "博客", "开源"]
author: "XingGreen"
---

# Hello World

这是一个测试文章，用于测试博客功能。

## 二级标题

这是二级标题下的内容。

### 三级标题

这是三级标题下的内容。

#### 代码示例

```javascript
function helloWorld() {
  console.log('Hello, World!');
}
```

#### 列表

- 列表项 1
- 列表项 2
- 列表项 3

#### 引用

> 这是一个引用块，用于展示重要的内容或引言。
```

## 4. 修改博客文章页面

更新`src/pages/blog/[slug].astro`文件以使用Markdown内容：

```astro
---
import MainLayout from '../../layouts/MainLayout.astro';
import { getCollection } from 'astro:content';
import Comment from '../../components/Comment.astro';

// 导出getStaticPaths函数用于生成静态路径
export async function getStaticPaths() {
  const blogPosts = await getCollection('blog');
  return blogPosts.map(post => ({
    params: { slug: post.slug },
    props: { post }
  }));
}

// 获取动态路由参数和文章数据
const { post } = Astro.props;

// 格式化日期
const formattedDate = new Date(post.data.date).toLocaleDateString('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
---

<MainLayout title={`${post.data.title} | XingGreen Blog`}>
  <!-- 博客文章头部 -->
  <article class="blog-post">
    <div class="container">
      <!-- 文章元信息 -->
        <div class="post-meta">
          <span class="post-category">{post.data.category}</span>
          <span class="post-date">{formattedDate}</span>
        </div>
        
        <!-- 文章标题 -->
        <h1 class="post-title">{post.data.title}</h1>
        
        <!-- 文章标签 -->
        <div class="post-tags">
          {post.data.tags.map(tag => (
            <span class="post-tag">{tag}</span>
          ))}
        </div>
      </div>
      
      <!-- 文章内容 -->
      <div class="post-content">
        <!-- 使用Markdown渲染内容 -->
        <div class="markdown-content">
          <post.Content />
        </div>
      </div>
      
      <!-- 文章底部操作 -->
      <div class="post-actions">
        <button class="action-btn like-btn">
          <span class="material-symbols-outlined">favorite</span>
          <span class="btn-text">喜欢</span>
        </button>
        <button class="action-btn share-btn">
          <span class="material-symbols-outlined">share</span>
          <span class="btn-text">分享</span>
        </button>
        <button class="action-btn comment-btn">
          <span class="material-symbols-outlined">comment</span>
          <span class="btn-text">评论</span>
        </button>
      </div>
    </div>
  </article>
  
  <!-- 评论区 -->
  <Comment />
</MainLayout>
```

## 5. 更新首页文章列表

如果首页显示博客文章列表，您也需要更新它以使用Content Collections：

```astro
---
// src/pages/index.astro
import MainLayout from '../layouts/MainLayout.astro';
import { getCollection } from 'astro:content';
import Card from '../components/Card.astro';

// 获取博客文章
const blogPosts = await getCollection('blog', {
  sort: (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
});
---

<!-- 在需要显示文章列表的地方 -->
<div class="blog-grid">
  {blogPosts.map(post => (
    <Card
      title={post.data.title}
      excerpt={post.data.excerpt}
      date={post.data.date}
      category={post.data.category}
      tags={post.data.tags}
      slug={post.slug}
    />
  ))}
</div>
```

## 6. 删除旧的静态数据文件

一旦您迁移到Markdown文件，就可以删除旧的静态数据文件：

```bash
rm src/data/blogPosts.ts
```

## 7. 测试更改

运行开发服务器以测试更改：

```bash
npm run dev
```

现在，您可以在`src/content/blog`目录中创建和编辑Markdown文件来管理您的博客文章。Astro会自动将这些Markdown文件转换为HTML并显示在您的博客上。

## 8. Markdown语法提示

Markdown文件使用以下语法：

```markdown
---
# 前面的部分是YAML元数据（frontmatter）
title: "文章标题"
excerpt: "文章摘要"
date: 2025-12-14
category: "分类"
tags: ["标签1", "标签2"]
author: "作者"
---

# 文章内容从这里开始

## 二级标题

这是一段文本内容。

- 列表项1
- 列表项2
- 列表项3

```javascript
// 代码块
function hello() {
  console.log('Hello, World!');
}
```

> 引用块
```

这样，您就可以使用Markdown文件来编写和管理博客文章，而不是直接在HTML中编写内容。这使得文章管理更加方便，并且支持丰富的Markdown语法。