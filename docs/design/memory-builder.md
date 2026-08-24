---
title: LLM 记忆构建器算法
description: 当前 MemoryBuilder 如何从台词树重建角色专属 LLM 上下文。
---

# 🧠 LLM 记忆构建器算法

MemoryBuilder 位于 Rust 的 `src-tauri/src/ai_service/game_system/memory_builder.rs`。它从当前存档的台词树读取历史，为正在生成的角色构建符合 LLM 消息格式的上下文。

## 构建原则

1. 角色自己的系统设定作为 `system` 消息。
2. 用户台词保留为 `user` 消息。
3. 当前角色连续发言合并为 `assistant` 消息，并保留情绪、语音和动作语义。
4. 旁白、其他角色和与当前角色无关的上下文包装为背景信息，避免模型混淆说话者。
5. 工具调用和工具结果按对应协议还原，使后续回合拥有完整操作上下文。

## 生命周期

```text
台词树 -> 当前角色历史 -> MemoryBuilder -> LLM 消息 -> 流式生成 -> 新台词落盘
```

同一台词树可为不同角色构建不同上下文，因此多角色剧本、旁白和自由对话能共享存档，同时保持角色身份隔离。

::: info
当前实现使用 Rust 与 SeaORM 实体。旧文档中的 Python SQLModel 类型和“请完成算法”的任务描述已移除。
:::
