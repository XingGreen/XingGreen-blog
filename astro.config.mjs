import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import { siteConfig, featureConfig } from './src/config';

export default defineConfig({
  site: siteConfig.siteUrl, // 使用统一配置中的站点地址
  integrations: [
    partytown({
      // 配置第三方脚本迁移到Web Worker
      config: {
        debug: false, // 生产环境关闭调试模式
      },
    }),
    compress({
      // 配置静态资源压缩
      CSS: {
        enabled: true,
        verbose: false,
      },
      HTML: {
        enabled: true,
        verbose: false,
      },
      JavaScript: {
        enabled: true,
        verbose: false,
      },
      Image: {
        enabled: false, // 已使用astro:assets处理图片
        verbose: false,
      },
      SVG: {
        enabled: true,
        verbose: false,
      },
    }),
  ], 
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