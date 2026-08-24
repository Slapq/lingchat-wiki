---
title: 开发协作流程与规范
description: 按当前 LingChat main 分支进行 Issue、PR、本地构建和架构讨论。
---

# 🌟 开发协作流程与规范

LingChat 的当前开发主线是 `main`。提交功能前请先在 [GitHub Issues](https://github.com/SlimeBoyOwO/LingChat/issues) 讨论范围和使用场景，避免完成后发现方向与项目不符。

## 如何贡献

- 报告 Bug 时提供版本、系统、复现步骤、日志或截图。
- 功能建议先创建 Issue 并达成共识，再开始实现。
- 已确认的 Bug 修复可以直接提交 PR，并在描述中关联 Issue。
- 保持改动聚焦，避免无关格式化和缺乏上下文的重构。

## 本地开发

```bash
git clone https://github.com/SlimeBoyOwO/LingChat
cd LingChat
npm install -g pnpm
pnpm install
pnpm run init
pnpm run tauri dev
```

项目需要 Node、pnpm 与 Rust。仅构建前端可运行 `pnpm run build`。

## 架构变更

LingChat 优先保证维护者的迭代速度和实际工作流。若认为现有架构存在严重问题，请在 Issue 中说明可复现的问题、完整可执行方案以及可衡量收益。

::: tip
本页以当前 `.github/CONTRIBUTING.md` 为准。旧“开发在 develop 分支、稳定版在 main”的说明已废弃。
:::
