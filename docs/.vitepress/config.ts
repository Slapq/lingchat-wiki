import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: 'LingChat 官方文档',
  description: '灵动の沉浸式 AI-Galgame 伴侣系统 | 官方全景指南、创作者手册与架构设计规范',
  lang: 'zh-CN',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#38bdf8' }],
    ['meta', { name: 'keywords', content: 'LingChat, AI Galgame, 虚拟伴侣, VITS语音, 角色卡, 剧本模式, 桌宠, 情绪识别, AI陪伴' }],
    ['meta', { property: 'og:title', content: 'LingChat 官方文档' }],
    ['meta', { property: 'og:description', content: '灵动の沉浸式 AI-Galgame 伴侣系统开发与创作全景指南' }],
    ['meta', { property: 'og:image', content: '/images/lingChat.png' }],
  ],

  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(mathjax3)
    },
    headers: {
      level: [2, 3, 4],
    },
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      port: 5173,
    },
  },

  themeConfig: {
    siteTitle: 'LingChat Docs',
    logo: '/images/logo.png',

    nav: [
      { text: '✨ 首页', link: '/' },
      {
        text: '🚀 快速上手',
        items: [
          { text: '快速开始指引', link: '/guide/quick-start' },
          { text: '安装与多平台部署', link: '/guide/installation' },
          { text: 'Android 运行机制与资源包', link: '/guide/android-resources' },
          { text: '大模型与 API 配置', link: '/guide/llm-config' },
          { text: '社区支持与故障排查', link: '/guide/troubleshooting' },
          { text: '版本更新历程', link: '/guide/releases' },
        ],
      },
      {
        text: '📖 功能手册',
        items: [
          { text: '功能全景导览', link: '/manual/overview' },
          { text: '本地/外置 TTS 语音引擎', link: '/manual/tts-engine' },
          { text: '推理设备与 GPU 选择', link: '/manual/inference-devices' },
          { text: '主动对话与屏幕感知', link: '/manual/proactive-companion' },
          { text: '日程·待办·番茄钟', link: '/manual/schedule-todo' },
          { text: 'LingPal 桌面宠物模式', link: '/manual/lingpal-desktop-pet' },
          { text: '记忆与对话存档', link: '/manual/memory-archive' },
          { text: '角色导入导出与归档', link: '/manual/role-archive' },
        ],
      },
      {
        text: '🎨 创作者工坊',
        items: [
          { text: '角色卡制作与触摸配置', link: '/creator/character-creation' },
          { text: '剧本编写与演出指南', link: '/creator/script-tutorial' },
          { text: '可视化剧本编辑器', link: '/creator/script-editor' },
          { text: '剧本事件语法速查大全', link: '/creator/script-events-ref' },
          { text: 'Python 插件开发指南', link: '/creator/plugin-development' },
          { text: 'Style-Bert-VITS2 训练教程', link: '/creator/vits-training' },
          { text: '创意工坊投稿规范', link: '/creator/workshop-publishing' },
        ],
      },
      {
        text: '🏗️ 架构与设计',
        items: [
          { text: 'Tauri + Rust 后端架构', link: '/design/backend-architecture' },
          { text: '前端事件驱动与模块解耦', link: '/design/frontend-architecture' },
          { text: '统一游戏状态与存档设计', link: '/design/unified-system' },
          { text: 'SQLite 数据库与表结构', link: '/design/database-schema' },
          { text: 'LLM 记忆构建器算法', link: '/design/memory-builder' },
          { text: 'AI 工具调用 (Function Calling)', link: '/design/function-call' },
        ],
      },
      {
        text: '🌟 社区与贡献',
        items: [
          { text: '开发协作流程与规范', link: '/community/dev-process' },
          { text: '界面国际化 (i18n) 开发指南', link: '/community/i18n-guide' },
          { text: '星辉激励机制 (CSP 奖励)', link: '/community/bounty-program' },
          { text: '核心贡献者墙与致谢', link: '/community/contributors' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '🚀 入门与指引',
          items: [
            { text: '快速开始指引', link: '/guide/quick-start' },
            { text: '安装与多平台部署', link: '/guide/installation' },
            { text: 'Android 运行机制与资源包', link: '/guide/android-resources' },
            { text: '大模型与 API 配置', link: '/guide/llm-config' },
            { text: '社区支持与故障排查', link: '/guide/troubleshooting' },
            { text: '版本更新历程', link: '/guide/releases' },
          ],
        },
      ],
      '/manual/': [
        {
          text: '📖 玩法与功能手册',
          items: [
            { text: '功能全景导览', link: '/manual/overview' },
            { text: '本地/外置 TTS 语音引擎', link: '/manual/tts-engine' },
            { text: '推理设备与 GPU 选择', link: '/manual/inference-devices' },
            { text: '主动对话与屏幕感知', link: '/manual/proactive-companion' },
            { text: '日程·待办·番茄钟', link: '/manual/schedule-todo' },
            { text: 'LingPal 桌面宠物模式', link: '/manual/lingpal-desktop-pet' },
            { text: '记忆与对话存档', link: '/manual/memory-archive' },
            { text: '角色导入导出与归档', link: '/manual/role-archive' },
          ],
        },
      ],
      '/creator/': [
        {
          text: '🎨 创作者与工坊',
          items: [
            { text: '角色卡制作与触摸配置', link: '/creator/character-creation' },
            { text: '剧本编写与演出指南', link: '/creator/script-tutorial' },
            { text: '可视化剧本编辑器', link: '/creator/script-editor' },
            { text: '剧本事件语法速查大全', link: '/creator/script-events-ref' },
            { text: 'Python 插件开发指南', link: '/creator/plugin-development' },
            { text: 'Style-Bert-VITS2 训练教程', link: '/creator/vits-training' },
            { text: '创意工坊投稿规范', link: '/creator/workshop-publishing' },
          ],
        },
      ],
      '/design/': [
        {
          text: '🏗️ 架构与系统设计',
          items: [
            { text: 'Tauri + Rust 后端架构', link: '/design/backend-architecture' },
            { text: '前端事件驱动与模块解耦', link: '/design/frontend-architecture' },
            { text: '统一游戏状态与存档设计', link: '/design/unified-system' },
            { text: 'SQLite 数据库与表结构', link: '/design/database-schema' },
            { text: 'LLM 记忆构建器算法', link: '/design/memory-builder' },
            { text: 'AI 工具调用 (Function Calling)', link: '/design/function-call' },
          ],
        },
      ],
      '/community/': [
        {
          text: '🌟 社区生态与开源贡献',
          items: [
            { text: '开发协作流程与规范', link: '/community/dev-process' },
            { text: '界面国际化 (i18n) 开发指南', link: '/community/i18n-guide' },
            { text: '星辉激励机制 (CSP 奖励)', link: '/community/bounty-program' },
            { text: '核心贡献者墙与致谢', link: '/community/contributors' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SlimeBoyOwO/LingChat' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bilibili</title><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.774 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.264 1.52-3.774 1.56H5.333c-1.51-.04-2.769-.56-3.773-1.56C.556 20.116.036 18.857 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.264-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.08-.08c.249-.249.551-.373.907-.373.355 0 .657.124.906.373l2.88 2.747h6.667l2.88-2.747c.249-.249.551-.373.907-.373.355 0 .657.124.906.373l.08.08c.249.249.374.551.374.907 0 .355-.125.657-.374.906l-1.173 1.12zM5.333 7.32c-.746.018-1.373.276-1.88.773-.506.498-.769 1.12-.786 1.867v7.36c.017.747.28 1.373.786 1.88.507.507 1.134.764 1.88.773h13.334c.746-.009 1.373-.266 1.88-.773.506-.507.769-1.133.786-1.88v-7.36c-.017-.747-.28-1.369-.786-1.867-.507-.497-1.134-.755-1.88-.773H5.333zm2.534 3.733c.693 0 1.253.56 1.253 1.254v2.506c0 .694-.56 1.254-1.253 1.254-.694 0-1.254-.56-1.254-1.254v-2.506c0-.694.56-1.254 1.254-1.254zm8.266 0c.694 0 1.254.56 1.254 1.254v2.506c0 .694-.56 1.254-1.254 1.254-.693 0-1.253-.56-1.253-1.254v-2.506c0-.694.56-1.254 1.253-1.254z"/></svg>',
        },
        link: 'https://space.bilibili.com/175560946',
      },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },

    editLink: {
      pattern: 'https://github.com/Slapq/lingchat-wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: 'Released under the GNU AGPLv3 License. Powered by VitePress & Tauri.',
      copyright: 'Copyright © 2025-2026 LingChat Team & NoiQing_Ling (诺一钦灵)',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outline: {
      label: '本页导览',
      level: [2, 3],
    },

    darkModeSwitchLabel: '深浅模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录菜单',
    returnToTopLabel: '返回顶部',
  },
})
