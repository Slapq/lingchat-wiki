<script setup lang="ts">
import { computed } from 'vue'
import contributors from '../../../../data/contributors.json'

const coreContributors = contributors

const props = defineProps<{
  filter?: string
}>()

const list = computed(() => {
  if (!props.filter) return coreContributors
  return coreContributors.filter(
    (c) =>
      c.tag?.toLowerCase().includes(props.filter!.toLowerCase()) ||
      c.role?.toLowerCase().includes(props.filter!.toLowerCase())
  )
})
</script>

<template>
  <div class="contributors-wrapper my-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="c in list"
        :key="c.name"
        class="contributor-card group relative flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div>
          <!-- Header -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="avatar-ring flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md overflow-hidden">
                <img v-if="c.avatar" :src="c.avatar" :alt="`${c.name} avatar`" class="h-full w-full object-cover" loading="lazy" />
                <span v-else>{{ c.name.slice(0, 2) }}</span>
              </div>
              <div class="truncate">
                <a
                  v-if="c.link"
                  :href="c.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-bold text-base text-[var(--vp-c-brand-1)] hover:underline flex items-center gap-1 group-hover:text-[var(--vp-c-brand-2)]"
                >
                  <span>{{ c.name }}</span>
                  <svg class="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span v-else class="font-bold text-base text-[var(--vp-c-text-1)]">
                  {{ c.name }}
                </span>
              </div>
            </div>

            <span
              v-if="c.tag"
              class="badge flex-shrink-0 whitespace-nowrap text-xs px-2.5 py-0.5 rounded-full font-semibold border"
            >
              {{ c.tag }}
            </span>
          </div>

          <!-- Role -->
          <div class="text-xs font-semibold text-[var(--vp-c-brand-1)] mb-2 tracking-wide uppercase">
            {{ c.role }}
          </div>

          <!-- Description -->
          <p class="text-xs text-[var(--vp-c-text-2)] leading-relaxed mb-4">
            {{ c.description }}
          </p>
        </div>

        <!-- Footer indicator -->
        <div class="pt-2 border-t border-[var(--vp-c-divider)] flex items-center justify-between text-[11px] text-[var(--vp-c-text-3)]">
          <span>LingChat Contributor</span>
          <span class="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--vp-c-brand-1)] font-medium">
            Verified ✦
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contributor-card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
  backdrop-filter: blur(8px);
}

.contributor-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 12px 30px -10px rgba(56, 189, 248, 0.2);
}

.avatar-ring {
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
}

.badge {
  background: rgba(56, 189, 248, 0.1);
  border-color: rgba(56, 189, 248, 0.3);
  color: var(--vp-c-brand-1);
}

:global(:root.dark) .badge {
  background: rgba(56, 189, 248, 0.15);
  border-color: rgba(56, 189, 248, 0.4);
}
</style>
