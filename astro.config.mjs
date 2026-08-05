import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 站点地址（用于生成 canonical URL、sitemap 等）
  site: 'https://astro-blog.example.com',
  // 输出模式：static 静态站点，构建产物输出到 dist/ 目录
  output: 'static',
});
