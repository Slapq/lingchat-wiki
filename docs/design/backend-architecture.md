---
title: Tauri + Rust 后端架构
description: LingChat v0.5 的原生运行时、AI 服务与数据边界。
---

# 🏗️ Tauri + Rust 后端架构

LingChat 当前后端运行于 **Tauri v2 + Rust**，不是 Python/FastAPI 服务。Vue 前端通过 Tauri command 与事件和 Rust 服务交互；桌面端还可以在局域网同步、更新和插件等场景中启动相应的原生子系统。

## 技术边界

| 层级 | 当前实现 |
| --- | --- |
| 应用宿主 | Tauri v2 |
| 原生运行时 | Rust + Tokio |
| 数据持久化 | SeaORM + SQLite |
| LLM | `genai` 与自定义 Provider |
| 情绪与本地 TTS | ONNX Runtime、Style-Bert-VITS2 Rust crate |
| 前端 | Vue 3、TypeScript、Pinia、Vue Router、Tailwind CSS |

## 主要模块

```text
src-tauri/src/
├── api/            # Tauri commands 与应用 API
├── ai_service/     # LLM、情绪、TTS、记忆、剧本、主动系统与 Skill Agent
├── db/             # SeaORM 实体与仓储
├── migration/      # SQLite 迁移
├── plugins/        # 受限 Python 插件运行时
├── lan_sync/       # 局域网同步
└── init/           # 资源播种与运行时数据目录
```

## 消息与生成

用户操作由前端调用 Tauri command；AI 服务读取当前存档和角色状态，构建记忆与可用工具集，随后通过 Provider 流式生成内容、思考或工具调用。结果会落入台词树并更新 UI、语音和舞台状态。

::: info
旧博客中的 `main.py`、FastAPI、WebSocket broker 和 Python `asyncio.Queue` 属于已废弃实现，不能用于当前版本开发。
:::
