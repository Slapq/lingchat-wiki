<template>
  <section class="home-modules mx-auto max-w-6xl px-4 py-8">
    <div class="text-center mb-10 pt-8">
      <h2 class="text-3xl font-black tracking-tight text-[var(--vp-c-text-1)] sm:text-4xl mb-3">
        全景文档与生态指南
      </h2>
      <p class="text-base text-[var(--vp-c-text-2)] max-w-2xl mx-auto">
        无论是快速部署上手、为心爱的 OC 绘制立绘，还是探索底层异步消息架构与贡献开源代码。
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <article class="home-module-card p-6 rounded-3xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-soft)] flex flex-col justify-between hover:border-[var(--vp-c-brand-1)] transition-all duration-300 hover:shadow-xl group">
        <div>
          <div class="module-icon sky-icon">🎮</div>
          <h3 class="text-lg font-bold text-[var(--vp-c-text-1)] mb-2">玩家与使用者手册</h3>
          <p class="text-xs text-[var(--vp-c-text-2)] leading-relaxed mb-4">支持 Windows、Android 手机端、Linux 与 macOS，配置主流大模型 API 与本地 VITS，畅享声画同步的沉浸陪伴。</p>
        </div>
        <a href="/guide/quick-start" class="module-link">查看快速上手指引 <span aria-hidden="true">→</span></a>
      </article>

      <article class="home-module-card p-6 rounded-3xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-soft)] flex flex-col justify-between hover:border-[var(--vp-c-brand-1)] transition-all duration-300 hover:shadow-xl group">
        <div>
          <div class="module-icon purple-icon">🎨</div>
          <h3 class="text-lg font-bold text-[var(--vp-c-text-1)] mb-2">创作者工坊与剧本指南</h3>
          <p class="text-xs text-[var(--vp-c-text-2)] leading-relaxed mb-4">制作 20 差分表情角色卡、设置身体触摸互动反馈，用可视化编辑器编写多分支 Galgame 剧本并发布到创意工坊。</p>
        </div>
        <a href="/creator/character-creation" class="module-link">进入创作者工坊 <span aria-hidden="true">→</span></a>
      </article>

      <article class="home-module-card p-6 rounded-3xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-soft)] flex flex-col justify-between hover:border-[var(--vp-c-brand-1)] transition-all duration-300 hover:shadow-xl group">
        <div>
          <div class="module-icon emerald-icon">🛠️</div>
          <h3 class="text-lg font-bold text-[var(--vp-c-text-1)] mb-2">架构设计与开源贡献</h3>
          <p class="text-xs text-[var(--vp-c-text-2)] leading-relaxed mb-4">深入了解 Python 异步消费者流水线、Tauri 高性能内核、台词树构建器算法设计，参与领取星辉奖励 (CSP)。</p>
        </div>
        <a href="/design/backend-architecture" class="module-link">查阅系统架构规范 <span aria-hidden="true">→</span></a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.home-modules {
  width: 100%;
}

.home-module-card {
  min-width: 0;
}

.module-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  transition: transform 0.25s ease;
}

.home-module-card:hover .module-icon {
  transform: scale(1.1);
}

.sky-icon { color: #38bdf8; background: rgba(14, 165, 233, 0.1); border-color: rgba(14, 165, 233, 0.2); }
.purple-icon { color: #c084fc; background: rgba(168, 85, 247, 0.1); border-color: rgba(168, 85, 247, 0.2); }
.emerald-icon { color: #34d399; background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.2); }

.module-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--vp-c-brand-1);
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
}

.module-link:hover { text-decoration: underline; }
</style>
