---
layout: home

hero:
  name: "LingChat"
  text: "灵动の沉浸式 AI-Galgame 伴侣系统"
  tagline: "一个能记住你、懂你情绪、用声画相伴的高自由度虚拟恋人与剧情创作引擎 🌸"
  image:
    src: /images/lingChat.png
    alt: LingChat Hero
  actions:
    - theme: brand
      text: 🚀 立即开始
      link: /guide/quick-start
    - theme: alt
      text: 🎨 制作专属角色
      link: /creator/character-creation
    - theme: alt
      text: 📦 下载发行版
      link: https://github.com/SlimeBoyOwO/LingChat/releases

features:
  - icon: 🧠
    title: 独立树状记忆 (RAG & Non-RAG)
    details: 每个存档拥有独立的永久记忆与台词分支树，告别机械遗忘，支持无限历史回溯与深度陪伴。
  - icon: 💓
    title: 19 种微表情与自研情绪模型
    details: 轻量级 Bert 实时识别 AI 的 19 类细粒度情绪，立绘表情、动作演出与对话气泡色彩动态共鸣。
  - icon: 🎧
    title: 超低延迟 VITS 耳语音效
    details: 压缩至 1GB 的本地 Style-Bert-VITS2/ONNX 引擎，支持 DirectML 亚秒级多语言语音合成。
  - icon: 👀
    title: 视觉感知与主动窥屏
    details: 多模态视觉模型结合 APM 键鼠感知，在打游戏、敲代码或发呆时贴心发起契合场景的主动对话。
  - icon: 📜
    title: Galgame 剧本模式与 AI 融合
    details: 支持编写分支剧情、CG 演出、BGM/环境音转场，更有 AI 自由对话注入与羁绊剧情解锁。
  - icon: 🍅
    title: 桌面宠物 & 贴心效率助手
    details: 一键切换 LingPal 独立桌宠形态，集成日程闹钟、待办事项与沉浸番茄钟，陪伴工作与学习每一天。
---

<div class="max-w-6xl mx-auto px-4 py-8">
  <!-- Interactive Character Showcase Section -->
  <CharacterShowcase />

  <HomeModules />

  <div class="border-t border-[var(--vp-c-divider)] pt-12">
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold text-[var(--vp-c-text-1)] mb-2">核心贡献者与致谢名单</h3>
      <p class="text-xs text-[var(--vp-c-text-2)]">LingChat 是一场跨越二次元与前沿 AI 技术的开源探索，感谢每一位同行的开发者与创作者 ❤️</p>
    </div>
    <ContributorsPanel />
  </div>
</div>
