---
title: 社区支持与故障排查
description: LingChat 的安装、模型、资源和社区求助入口。
---

# 🧰 社区支持与故障排查

遇到问题时，请先确认 LingChat 版本、操作系统、复现步骤和报错截图或日志。完整信息能显著缩短定位时间。

## 支持渠道

| 问题类型 | 建议入口 |
| --- | --- |
| 安装与首次配置 | 安装互助 QQ 群：`1055935861` |
| AI、插件或二次开发 | 开发者 QQ 群：`798012738` |
| 缺陷与功能建议 | [GitHub Issues](https://github.com/SlimeBoyOwO/LingChat/issues) |
| 代码红字或终端错误 | [上游代码报错指引](https://github.com/SlimeBoyOwO/LingChat/blob/main/README-help.md) |

## 按现象排查

### AI 没有回复

检查 API Key、Base URL、模型名、账户额度和网络。`401` 通常意味着凭据错误，`429` 常见于限流或余额不足。更多模型配置见 [大模型与 API 配置](/guide/llm-config)。

### 程序无法启动或主程序被隔离

Windows 上先检查安全软件的保护历史记录，确认 `LingChat.exe` 没有被隔离。安装或解压目录建议保持可写且路径简洁。

### 本地 TTS 无法工作

确认本地 TTS 已安装 DeBERTa、Tokenizer、语音模型，以及 ONNX 语音对应的 `style_vectors.json`。设备驱动问题可暂时切回 CPU。参见 [语音引擎](/manual/tts-engine) 与 [推理设备](/manual/inference-devices)。

### Android 缺少角色或立绘

确认首次资源初始化已完成；不要在资源解压过程中强制关闭应用。详情见 [Android 运行机制与资源包](/guide/android-resources)。

### 导入角色失败

归档必须包含 `settings.yml`，且不能是加密包、路径穿越包或异常压缩包。参见 [角色导入导出与归档](/manual/role-archive)。

::: tip
提交 Issue 时，请勿粘贴 API Key、聊天隐私内容、签名证书或其他敏感信息。
:::
