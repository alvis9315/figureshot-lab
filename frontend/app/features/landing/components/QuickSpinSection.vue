<template>
  <!-- 漸入由頁面層的 RevealSection 包覆;min-h + 置中讓本段自成完整一屏,
       與上方書架說明文字隔開(擁有者回饋 2026-07-12) -->
  <section class="mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center gap-8 px-4 py-24 text-center">
    <!-- 輪盤意象:擁有者決策(2026-07-12)——輪盤放首頁作快速抽選入口,核心工具是 /generator -->
    <div class="relative h-52 w-52 md:h-64 md:w-64" aria-hidden="true">
      <div
        class="absolute inset-0 rounded-full opacity-80 transition-transform duration-700 ease-out"
        :class="{ 'rotate-[540deg]': spun }"
        style="background: conic-gradient(from 0deg,
          color-mix(in srgb, var(--fs-accent) 55%, transparent) 0 45deg, var(--fs-surface) 45deg 90deg,
          color-mix(in srgb, var(--fs-accent) 30%, transparent) 90deg 135deg, var(--fs-surface) 135deg 180deg,
          color-mix(in srgb, var(--fs-accent) 55%, transparent) 180deg 225deg, var(--fs-surface) 225deg 270deg,
          color-mix(in srgb, var(--fs-accent) 30%, transparent) 270deg 315deg, var(--fs-surface) 315deg 360deg);"
      />
      <div class="absolute inset-[18%] flex items-center justify-center rounded-full bg-fs-bg text-3xl">🎯</div>
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="text-3xl font-semibold md:text-4xl">{{ $t('landing.spin.title') }}</h2>
      <p class="max-w-md text-fs-muted">{{ $t('landing.spin.subtitle') }}</p>
    </div>
    <BaseButton :to="localePath('/generator')" size="lg" @mouseenter="spun = true">
      {{ $t('landing.spin.cta') }}
    </BaseButton>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const localePath = useLocalePath()
const spun = ref(false)
</script>
