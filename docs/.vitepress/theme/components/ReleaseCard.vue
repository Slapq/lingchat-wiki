<script setup lang="ts">
defineProps<{
  version: string
  date: string
  title: string
  badge?: string
  isLatest?: boolean
}>()
</script>

<template>
  <div class="release-timeline-item relative pl-8 pb-10 last:pb-2 group">
    <!-- Line -->
    <div class="timeline-line absolute left-[11px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-[var(--vp-c-brand-1)] to-[var(--vp-c-divider)]" />

    <!-- Node Icon -->
    <div
      class="absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
      :class="isLatest ? 'bg-[var(--vp-c-brand-1)] border-white text-white shadow-lg shadow-sky-500/50' : 'bg-[var(--vp-c-bg)] border-[var(--vp-c-brand-1)] text-[var(--vp-c-brand-1)]'"
    >
      <div v-if="isLatest" class="relative h-2 w-2">
        <div class="absolute inset-0 rounded-full bg-white" />
        <div class="absolute inset-0 rounded-full bg-white animate-ping" />
      </div>
      <div v-else class="h-2 w-2 rounded-full bg-[var(--vp-c-brand-1)]" />
    </div>

    <!-- Content Block -->
    <div class="p-5 rounded-2xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-soft)] transition-all duration-300 hover:border-[var(--vp-c-brand-1)] hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div class="flex items-center gap-3">
          <span class="text-xl font-black tracking-tight text-[var(--vp-c-brand-1)] font-mono">
            {{ version }}
          </span>
          <span v-if="badge" class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            {{ badge }}
          </span>
          <span v-if="isLatest" class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 animate-pulse">
            Latest
          </span>
        </div>
        <span class="text-xs font-mono text-[var(--vp-c-text-3)]">
          {{ date }}
        </span>
      </div>

      <h3 class="text-lg font-bold text-[var(--vp-c-text-1)] mb-4">
        {{ title }}
      </h3>

      <div class="prose-timeline text-sm text-[var(--vp-c-text-2)] leading-relaxed space-y-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.release-timeline-item:last-child .timeline-line {
  display: none;
}
.prose-timeline :deep(h4) {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.prose-timeline :deep(ul) {
  margin: 0.5rem 0;
  padding-left: 1.25rem;
}
.prose-timeline :deep(li) {
  margin: 0.3rem 0;
}
.prose-timeline :deep(code) {
  background: var(--vp-c-bg-alt);
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  font-size: 0.85em;
}
</style>
