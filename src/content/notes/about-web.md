---
title: 关于我的博客与构建历程
description: About my blog
date: 2026-04-01
tags: [技术, 感想]
---

## 想法的诞生

最近看到了很多佬的博客，感觉把笔记整理为网站是一件很有趣且美观的事情，正好也想尝试一下vibe coding，遂快速构思了一个以星辰为主题的UI设计并驱使Gemini帮我生成了页面图纸，再将图纸和描述一并投给Claude Code，历时一天 & 30 元就完成了一个仍有些bug的个人网站。

## 关于AI的选择
据说国内最好的Code LLM是GLM，遂使用 **CC Switch + GLM-5 +Claude Code** 完成

## 关于架构
因为这个网站本身是作为博客使用的，一开始本打算直接用MkDocs，但作为静态网站它过于丑陋，在github上参考了不少博主后决定使用 **Astro+Typescript**搭建，技术栈如下：
|技术|	说明|
|---|---|
|Astro 5.18.1|	静态站点生成器|
|TypeScript|	类型安全|
|Node.js	|运行时环境|
|CSS3|	动画、渐变、变换|
|Canvas API|	星空背景渲染|
|CSS 变量	|主题颜色、响应式设计|
| Glass效果 | backdrop-filter: blur |

## 关于未来构想
作为很爱跳舞的小女孩其实想开发一个舞蹈专栏，可以把舞蹈视频和我上传的视频对齐，但这以后再弄吧，感觉今天浪费了一天浅尝了以下vibe coding的快乐（很速度）与痛苦（很空虚QAQ什么也没学到），打算先消化一下

---