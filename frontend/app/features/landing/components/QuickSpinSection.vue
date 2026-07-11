<template>
  <!-- 輪盤快抽:點擊 → 轉輪 1.7s → 「配對成功!」→ 跳轉 /generator?spin=1 自動帶結果
       (擁有者體驗設計 2026-07-12);reduced-motion 直接跳轉 -->
  <section class="mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center gap-8 px-4 py-24 text-center">
    <div class="relative h-52 w-52 md:h-64 md:w-64" aria-hidden="true">
      <div
        class="absolute inset-0 rounded-full opacity-80 transition-transform duration-[1700ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        :style="{ transform: `rotate(${rotation}deg)` }"
        style="background: conic-gradient(from 0deg,
          color-mix(in srgb, var(--fs-accent) 55%, transparent) 0 45deg, var(--fs-surface) 45deg 90deg,
          color-mix(in srgb, var(--fs-accent) 30%, transparent) 90deg 135deg, var(--fs-surface) 135deg 180deg,
          color-mix(in srgb, var(--fs-accent) 55%, transparent) 180deg 225deg, var(--fs-surface) 225deg 270deg,
          color-mix(in srgb, var(--fs-accent) 30%, transparent) 270deg 315deg, var(--fs-surface) 315deg 360deg);"
      />
      <div class="absolute inset-[18%] flex items-center justify-center rounded-full bg-fs-bg text-3xl">🎯</div>
    </div>

    <Transition name="spin-swap" mode="out-in">
      <div v-if="phase !== 'done'" key="idle" class="flex flex-col items-center gap-3">
        <h2 class="text-3xl font-semibold md:text-4xl">{{ $t('landing.spin.title') }}</h2>
        <p class="max-w-md text-fs-muted">{{ $t('landing.spin.subtitle') }}</p>
        <div class="mt-3">
          <BaseButton size="lg" :disabled="phase === 'spinning'" @click="start">
            {{ $t('landing.spin.cta') }}
          </BaseButton>
        </div>
      </div>
      <div v-else key="done" class="flex flex-col items-center gap-3">
        <h2 class="text-4xl font-semibold text-fs-accent md:text-5xl">{{ $t('landing.spin.success') }}</h2>
        <p class="text-lg text-fs-muted">{{ $t('landing.spin.go') }}</p>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

const localePath = useLocalePath()

const phase = ref<'idle' | 'spinning' | 'done'>('idle')
const rotation = ref(0)
const timers: ReturnType<typeof setTimeout>[] = []

function start() {
  if (phase.value !== 'idle') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    navigateTo(localePath('/generator?spin=1'))
    return
  }
  phase.value = 'spinning'
  rotation.value = 1440 + Math.floor(Math.random() * 360)
  timers.push(setTimeout(() => {
    phase.value = 'done'
    timers.push(setTimeout(() => navigateTo(localePath('/generator?spin=1')), 1200))
  }, 1750))
}

onBeforeUnmount(() => timers.forEach(clearTimeout))
</script>

<style scoped>
.spin-swap-enter-active,
.spin-swap-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}
.spin-swap-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.spin-swap-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .spin-swap-enter-from {
    transform: none;
  }
}
</style>
