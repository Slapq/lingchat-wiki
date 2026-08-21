<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'note' | 'tip' | 'warning' | 'danger' | 'feature' | 'event'
    title?: string
    icon?: string
  }>(),
  {
    type: 'feature',
    title: '功能亮点',
    icon: '✨',
  }
)

const colorMap = {
  note: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
  tip: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
  warning: 'border-amber-500/30 bg-amber-500/5 text-amber-400',
  danger: 'border-rose-500/30 bg-rose-500/5 text-rose-400',
  feature: 'border-indigo-500/30 bg-indigo-500/5 text-indigo-400',
  event: 'border-purple-500/30 bg-purple-500/5 text-purple-400',
}
</script>

<template>
  <div
    class="fancy-card my-6 rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 hover:shadow-lg relative overflow-hidden"
    :class="colorMap[type]"
  >
    <div class="flex items-center gap-3 mb-3">
      <span class="text-2xl select-none">{{ icon }}</span>
      <h4 class="m-0 text-base font-bold text-[var(--vp-c-text-1)] tracking-wide">
        {{ title }}
      </h4>
    </div>
    <div class="text-sm text-[var(--vp-c-text-2)] leading-relaxed space-y-2 prose-card">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fancy-card {
  backdrop-filter: blur(8px);
}

.prose-card :deep(p) {
  margin: 0.4rem 0;
}
.prose-card :deep(ul) {
  margin: 0.4rem 0;
  padding-left: 1.2rem;
}
.prose-card :deep(code) {
  background: var(--vp-c-bg-alt);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.85em;
}
</style>
