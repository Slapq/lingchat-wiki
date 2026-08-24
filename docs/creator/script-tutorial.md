---
title: 剧本编写与演出指南
description: LingChat 当前剧本目录、事件工作流和创作原则。
---

# 📜 剧本编写与演出指南

LingChat 剧本以 YAML 描述章节与事件，并可在应用内的可视化剧本编辑器中创建、校验和试玩。剧本既可以独立运行，也可作为角色的羁绊冒险。

## 推荐工作流

1. 明确剧本类型：独立剧本或角色羁绊剧本。
2. 在编辑器创建工程和章节大纲。
3. 用事件组织场景、旁白、角色、分支和自由 AI 对话。
4. 使用校验器处理错误、警告与提示。
5. 进入试玩验证，完成后再导出或投稿。

## 目录布局

```text
game_data/scripts/
├── standalone/<剧本>/
└── character/<角色>/<剧本>/
```

每个剧本可包含 `Assets/`、`Chapters/`、`Characters/` 和 `story_config.yaml`。兼容的扁平目录仍可读取，但新内容应优先使用编辑器创建的结构。

## 事件与 AI

事件控制旁白、玩家台词、固定角色台词、背景、音乐、音效、角色演出、选择、变量和章节跳转。`ai_dialogue` 与 `free_dialogue` 可让角色在剧本上下文中继续生成对话；提示词应描述意图、状态和约束，而不是替模型写死整段台词。

- 事件字段速查见 [剧本事件语法](/creator/script-events-ref)。
- 编辑器操作、试玩隔离与诊断见 [可视化剧本编辑器](/creator/script-editor)。

::: warning
不要再按旧教程将新剧本放到 `data/game_data/scripts/standalone`。当前运行时数据根目录为 `data/`，新脚本由可视化编辑器与 `game_data/scripts/` 管理。
:::
