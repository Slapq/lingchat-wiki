---
title: 安装与多平台部署
description: LingChat v0.5 的发行版安装、运行时数据目录与多平台说明。
---

# 📦 安装与多平台部署

LingChat 当前使用 **Tauri v2** 打包为原生应用，发行版以 [GitHub Releases](https://github.com/SlimeBoyOwO/LingChat/releases) 为准。它不是浏览器网页服务，不需要也不会启动 `localhost:8756` 一类的 Python Web 端口。

## Windows

1. 在 Releases 下载最新的 `LingChat vX.X.X.7z` 或安装程序。
2. 解压或安装后运行 `LingChat.exe`。
3. 若 Windows Defender 隔离了主程序，请在保护历史记录中确认后恢复并为安装目录添加排除项。

::: tip
当前主线适用于 Windows 10 64 位及以上。老旧 32 位机器请使用 Releases 或 Issue 中标注的兼容版本。
:::

## Android

1. 下载对应的 APK 并按系统提示安装。
2. 首次启动时，应用会把内置资源播种到应用数据目录。
3. 手机与电脑处于同一局域网时，可使用应用内的局域网同步功能迁移数据。

Android 使用 `data.zip` 处理 APK 资源中的中文文件名，首次解压完成前请不要中断应用。

## Linux 与 macOS

Releases 提供 Linux 的 `deb`、`AppImage` 等包以及 macOS 的 DMG。Linux 运行前需满足发行版所需的 WebKitGTK 等系统依赖；具体包名随发行版而变。

## 运行时数据

桌面发行版默认将用户数据放在程序旁的 `data/`；开发模式使用项目根目录的 `data/`。Android 使用系统为应用分配的数据目录。

```text
data/
├── game_data/
│   ├── characters/  # 角色配置与立绘
│   ├── scripts/     # 剧本
│   ├── skills/      # Agent Skills
│   └── plugins/     # 插件
├── third_party/     # 内置第三方资源
└── game_data.db     # SQLite 数据库
```

::: info 来源
本页依据 LingChat 当前 `main` 的 `.github/README.md`、`docs/android/migration.md`、`src-tauri/src/init/static_copy.rs` 与 `src-tauri/tauri.conf.json` 整理。
:::
