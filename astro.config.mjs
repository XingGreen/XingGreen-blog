import { defineConfig } from 'astro/config';
import { siteConfig, featureConfig } from './src/config';

export default defineConfig({
  site: siteConfig.siteUrl, // 使用统一配置中的站点地址
  integrations: [], 
  output: 'static', 
  compressHTML: true, 
  build: {
    format: 'file'
  },
  markdown: {
    syntaxHighlight: featureConfig.codeHighlight.enabled ? 'shiki' : 'none',
    shikiConfig: {
      theme: featureConfig.codeHighlight.theme,
      wrap: true,
    },
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