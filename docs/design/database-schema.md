---
title: SQLite 数据库与表结构
description: 当前 SeaORM 迁移中的 LingChat 核心持久化模型。
---

# 🗄️ SQLite 数据库与表结构

LingChat 使用 SQLite 和 SeaORM 迁移维护持久化数据。表结构以 `src-tauri/src/migration/` 为唯一权威来源；本文只说明稳定的核心关系，不应替代迁移文件。

## 核心实体

| 表 | 作用 |
| --- | --- |
| `save` | 存档入口、最后台词与当前运行状态。 |
| `role` | 角色资源与显示身份。 |
| `line` | 带父子关系的对话台词、情绪、动作、语音和调用信息。 |
| `memory_bank` | 与角色、存档关联的长期记忆。 |
| `running_script` | 剧本目录、章节、事件位置与变量。 |
| `line_perception` | 台词关联的感知信息。 |
| `adventure_unlock` | 羁绊冒险解锁状态。 |
| `skill_agent_conversation` / `skill_agent_message` | Skill Agent 会话与消息。 |

## 台词树

`line.parent_line_id` 将台词连接为分支树；`save.last_message_id` 标记当前分支末端。当前 `line` 还支持 `thinking`、工具调用名、参数和调用 ID，以保存完整生成过程。

::: warning
旧博客所述 `user_info` 用户名/密码表以及 Python ORM 模型已经不属于当前数据库设计。不要根据该历史页面直接操作数据库。
:::

![当前历史 ER 图](/images/er.png)
