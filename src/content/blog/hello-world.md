---
title: 'Hello World'
description: '这是使用 Astro 搭建的静态博客的第一篇文章'
pubDate: 2026-08-05
tags: ['astro', 'static-site', 'markdown']
---

欢迎来到 Astro 博客！这是第一篇示例文章。

## 为什么选择 Astro？

Astro 是一个现代化的静态站点生成器，专注于内容驱动的网站。它具有以下优势：

- **默认零 JS**：默认输出纯 HTML/CSS，页面加载极快
- **内容集合**：内置对 Markdown 内容的强类型支持
- **框架无关**：可以混用 React、Vue、Svelte 等组件
- **静态输出**：`output: 'static'` 模式可生成纯静态文件，适合部署到 Cloudflare Pages 等平台

## 部署到 Cloudflare Pages

1. 构建命令：`npm install && npm run build`
2. 输出目录：`dist`

构建完成后，Astro 会把所有静态文件输出到 `dist/` 目录，直接交给 Cloudflare Pages 托管即可。

### 代码示例

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  output: 'static',
});
```

祝你写博客愉快！
