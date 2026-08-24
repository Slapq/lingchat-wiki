---
title: 界面国际化 (i18n) 开发指南
description: LingChat Vue 界面的语言包、术语与维护规则。
---

# 🌐 界面国际化 (i18n) 开发指南

LingChat 使用 `vue-i18n@10`，内置中文、香港繁体、日语和英语语言包。新增 UI 文案先在中文语言包中维护，缺失的其他语言会回退到中文。

## 位置与规则

```text
src/locales/<locale>/<namespace>.ts
data/locales/<locale>.json
```

- `src/locales/` 是随应用发布的内置词条。
- `data/locales/` 是运行时语言文件，用户修改优先并与内置词条深合并。
- key 使用稳定语义，例如 `settings.history.backtrack`。
- 插值使用命名参数，例如 `t('key', { name })`。

## 不要翻译

不要将 LLM 提示词、日志、角色设定、剧本内容、情绪枚举、后端协议值、磁盘路径、URL 或环境变量名放入 UI 翻译流程。

## 术语纪律

香港繁体采用粤语文体，不能用自动转换批量覆盖。建议使用仓库推荐的 i18n-ally 扩展查看和维护多语言词条。

::: tip
新功能只需要先补充 `zh-CN` 的对应命名空间；其他语言应在后续翻译任务中有计划地补齐。
:::
