---
title: 文档来源与版本矩阵
description: LingChat Wiki 页面与上游事实来源的可追溯映射。
---

# 文档来源与版本矩阵

本文件是 LingChat Wiki 的来源索引。它用于区分当前源码事实、用户向摘要和从 LingBlog 迁移的历史内容，避免将历史设计稿重新当作当前实现。

## 核对基线

| 项目 | 值 |
| --- | --- |
| 上游仓库 | `SlimeBoyOwO/LingChat` |
| 上游分支 | `main` |
| 核对提交 | `eae0d667413e490c3653488d43ce9b4464e07fda` |
| 上游提交日期 | `2026-08-15` |
| 当前适用版本 | `v0.5.0` |
| 本次核对日期 | `2026-08-24` |

## 标记说明

- **用户向摘要**：根据当前上游源码和文档整理，省略内部实现细节。
- **技术摘要**：根据当前源码和技术文档整理，适用于贡献者。
- **原文迁移，已复核**：保留 LingBlog 原始表达，已与当前实现核对核心事实。
- **历史迁移，待专项复核**：未发现已知架构冲突，但尚未按当前上游逐段复核；不能作为源码级规范。
- **Wiki 自有页面**：站点导航、贡献展示或维护说明，不对应单一上游 Markdown。

## 首页与入门

| Wiki 页面 | 类型 | 当前来源 |
| --- | --- | --- |
| `index.md` | 用户向摘要 | `.github/README.md`、当前 Wiki 导航与组件 |
| `guide/quick-start.md` | 用户向摘要 | `.github/README.md`、`src/components/settings/pages/SettingsLlmProviders.vue` |
| `guide/installation.md` | 用户向摘要 | `.github/README.md`、`src-tauri/tauri.conf.json`、`src-tauri/src/init/static_copy.rs` |
| `guide/android-resources.md` | 技术摘要 | `docs/android/migration.md`、`scripts/prepare-bundled-resources.mjs`、`src-tauri/src/init/static_copy.rs` |
| `guide/llm-config.md` | 用户向摘要 | `src-tauri/src/ai_service/llm/provider_config.rs`、`src/components/settings/pages/SettingsLlmProviders.vue` |
| `guide/releases.md` | 用户向摘要 | `package.json`、`src-tauri/Cargo.toml`、`docs/自动更新逻辑.md` |
| `guide/troubleshooting.md` | 用户向摘要 | `.github/SUPPORT.md`、`.github/README.md`、当前各功能页 |

## 功能手册

| Wiki 页面 | 类型 | 当前来源 |
| --- | --- | --- |
| `manual/overview.md` | 用户向摘要 | `.github/README.md`、`src/components/views/MainMenu.vue` |
| `manual/tts-engine.md` | 原文迁移，已复核 | `src-tauri/src/ai_service/tts/`、`docs/local-tts-api.md` |
| `manual/inference-devices.md` | 用户向摘要 | `docs/inference-devices.md`、`docs/utils/device-selection.md` |
| `manual/proactive-companion.md` | 用户向摘要 | `src-tauri/src/ai_service/proactive_system/` |
| `manual/schedule-todo.md` | 用户向摘要 | `src-tauri/src/api/schedule.rs`、`src/components/schedule/` |
| `manual/lingpal-desktop-pet.md` | 用户向摘要 | `src-tauri/src/api/pet.rs`、`src/components/views/PetMode.vue` |
| `manual/memory-archive.md` | 技术摘要 | `src-tauri/src/db/`、`src-tauri/src/ai_service/game_system/memory_builder.rs` |
| `manual/role-archive.md` | 用户向摘要 | `docs/utils/role-archive.md`、`src-tauri/src/api/role_archive/` |

## 创作者工坊

| Wiki 页面 | 类型 | 当前来源 |
| --- | --- | --- |
| `creator/character-creation.md` | 用户向摘要 | `data/game_data/characters/诺一钦灵/settings.yml`、`src-tauri/src/api/character.rs` |
| `creator/script-tutorial.md` | 用户向摘要 | `data/game_data/skills/lingchat-script-editor/SKILL.md`、`src-tauri/src/api/script_editor/` |
| `creator/script-editor.md` | 技术摘要 | `docs/script-editor/`、`src/components/script-editor/`、`src-tauri/src/api/script_editor/` |
| `creator/script-events-ref.md` | 原文迁移，已复核 | `data/game_data/skills/lingchat-script-editor/references/event-reference.md`、`src-tauri/src/ai_service/game_system/script_engine/events/` |
| `creator/plugin-development.md` | 技术摘要 | `docs/plugin-dev-guide.md`、`src-tauri/src/plugins/` |
| `creator/vits-training.md` | 原文迁移，已复核 | 当前 TTS 模型格式和 `docs/local-tts-api.md` |
| `creator/workshop-publishing.md` | 原文迁移，已复核 | `src-tauri/src/api/workshop.rs`、GitHub Discussions |

## 架构与设计

| Wiki 页面 | 类型 | 当前来源 |
| --- | --- | --- |
| `design/backend-architecture.md` | 技术摘要 | `src-tauri/src/lib.rs`、`src-tauri/src/ai_service/` |
| `design/frontend-architecture.md` | 技术摘要 | `src/App.vue`、`src/router/`、`src/core/events/` |
| `design/unified-system.md` | 技术摘要 | `src-tauri/src/ai_service/game_system/game_status.rs`、`role_manager.rs` |
| `design/database-schema.md` | 技术摘要 | `src-tauri/src/migration/`、`src-tauri/src/db/entities/` |
| `design/memory-builder.md` | 技术摘要 | `src-tauri/src/ai_service/game_system/memory_builder.rs` |
| `design/function-call.md` | 技术摘要 | `docs/function_call/`、`src-tauri/src/ai_service/tools/` |

## 社区与站点维护

| Wiki 页面 | 类型 | 当前来源 |
| --- | --- | --- |
| `community/dev-process.md` | 用户向摘要 | `.github/CONTRIBUTING.md` |
| `community/i18n-guide.md` | 技术摘要 | `docs/i18n.md`、`src/locales/` |
| `community/bounty-program.md` | 原文迁移，已复核 | LingBlog `docs/projects/ling-chat/` 与当前项目社区规则 |
| `community/contributors.md` | Wiki 自有页面 | `data/contributors.json` |
| `SOURCES.md` | Wiki 自有页面 | 本文件与上述上游基线 |

## 维护规则

1. 修改 Wiki 页面前，先在本表确认或补充当前上游来源。
2. 上游架构、配置、命令或平台行为改变时，同步更新受影响页面和本表的核对提交。
3. 不以 LingBlog 历史文章、PR 描述、提交信息或临时分支作为当前事实来源。
4. 无法核实的内容标记为历史迁移或移除，不做推测性补全。
