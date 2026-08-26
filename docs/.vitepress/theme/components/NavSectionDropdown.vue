<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'
import VPMenu from 'vitepress/dist/client/theme-default/components/VPMenu.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPNavScreenMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue'

const props = defineProps<{
  text?: string
  link?: string
  /** 命中前缀：当前页面命中任一前缀时高亮分区标题 */
  match?: string[]
  items?: any[]
  /** 移动端全屏菜单注入的布尔标记，命中时完全复用默认手风琴行为 */
  screenMenu?: boolean
}>()

const { page } = useData()

const isActive = computed(() => {
  const path = page.value.relativePath
  return (props.match ?? []).some((p) => path.startsWith(`${p}/`))
})

const el = ref<HTMLElement | null>(null)
const open = ref(false)

function onDocClick(e: MouseEvent) {
  if (el.value && !el.value.contains(e.target as Node)) {
    open.value = false
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <!-- 移动端：完全复用 VitePress 默认手风琴行为，不做改动 -->
  <VPNavScreenMenuGroup
    v-if="screenMenu"
    :text="text ?? ''"
    :items="items ?? []"
  />

  <!-- 桌面端：标题可点击跳转分区第一页，右侧箭头负责展开/收起下拉 -->
  <div
    v-else
    ref="el"
    class="NavSectionDropdown"
    :class="{ open, active: isActive }"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <VPLink :href="link" class="button" @click="open = false">
      <span class="text" v-html="text" />
      <button
        type="button"
        class="caret"
        aria-label="展开分区导航"
        :aria-expanded="open"
        @click.stop="open = !open"
      >
        <span class="vpi-chevron-down text-icon" />
      </button>
    </VPLink>

    <div class="menu" :class="{ open }">
      <VPMenu :items="items" />
    </div>
  </div>
</template>

<style scoped>
.NavSectionDropdown {
  position: relative;
}

.NavSectionDropdown .button {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: var(--vp-nav-height);
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.NavSectionDropdown .button:hover .text {
  color: var(--vp-c-brand-1);
}

.NavSectionDropdown.active .text {
  color: var(--vp-c-brand-1);
}

.NavSectionDropdown .text {
  display: flex;
  align-items: center;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.NavSectionDropdown .caret {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2px;
  width: 26px;
  height: 26px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: color 0.25s, background-color 0.25s;
}

.NavSectionDropdown .caret:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-alt);
}

.NavSectionDropdown .text-icon {
  font-size: 14px;
  transition: transform 0.25s;
}

.NavSectionDropdown.open .text-icon {
  transform: rotate(180deg);
}

.NavSectionDropdown .menu {
  position: absolute;
  top: calc(var(--vp-nav-height) / 2 + 20px);
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s, visibility 0.25s;
}

.NavSectionDropdown .menu.open {
  opacity: 1;
  visibility: visible;
}
</style>
