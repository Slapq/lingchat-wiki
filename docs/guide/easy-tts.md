---
title: 内置TTS使用指南
description: 介绍如何使用LingChat内置的语音合成
---

# 内置 TTS 使用指南
LingChat中的角色可以开口说话，这背后是由TTS（Text-To-Speech）语音合成实现的。LingChat支持多种语音合成方式，本文将帮助你启用**内置TTS**这一最简单的方案

## 1. 准备工作

- 正确安装LingChat
- 正确配置LLM，自由对话可用

## 2. 下载模型

### 在「高级设置」-「本地TTS」中找到下载选项

1. 打开 **主界面 → 设置 → 高级设置 → 本地 TTS**，开启顶部的「全局本地 TTS」开关
![开启全局本地 TTS](/guide-shot/easy-tts-enable-global.png)
2. 在「模型下载」区域下载 **DeBERTa-v3-base**和 **Ling-v2**
![本地 TTS 模型下载](/guide-shot/tts-model.png)
::: info 提醒
此处下载的是「钦灵」的语音模型
:::

## 4. 让角色开口说话

1. 打开 **设置 → 角色**，点击角色卡片右上角的齿轮按钮，切换到「语音设置」
2. **TTS 类型**选择「本地 SBV2 API」，**本地语音 ID** 选择 Ling-v2
3. 保存，回到聊天界面——角色就会开口说话了

![角色语音设置](/guide-shot/easy-tts-role-voice.png)
::: warning 特别提醒
不要选成`sbv2`或`sbv2api`!必须是「本地 SBV2 API」才能正常使用本地TTS！
:::


## 进阶阅读

详见[语音使用指南](/manual/tts-engine.md)
