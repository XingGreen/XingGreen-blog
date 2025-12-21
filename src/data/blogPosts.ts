// 博客文章数据
export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "hello world",
    excerpt: "这是一个测试文章，用于测试博客功能。",
    date: "2025-12-14",
    category: "文章资讯",
    tags: ["Astro", "主题", "博客", "开源"],
    author: "XingGreen",
    slug: "hello-world"
  },
];
