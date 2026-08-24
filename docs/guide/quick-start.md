---
title: 快速开始指引
description: 在 LingChat v0.5 中完成下载、模型配置与首次对话。
---

# 🚀 快速开始指引

LingChat 是一款沉浸式 AI-Galgame 聊天应用，提供角色陪伴、情绪表现、语音、剧本、桌宠与日程等功能。

## 准备 API Key

准备一个兼容的模型服务 API Key。常见选择包括 DeepSeek、通义千问、Moonshot/Kimi，以及本地 Ollama 或 OpenAI 兼容服务。

## 三步开始

1. 从 [GitHub Releases](https://github.com/SlimeBoyOwO/LingChat/releases) 下载适合系统的发行版并启动应用。
2. 进入 **设置 -> 高级设置 -> 大模型管理**，添加提供商、Base URL、API Key 与模型名称。
3. 选择或创建角色后进入对话，发送第一条消息即可开始。

<FancyCard type="feature" title="模型配置可即时生效" icon="⚙️">
当前提供商由应用内配置管理。需要切换模型或调整参数时，请在大模型管理页面保存相应配置。
</FancyCard>

## 可选配置

- 需要让角色理解屏幕内容时，为视觉模型分配支持图片输入的模型；在对话中使用“看桌面”等自然语言触发。
- 需要语音时，前往 [语音引擎](/manual/tts-engine) 配置本地或外置 TTS。
- 想使用剧情与互动事件，请阅读 [剧本创作](/creator/script-tutorial) 和 [可视化剧本编辑器](/creator/script-editor)。

## 常见问题

::: details AI 一直没有回复
确认 API Key、余额、Base URL 和模型名正确；然后在应用日志中查看服务返回的 HTTP 错误。`401` 通常是凭据问题，`429` 通常表示额度或限流。
:::

::: details 为什么没有网页端访问地址
当前 v0.5 是 Tauri 原生应用，不提供旧版 Python Web 服务或 `localhost:8756` 浏览器入口。
:::

::: details 默认角色与功能在哪里
主界面可管理角色与存档；设置页可配置模型、语音、显示和高级功能。桌宠、日程和剧本均在应用内运行，与当前存档和角色状态联动。
:::
