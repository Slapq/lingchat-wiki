---
title: 角色卡制作与触摸配置
description: 为当前 LingChat 创建角色资源、settings.yml 与可选服装。
---

# 🎨 角色卡制作与触摸配置

角色资源位于 `data/game_data/characters/<角色名>/`。建议先复制一个官方角色目录，再替换素材与 `settings.yml`，以确保字段与当前版本一致。

## 目录结构

```text
characters/<角色名>/
├── avatar/或 avatars/     # 头像、情绪立绘与服装子目录
└── settings.yml           # 人设、显示、触摸、服装与语音配置
```

## 准备素材

- 准备角色头像和各情绪对应的透明背景立绘。
- 服装可以使用头像目录下的子文件夹，例如 `泳装/`、`睡衣/`。
- 立绘文件名应与应用支持的情绪名称一致；以当前官方角色目录为准。

## 配置重点

`settings.yml` 负责角色名、人设、缩放、偏移、气泡位置、服装、语音与触摸区域。触摸区域使用图片坐标系中的多边形点位，请基于实际立绘尺寸校准。

```yaml
ai_name: 我的角色
character_folder: 我的角色
system_prompt: |
  在这里填写角色设定。
clothes:
  - name: 默认
    prompt: 角色穿着日常服装。
```

::: tip
`character_folder` 必须与角色目录名一致。修改后通过应用内角色管理刷新或重新打开角色列表进行确认。
:::

## 分享与迁移

可在应用内把角色导出为 `.zip` 或 `.7z`，再在桌面端或 Android 导入。归档会进行路径安全、条目数和压缩比检查。详见 [角色导入导出与归档](/manual/role-archive)。

旧版 `settings.txt v3.0.1` 迁移说明已不适用于当前 `settings.yml` 格式。
