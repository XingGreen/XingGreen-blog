import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    category: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    // 新增置顶相关字段
    pin: z.boolean().default(false),
    priority: z.number().min(1).max(10).default(1),
    expiryDate: z.date().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
