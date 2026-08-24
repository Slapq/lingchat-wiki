---
title: 前端事件驱动与模块解耦
description: LingChat 当前 Vue 3 前端的目录边界、状态与原生通信。
---

# 🖥️ 前端事件驱动与模块解耦

前端位于项目根目录 `src/`，使用 Vue 3、TypeScript、Vite、Pinia、Vue Router、vue-i18n 和 Tailwind CSS。它通过 Tauri API 与 Rust 原生层通信，而不是调用旧版 HTTP/WebSocket 后端。

## 目录边界

```text
src/
├── api/                 # Tauri 调用与服务封装
├── components/          # 视图、设置、剧本编辑器与通用组件
├── composables/         # 可复用组合式逻辑
├── core/events/         # 事件队列与处理器
├── locales/             # 内置 i18n 词条
├── router/              # 路由
├── stores/              # Pinia 状态
├── types/               # TypeScript 类型
└── utils/               # 通用工具
```

## 核心协作

- `stores/` 保存 UI、设置、游戏与编辑器状态。
- `core/events/` 负责把原生层事件映射为前端状态变化和舞台演出。
- `components/script-editor/` 管理可视化剧本编辑、校验和试玩。
- `api/` 集中封装 command 与事件订阅，避免组件直接耦合原生协议。

::: tip
新 UI 文案遵循 [国际化开发指南](/community/i18n-guide)，不要把中文文本直接作为翻译 key。
:::
