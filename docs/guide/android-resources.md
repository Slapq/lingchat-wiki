---
title: Android 运行机制与资源包
description: LingChat Android 的资源打包、首次初始化和数据目录说明。
---

# 📱 Android 运行机制与资源包

LingChat Android 使用 Tauri v2 原生应用。因为 Android AssetManager 无法可靠读取带中文文件名的单个资源，应用将默认资源封装为单个 ASCII 路径的 `data.zip`，再在首次启动时解压到应用数据目录。

## 首次启动

```text
APK assets/data/data.zip
  -> 首次启动读取并解压
  -> 应用数据目录的 game_data/ 与 third_party/
  -> 写入 .seeded 标记
```

应用后续启动会检查 `.seeded` 和 `data_manifest.json`，存在时跳过重复解压。解压后的资源使用普通文件系统读写，因此角色、剧本和中文资源名可以正常使用。

## 数据位置

- Android：应用专属数据目录，由系统管理，卸载应用时通常会一并清除。
- 桌面开发模式：项目根目录的 `data/`。
- 桌面发行版：可执行文件同级的 `data/`。

## 构建 Android 发行版

```bash
pnpm android:prepare
pnpm android:build
```

`android:prepare` 生成并放置资源包；`android:build` 会准备资源并构建 arm64 Android 包。该流程面向项目贡献者，普通用户只需从 Releases 安装 APK。

::: warning
首次资源初始化中断可能造成默认资源不完整。遇到角色或立绘无法加载时，优先确认应用已完成首次启动，再检查应用数据与版本更新提示。
:::

::: info 来源
依据 LingChat 当前 `docs/android/migration.md`、`scripts/prepare-bundled-resources.mjs` 与 `src-tauri/src/init/static_copy.rs` 整理。
:::
