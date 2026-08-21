<script setup lang="ts">
import { ref, watch } from 'vue'

interface TabItem {
  label: string
  key: string
}

const props = defineProps<{
  tabs: TabItem[]
  defaultTab?: string
}>()

const activeTab = ref(props.defaultTab || props.tabs[0]?.key)

watch(
  () => [props.defaultTab, props.tabs],
  () => {
    activeTab.value = props.defaultTab || props.tabs[0]?.key
  },
  { deep: true }
)
</script>

<template>
  <div class="code-tabs-wrapper my-6 min-w-0 rounded-2xl border border-[var(--vp-c-divider)] overflow-hidden bg-[var(--vp-c-bg-soft)] shadow-sm">
    <!-- Tab Headers -->
    <div class="flex items-center gap-1 px-3 py-2 bg-[var(--vp-c-bg-alt)] border-b border-[var(--vp-c-divider)] overflow-x-auto scrollbar-none">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        class="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer"
        :class="activeTab === tab.key
          ? 'bg-[var(--vp-c-bg)] text-[var(--vp-c-brand-1)] shadow-sm border border-[var(--vp-c-divider)]'
          : 'text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)] hover:bg-[var(--vp-c-bg-mute)] border border-transparent'"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="p-4">
      <slot :name="activeTab" />
    </div>
  </div>
</template>
