---
title: 快速开始指引
description: 在 LingChat v0.5 中完成下载、模型配置与首次对话。
---

# 第一次游玩

本页引导你完成首次启动、熟悉设置界面，帮助你快速上手 LingChat。

## 1. 准备工作
### 1.1 申请大模型 API Key

LingChat 需要接入大模型才能进行智能对话，首次使用前需要先准备一个 **API Key**。下面以 **DeepSeek** 为例，其他服务商的申请流程大同小异。

::: info 为什么需要 API Key？
API Key 是大模型服务商发给你的「通行证」。把它填入 LingChat 后，程序才能调用大模型接口。调用按用量计费，需要自行充值。
:::

#### 1. 注册并登录 DeepSeek 开放平台

1. 打开 [DeepSeek 开放平台](https://platform.deepseek.com)。
2. 使用手机号或邮箱注册并登录。

![注册 / 登录界面](/guide-shot/deepseek-login.png)
::: warning 实名认证
初次注册账号需要进行实名认证，请根据平台提示按规定进行
:::

#### 2. 进入「API Keys」页面

登录后，点击左侧导航栏的 **API Keys**，进入密钥管理页面。

![API Keys 页面](/guide-shot/deepseek-api-keys.png)

#### 3. 创建新的 API Key

1. 点击 **创建 API Key** 按钮。
2. 为密钥起一个名字（例如 `LingChat`），方便日后区分。
3. 点击 **创建**。

![创建 API Key](/guide-shot/deepseek-create-key.png)

#### 4. 复制并保存 Key

创建成功后，页面会展示完整的 Key。

::: danger 只显示一次
API Key 只在创建时完整显示一次，请立即复制并妥善保存；刷新或关闭页面后将无法再次查看。
:::

::: danger 不要泄露你的 API Key！
API Key 等同账户凭证，请勿分享给他人、截图发布到公开渠道！
:::

![复制 API Key](/guide-shot/deepseek-copy-key.png)

#### 5. 充值（按需）

DeepSeek 采用**预充值**模式，账户余额不足时无法调用。可在「充值」页面按需充值。
::: warning 请适当充值
不要一次充入过多额度！以免浪费
:::

### 1.2 填入 LingChat

准备好 Key 后，继续把它填入 LingChat。

#### 1. 找到大模型设置页

启动游戏，依次进入 **游戏配置 → 高级设置 → 大模型管理**。

![大模型管理页面](/guide-shot/lingchat-model-page.png)

#### 2. 添加 API Key

1. 点击「添加模型」，选择 **DeepSeek V4 Flash** 预设。
2. 在「API 密钥」一栏粘贴刚刚复制的 Key。
3. 下滑点击「保存」。

![添加模型](/guide-shot/lingchat-add-model.png)

#### 3. 选择对话模型

在左下角将对话模型切换为 **DeepSeek V4 Flash**。

![选择对话模型](/guide-shot/lingchat-select-model.png)
<FancyCard type="feature" title="模型配置可即时生效" icon="⚙️">
当前提供商由应用内配置管理。需要切换模型或调整参数时，请在大模型管理页面保存相应配置。
</FancyCard>

::: tip 验证配置是否成功
点击“测试”，发送一条消息，若收到 AI 回复，说明 API Key 已配置成功。
:::

## 2. 快速设置

大部分选项都能在「通用」设置页中调整。

如需更多配置，可进入 **高级设置 → 其他高级设置** 进行更细致的调整。

## 3. 体验游戏

完成了基础设置后，就可以正式开始游玩了：选择一个你喜欢的人物，点击「自由对话」，开始和 TA 聊天吧~

## 4. 可选配置

- 需要让角色理解屏幕内容时，为视觉模型分配支持图片输入的模型；在对话中使用“看桌面”等自然语言触发。
- 需要语音时，前往 [语音引擎](/manual/tts-engine) 配置本地或外置 TTS。
- 想使用剧情与互动事件，请阅读 [剧本创作](/creator/script-tutorial) 和 [可视化剧本编辑器](/creator/script-editor)。

## 5. 常见问题

::: details AI 一直没有回复
确认 API Key、余额、Base URL 和模型名正确；然后在应用日志中查看服务返回的 HTTP 错误。`401` 通常是凭据问题，`429` 通常表示额度或限流。
:::

::: details 为什么没有网页端访问地址
当前 v0.5 是 Tauri 原生应用，不提供旧版 Python Web 服务或 `localhost:8756` 浏览器入口。
:::

::: details 默认角色与功能在哪里
主界面可管理角色与存档；设置页可配置模型、语音、显示和高级功能。桌宠、日程和剧本均在应用内运行，与当前存档和角色状态联动。
:::
