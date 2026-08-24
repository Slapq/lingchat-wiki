---
title: Python 插件开发指南
description: 在 LingChat 受限运行时中声明并实现扩展工具。
---

# 🔌 Python 插件开发指南

插件位于 `data/plugins/<id>/`，通过 `manifest.toml` 声明可供 AI 调用的工具，再使用 Python 实现 `run(ctx)`。

## 最小结构

```text
data/plugins/my_plugin/
├── manifest.toml
└── main.py
```

```toml
id = "my_plugin"
name = "我的插件"
description = "插件说明"
version = "0.1.0"
author = "LingChat"

[[tools]]
name = "my_plugin_action"
description = "供模型调用的操作"
timeout_ms = 30000
script = "main.py"
parameters = '{ "type":"object", "properties":{}, "required":[] }'
```

```python
def run(ctx):
    return {"ok": True, "tool": ctx["tool_name"]}
```

## 运行时边界

插件每次调用都在新的受限 Python 解释器中执行。文件系统、子进程和部分系统模块不可用；环境变量只会按 manifest 白名单注入 `ctx["env"]`。插件可以使用 `ctx["call_tool"]` 调用已注册工具，也可通过 `plugin_host` 提供的 HTTP 方法发起请求。

::: warning
`call_tool` 可以触发带写入能力的已注册工具。安装第三方插件前请评估来源和权限；插件作者不要编写死循环。
:::

完整 manifest、上下文字段与工具清单以 LingChat 上游 `docs/plugin-dev-guide.md` 为准。
