# 📦 安装与多平台部署

LingChat 现已支持 **Windows 10/11**、**Android 手机端**、**Linux** 以及 **macOS** 平台。你可以根据自己的设备环境选择最佳的部署方式。

---

## 💻 Windows 端安装指南

### 方式一：一键安装包（推荐）
1. 前往 [GitHub Releases](https://github.com/SlimeBoyOwO/LingChat/releases) 下载最新的 `LingChat.Setup.exe` 安装文件。
2. 双击运行安装向导，按照提示选择安装路径（建议安装至全英文路径，如 `D:\Program Files\LingChat`）。
3. 安装完成后，桌面上将生成 LingChat 快捷方式，双击即可直接启动。

### 方式二：免安装绿色版
1. 在 Releases 页面下载 `LingChat-vX.X.X-windows.7z`。
2. 使用 7-Zip 或 Bandizip 等解压软件解压至任意目录。
3. 双击根目录下的 `LingChat.exe` 即可运行。

::: tip 💡 运行依赖检查
- 确保系统为 **Windows 10 (1903+)** 或 **Windows 11 64位**。
- 如遇 DirectML 语音加速异常，请安装最新的显卡驱动程序与 DirectX 运行时组件。
:::

---

## 📱 Android 手机端安装指南

LingChat 提供了经过深度移动端优化的 Android 原生 APK：

1. 在 Releases 页面中下载 `LingChat-vX.X.X.apk`。
2. 传输至手机并允许“安装未知来源应用”。
3. 首次安装打开后，应用会自动释放默认角色与基础素材包。

::: warning 手机端首次启动贴士
部分机型首次启动加载角色资源时，若出现黑屏或未见立绘，**只需将 App 从后台划掉后重新进入**，即可正常加载默认角色资产。
:::

### 局域网数据同步
手机端与电脑端处于同一 Wi-Fi 局域网下时，可通过高级设置中的 **局域网数据同步** 功能，一键在电脑与手机之间同步记忆存档、对话记录与角色卡。

---

## 🐧 Linux & 🍎 macOS 部署

LingChat 基于现代化的 Tauri + Web 架构，支持全主流 Unix 平台：

### Linux (x86_64 / aarch64)
1. 下载 `LingChat-vX.X.X-linux-amd64.tar.xz` 或 `AppImage`。
2. 解压并赋予执行权限：
   ```bash
   tar -xvf LingChat-vX.X.X-linux-amd64.tar.xz
   cd LingChat
   chmod +x ling-chat
   ./ling-chat
   ```
3. 确保系统已安装 WebKit2GTK 与基础多媒体解码器：
   ```bash
   # Ubuntu / Debian
   sudo apt update && sudo apt install -y libwebkit2gtk-4.1-0 libsoup-3.0-0
   # Arch Linux
   sudo pacman -S webkit2gtk-4.1
   ```

### macOS (Apple Silicon / Intel)
1. 下载 `.dmg` 安装镜像文件。
2. 将 `LingChat.app` 拖入 `Applications` 应用程序文件夹。
3. 若提示“无法打开，因为无法验证开发者”，前往 **系统设置 ➔ 隐私与安全性 ➔ 仍要打开** 即可。

---

## 🌐 网页端模式 (Web Access)

如果你运行的是 Python 后端内核版本，LingChat 会在本地启动一个高性能异步 Web 服务：

- **默认访问端口**：`http://localhost:8756` 或 `http://localhost:8765`
- **局域网跨设备访问**：在同一局域网下，其他设备通过 `http://<宿主机IP>:8756` 即可在手机或平板浏览器上享受完整立绘对话、触摸交互与语音回放！

---

## 📂 核心目录架构与数据存放

解压或安装后的标准目录规范如下：

```
LingChat/
├── game_data/                 # 核心用户资产与数据
│   ├── characters/            # 角色卡目录（钦灵、风雪及自定义 OC）
│   │   ├── 诺一钦灵/
│   │   │   ├── avatars/       # 20 类表情差分立绘
│   │   │   └── settings.yml   # 角色人设、触摸点与语音配置
│   │   └── 风雪/
│   ├── scripts/               # 剧本与剧情包
│   │   └── standalone/        # 独立 Galgame 剧本
│   ├── skills/                # Agent Skills 拓展能力
│   ├── plugins/               # 社区拓展插件
│   └── game_database.db       # SQLite 核心记忆与台词数据库
├── models/                    # 本地 AI 模型权重
│   └── tts-local/             # ONNX 格式 Style-Bert-VITS2 语音模型
└── LingChat.exe               # 客户端主程序
```

---

## ⚡ 国内高速镜像加速下载

对于国内访问 GitHub Releases 较慢的用户，官方提供了多种镜像下载渠道：

1. **[ModelScope (魔搭社区)](https://www.modelscope.cn/models/lingchat-research-studio/)**：官方权重与打包构建版本同步镜像，下载速度可达数十 MB/s。
2. **GitHub Proxy 加速**：在 Release 下载链接前加上 `https://ghproxy.net/` 等公共加速前缀。
