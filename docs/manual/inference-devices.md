---
title: 推理设备与 GPU 选择
description: 为本地 TTS 选择 CPU、GPU 或指定推理设备。
---

# 🖥️ 推理设备与 GPU 选择

本地 TTS 可在设置中选择推理设备。设备选择会保存，并在切换后重建相关 ONNX 会话；首次重新加载语音模型可能稍慢。

| 平台 | 推理后端 | 可选项 |
| --- | --- | --- |
| Windows | DirectML | CPU、GPU、NPU、指定显卡 |
| Linux x86_64 | WebGPU / Vulkan | CPU、GPU、指定显卡 |
| macOS | CoreML / WebGPU | CPU，系统自动使用合适后端 |
| Android | CPU | CPU |

## 使用建议

1. 先安装本地 TTS 所需的 DeBERTa 与语音模型。
2. 在 **设置 -> 本地 TTS** 选择设备。
3. 有多张显卡时，选择显示的具体型号后试听验证。
4. 出现驱动或兼容问题时切回 CPU。

::: warning
Linux 的具体 GPU 枚举依赖系统 Vulkan 运行时；枚举失败不会影响应用其他功能。macOS 和 Android 不提供手动显卡列表。
:::
