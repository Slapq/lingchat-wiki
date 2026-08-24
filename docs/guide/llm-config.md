# 🔑 大模型与 API 配置

LingChat 能够表现出灵动、生动的陪伴感，核心在于通过结构化提示词（System Prompts）与高自由度的大语言模型（LLM）进行交互。

本文档将指导你如何接入和管理各类主流大模型提供商，并针对扮演效果进行最佳实践调优。

---

## ⚙️ 模型提供商配置方式

新版本 LingChat 支持在图形界面中**同时管理多个模型提供商**，并在不同角色或场景间一键热切换。

### 1. 常用云端提供商配置参数表

| 提供商 | Base URL (接口地址) | 推荐模型名 | 适用场景与特点 |
| :--- | :--- | :--- | :--- |
| **DeepSeek (推荐)** | `https://api.deepseek.com` | `deepseek-chat` | 性价比极高，二次元语感生动，支持复杂指令 |
| **阿里云百炼 / 通义** | `https://dashscope.aliyuncs.com/compatible-mode/v1` | `qwen-plus` / `qwen-max` | 官方额度充裕，响应极快，长上下文稳定 |
| **Moonshot / Kimi** | `https://api.moonshot.cn/v1` | `moonshot-v1-8k` / `moonshot-v1-32k` | 超长记忆维持，推理与剧情连贯 |
| **OpenAI / 兼容代理** | `https://api.openai.com/v1` | `gpt-4o-mini` / `gpt-4o` | 通用能力强，支持复杂 Function Calling |
| **Ollama (本地私有)** | `http://localhost:11434/v1` | `qwen2.5:7b` / `deepseek-r1:8b` | 完全离线无审查，需电脑具备 6GB+ 显存 |

---

## 🧠 DeepSeek 专属调优指南

::: tip 💡 为什么首选 DeepSeek？
DeepSeek 系列模型在中文语境下的拟人化、二次元情感共鸣以及幽默感表现极佳，配合 LingChat 的自研系统提示词能够完美呈现傲娇、温柔、活泼等个性特征。
:::

### 1. 深度思考 (Reasoning Effort / Thinking) 设置
如果你选择的是 `deepseek-reasoner` (R1) 或支持思考过程的模型：
- **开启思考**：在高级设置中勾选 **显示思考链**，在对话历史中你可以展开查看 AI 正在酝酿的小心思与心路历程。
- **关闭思考（追求极速）**：若希望 AI 在 1 秒内迅速秒回，请直接使用 `deepseek-chat`（V3 标准模式），无需等待慢速推理。

---

## 👁️ 视觉模型配置（屏幕感知与视觉交互）

LingChat 的 **主动对话** 和 **桌面窥屏** 功能需要使用具备视觉识别（Vision）能力的多模态模型。

<FancyCard type="feature" title="开通免费阿里云视觉模型" icon="📷">
阿里云百炼（DashScope）为每位新用户提供大量免费 Token，非常适合用作视觉感知后端：

1. 前往 [阿里云百炼控制台](https://bailian.console.aliyun.com/) 获取 API Key。
2. 在 LingChat **设置 ➔ 高级设置 ➔ 大模型管理** 中，新增或编辑一个支持图片输入的提供商，并将它分配为视觉模型角色（默认可跟随对话模型）。
3. 保存后，在聊天中发送 `“看看我的桌面”` 即可测试截屏识别！
</FancyCard>

---

## 🔄 大模型热更新与动态切换

- **无需重启**：在高级设置中切换当前激活的大模型提供商后，点击应用，当前的对话服务即刻热加载新的 API 管道。
- **独立上下文保护**：切换大模型不会破坏当前的台词树与存档记忆，系统会自动适配不同模型的 Prompt 规范。

---

## ❓ 常见连接异常排障

| 现象 | 可能原因 | 解决办法 |
| :--- | :--- | :--- |
| **401 Unauthorized** | API Key 复制错误或包含前后空格 | 重新从服务商控制台复制 Key，确认为 `sk-` 开头 |
| **403 Forbidden / 429** | 账户欠费或并发请求频率超限 | 登录服务商后台检查账户余额，调小并发请求频率 |
| **Connection Timeout** | 网络无法直连（如 OpenAI 原生域名） | 确认科学上网环境或改用国内中转代理 / 阿里云 DashScope |
| **返回内容包含空块** | 模型格式返回不规范 | 升级至最新版 LingChat，已内嵌 LLM 输出自动容错修复器 |
