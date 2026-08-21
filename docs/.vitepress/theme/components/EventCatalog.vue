<script setup lang="ts">
import { computed, ref } from 'vue'

const activeCategory = ref('all')

const events = [
  { category: 'dialogue', type: 'narration', name: '旁白叙事', desc: '用于环境描写、心理活动或第三方叙述，不归属具体发言角色。', example: '{"type": "narration", "text": "夏日的微风拂过窗帘，带来一丝清凉。"}' },
  { category: 'dialogue', type: 'player', name: '玩家固定台词', desc: '以玩家视角输出固定台词，推动剧情交互。', example: '{"type": "player", "text": "钦灵，今天想去哪里玩？"}' },
  { category: 'dialogue', type: 'dialogue', name: '预设角色台词', desc: '预先编写好的角色台词，支持内嵌【情绪】标签。', example: '{"type": "dialogue", "character": "诺一钦灵", "text": "【高兴】今天去图书馆看书吧喵！"}' },
  { category: 'media', type: 'background', name: '切换背景', desc: '切换主画面背景插图，支持淡入淡出过渡。', example: '{"type": "background", "imagePath": "library.png", "duration": 1.5}' },
  { category: 'media', type: 'background_music', name: '背景音乐 (BGM)', desc: '播放或更换剧本背景音乐，值为 none 时停止播放。', example: '{"type": "background_music", "musicPath": "afternoon_tea.mp3"}' },
  { category: 'media', type: 'sound', name: '播放音效', desc: '触发单次即时音效（如开门声、脚步声、惊叹声）。', example: '{"type": "sound", "soundPath": "door_open.wav"}' },
  { category: 'media', type: 'background_effect', name: '背景粒子特效', desc: '启用樱花、雨滴、星空等动态环境粒子滤镜。', example: '{"type": "background_effect", "effect": "sakura"}' },
  { category: 'media', type: 'present_pic', name: '插图 / CG 贴图', desc: '在屏幕中央浮现 CG 原画或剧情线索插图。', example: '{"type": "present_pic", "imagePath": "cg_memory_01.png", "scale": 1.2}' },
  { category: 'character', type: 'modify_character', name: '修改角色状态', desc: '控制角色的登场、退场、立绘差分以及是否开启视线感知。', example: '{"type": "modify_character", "character": "风雪", "action": "show_character", "emotion": "害羞"}' },
  { category: 'ai', type: 'input', name: '等待玩家键入', desc: '弹出自定义输入框，等待玩家输入任意文本。', example: '{"type": "input", "hint": "请输入你想对她说的话..."}' },
  { category: 'ai', type: 'ai_dialogue', name: 'AI 智能生成回复', desc: '根据剧本当前上下文与特定 Prompt 驱动 LLM 实时生成个性化台词。', example: '{"type": "ai_dialogue", "character": "MAIN", "prompt": "表现出惊喜的态度"}' },
  { category: 'ai', type: 'free_dialogue', name: '自由多轮对话', desc: '进入 AI 自由对话流，达成特定退出台词或最大轮次后继续推进剧本。', example: '{"type": "free_dialogue", "character": "MAIN", "end_line": "我们出发吧", "max_rounds": 5}' },
  { category: 'branch', type: 'choices', name: '多分支选项', desc: '弹出分支选项让玩家抉择，不同选项可触发变量修改或直接跳转。', example: '{"type": "choices", "options": [{"text": "去公园", "actions": []}, {"text": "回家", "actions": []}]}' },
  { category: 'branch', type: 'chapter_end', name: '章节跳转 / 完结', desc: '线性跳转至下一个章节片段，或宣告剧本终结返回自由模式。', example: '{"type": "chapter_end", "end_type": "linear", "next_chapter": "Chapter_2/2-1.json"}' },
  { category: 'branch', type: 'set_variable', name: '操作全局变量', desc: '对剧本变量池进行计算与赋值，用于好感度与支线判定。', example: '{"type": "set_variable", "operation": "favorability += 10"}' },
]

const categories = [
  { key: 'all', label: '全部事件 (All)' },
  { key: 'dialogue', label: '💬 对话叙事' },
  { key: 'media', label: '🎬 视听演出' },
  { key: 'character', label: '🎭 角色控制' },
  { key: 'ai', label: '🧠 AI 与交互' },
  { key: 'branch', label: '🔀 分支与逻辑' },
]

const filteredEvents = computed(() => {
  if (activeCategory.value === 'all') return events
  return events.filter((e) => e.category === activeCategory.value)
})
</script>

<template>
  <div class="events-reference-container my-6">
    <!-- Filter Tabs -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="cat in categories"
        :key="cat.key"
        @click="activeCategory = cat.key"
        class="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer"
        :class="activeCategory === cat.key
          ? 'bg-[var(--vp-c-brand-1)] text-white shadow-md shadow-sky-500/20'
          : 'bg-[var(--vp-c-bg-soft)] text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)] border border-[var(--vp-c-divider)]'"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="ev in filteredEvents"
        :key="ev.type"
        <div class="event-card min-w-0 p-5 rounded-2xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-soft)] flex flex-col justify-between hover:border-[var(--vp-c-brand-1)] transition-all hover:shadow-lg">
      >
        <div>
          <div class="flex min-w-0 items-center justify-between gap-2 mb-2">
            <h4 class="m-0 font-bold text-base text-[var(--vp-c-text-1)]">
              {{ ev.name }}
            </h4>
            <code class="px-2 py-0.5 rounded text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
              type: "{{ ev.type }}"
            </code>
          </div>
          <p class="text-xs text-[var(--vp-c-text-2)] leading-relaxed mb-4">
            {{ ev.desc }}
          </p>
        </div>

        <div class="mt-2">
          <div class="text-[11px] font-mono text-[var(--vp-c-text-3)] mb-1">JSON 示例:</div>
          <pre class="m-0 min-w-0 max-w-full p-2.5 rounded-xl bg-[var(--vp-c-bg-alt)] border border-[var(--vp-c-divider)] overflow-x-auto text-[11px] text-[var(--vp-c-text-1)] font-mono"><code>{{ ev.example }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  backdrop-filter: blur(8px);
}
</style>
