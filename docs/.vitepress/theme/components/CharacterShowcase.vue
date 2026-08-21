<script setup lang="ts">
import { ref } from 'vue'

interface Character {
  name: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  avatar: string
  fullImage: string
  quote: string
  color: string
}

const characters: Character[] = [
  {
    name: '诺一钦灵',
    title: 'Slime Studio 看板娘',
    subtitle: '元气 · 傲娇 · 黏人小狼娘',
    description: 'LingChat 的第一位默认角色。有着毛茸茸的耳朵与敏锐的情绪反应，喜欢吃蛋糕和陪伴玩家工作，生气时会气鼓鼓地别过头去。',
    tags: ['默认伴侣', '19种微表情', 'VITS专属音色', '全身触摸'],
    avatar: '/images/qinling-avatar.png',
    fullImage: '/images/hero-character.png',
    quote: '【高兴】今天要不要一起吃蛋糕呀？（拿起蛋糕）这可是我存下来的钱买的，超好吃的哦！',
    color: 'from-sky-500/20 via-indigo-500/20 to-pink-500/20',
  },
  {
    name: '风雪',
    title: '冷静猫娘 · 记忆仓库',
    subtitle: '优雅 · 高冷 · 细腻观察者',
    description: '0.4.0 版本加入的高人气角色。外表沉着冷静，实则内心细腻体贴，善于在静谧的时光中静静倾听你的心声。',
    tags: ['新增角色', '全差分立绘', '冷静声线', '羁绊剧情'],
    avatar: '/images/fengxue.png',
    fullImage: '/images/fengxue.png',
    quote: '【平静】外面下雨了呢……（递过热咖啡）今天就留在房间里，好好休息一下吧。',
    color: 'from-blue-500/20 via-cyan-500/20 to-indigo-500/20',
  },
  {
    name: '小钦灵',
    title: 'AstrBot 智能伴侣',
    subtitle: '活泼 · 治愈 · 气氛担当',
    description: '常驻于社区交流群与桌宠生态中的萌系助手，负责整活、提醒日常事务以及带给所有人欢笑。',
    tags: ['桌宠模式', '群聊助手', '日常提醒', '元气满满'],
    avatar: '/images/xiaoqinling.png',
    fullImage: '/images/xiaoqinling.png',
    quote: '【调皮】嘿嘿~ 抓到你在摸鱼啦！要不要小钦灵给你唱首歌提提神喵？',
    color: 'from-pink-500/20 via-rose-500/20 to-amber-500/20',
  },
]

const currentIndex = ref(0)
const selectChar = (idx: number) => {
  currentIndex.value = idx
}
</script>

<template>
  <div class="character-showcase-container my-12">
    <!-- Header -->
    <div class="text-center mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
        🎭 Character Showcase
      </div>
      <h3 class="text-2xl sm:text-3xl font-black text-[var(--vp-c-text-1)]">
        官方预设伴侣阵容
      </h3>
      <p class="text-xs sm:text-sm text-[var(--vp-c-text-2)] mt-1">
        每位角色均配备完整的 20 差分微表情、专属声线及深度人设 Prompt
      </p>
    </div>

    <!-- Switcher Buttons -->
    <div class="flex flex-wrap justify-center gap-3 mb-8">
      <button
        v-for="(c, idx) in characters"
        :key="c.name"
        @click="selectChar(idx)"
        class="group relative flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition-all duration-300 cursor-pointer"
        :class="currentIndex === idx
          ? 'bg-[var(--vp-c-bg)] border-[var(--vp-c-brand-1)] shadow-lg shadow-sky-500/20 scale-105'
          : 'bg-[var(--vp-c-bg-soft)] border-[var(--vp-c-divider)] hover:border-[var(--vp-c-brand-1)] opacity-70 hover:opacity-100'"
      >
        <img :src="c.avatar" :alt="c.name" class="w-7 h-7 rounded-full object-cover border border-[var(--vp-c-divider)]" />
        <span class="text-xs sm:text-sm font-bold text-[var(--vp-c-text-1)]">{{ c.name }}</span>
      </button>
    </div>

    <!-- Active Character Card -->
    <div
      class="active-char-card relative rounded-3xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-soft)] p-6 sm:p-10 overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-500"
    >
      <!-- Background Ambient Glow -->
      <div
        class="absolute inset-0 bg-gradient-to-br opacity-40 pointer-events-none transition-all duration-700"
        :class="characters[currentIndex].color"
      />

      <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Text Info (Left) -->
        <div class="lg:col-span-7 space-y-5">
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-3">
              <h4 class="text-3xl font-black tracking-tight text-[var(--vp-c-text-1)]">
                {{ characters[currentIndex].name }}
              </h4>
              <span class="px-3 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                {{ characters[currentIndex].title }}
              </span>
            </div>
            <div class="text-xs font-mono text-[var(--vp-c-brand-1)] font-semibold">
              {{ characters[currentIndex].subtitle }}
            </div>
          </div>

          <p class="text-sm text-[var(--vp-c-text-2)] leading-relaxed">
            {{ characters[currentIndex].description }}
          </p>

          <!-- Quote Dialogue Box -->
          <div class="quote-box p-4 rounded-2xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-alt)]/80 backdrop-blur-md relative">
            <div class="text-xs text-[var(--vp-c-text-3)] font-mono mb-1 flex items-center gap-1.5">
              <span>💬 经典台词预览</span>
            </div>
            <div class="text-xs sm:text-sm font-medium text-[var(--vp-c-text-1)] italic leading-relaxed">
              “{{ characters[currentIndex].quote }}”
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 pt-2">
            <span
              v-for="tag in characters[currentIndex].tags"
              :key="tag"
              class="text-[11px] px-3 py-1 rounded-xl bg-[var(--vp-c-bg)] border border-[var(--vp-c-divider)] text-[var(--vp-c-text-2)] font-medium"
            >
              ✦ {{ tag }}
            </span>
          </div>

          <!-- Action -->
          <div class="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="/creator/character-creation"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-sky-500/30 hover:scale-105 transition-all"
            >
              <span>制作同款角色卡</span>
              <span>→</span>
            </a>
            <a
              href="/manual/tts-engine"
              class="text-xs font-semibold text-[var(--vp-c-brand-1)] hover:underline"
            >
              配置专属语音引擎 ➔
            </a>
          </div>
        </div>

        <!-- Character Visual (Right) -->
        <div class="lg:col-span-5 flex justify-center items-center">
          <div class="relative group/img max-w-[280px] sm:max-w-[320px]">
            <div class="absolute -inset-4 rounded-full bg-gradient-to-r from-sky-400/20 via-purple-500/20 to-pink-500/20 blur-2xl group-hover/img:blur-3xl transition-all" />
            <img
              :src="characters[currentIndex].fullImage"
              :alt="characters[currentIndex].name"
              class="relative z-10 w-full max-w-[320px] max-h-[380px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover/img:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active-char-card {
  backdrop-filter: blur(16px);
}
</style>
