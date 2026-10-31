// 让 `tsc --noEmit` 能识别 .vue 单文件组件。
// 组件内部由 vite/vue 编译器处理，类型检查范围为 .vitepress 下的 .ts 源码。
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}
