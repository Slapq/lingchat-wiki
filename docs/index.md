---
layout: home

hero:
  name: "LingChat"
  text: "灵动的沉浸式 AI-Galgame 伴侣系统"
  tagline: "一个能记住你、懂你情绪、用声画相伴的高自由度虚拟恋人与剧情创作引擎。"
  image:
    src: /images/lingChat.png
    alt: LingChat Hero
  actions:
    - theme: brand
      text: 立即开始
      link: /guide/quick-start
    - theme: alt
      text: 制作专属角色
      link: /creator/character-creation
    - theme: alt
      text: 下载发行版
      link: https://github.com/SlimeBoyOwO/LingChat/releases

features:
  - icon: 🧠
    title: 独立存档与树状记忆
    details: 每个存档保存独立的台词树、角色上下文与长期记忆，支持回溯与分支对话。
  - icon: 💓
    title: 情绪表现与动态立绘
    details: 情绪分类驱动角色表情、动作、气泡与语音，让每次对话保持沉浸感。
  - icon: 🎧
    title: 本地与外置 TTS
    details: 支持内置 Style-Bert-VITS2/ONNX 引擎及多种外置语音服务。
  - icon: 👀
    title: 主动陪伴与视觉感知
    details: 可结合日程、活动状态和用户授权的屏幕感知，发起符合场景的互动。
  - icon: 📜
    title: 多角色剧本与羁绊
    details: 支持分支剧情、事件演出、成就和 AI 自由对话注入。
  - icon: 🛠️
    title: Skills、插件与工具调用
    details: 通过可视化剧本编辑器、Skill Agent、Function Calling 与插件扩展创作能力。
---

<div class="max-w-6xl mx-auto px-4 py-8">
  <CharacterShowcase />

  <HomeModules />

  <div class="border-t border-[var(--vp-c-divider)] pt-12">
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold text-[var(--vp-c-text-1)] mb-2">核心贡献者与致谢名单</h3>
      <p class="text-xs text-[var(--vp-c-text-2)]">LingChat 是一场跨越二次元与前沿 AI 技术的开源探索，感谢每一位同行的开发者与创作者。</p>
    </div>
    <ContributorsPanel />
  </div>

  <div class="mt-10 text-center text-sm text-[var(--vp-c-text-2)]">
    本站最初从钦灵的 LingBlog 迁移，现以 LingChat 当前 main 分支为准。<a href="/SOURCES">查看页面来源与版本矩阵</a>
  </div>
</div>
