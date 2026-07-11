<template>
  <!-- 滿版資訊卡塊(guide: nothing-light-hero 的滿版塊 + 浮動資訊卡語彙)
       背景三層:照片(可選)→ 打光 → 卡片側漸暗;素材未到位前用光效漸層 -->
  <section class="relative -mt-12 flex min-h-[80vh] items-end overflow-hidden" style="clip-path: polygon(0 3rem, 100% 0, 100% 100%, 0 100%)">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <img v-if="image" :src="image" alt="" class="absolute inset-0 h-full w-full object-cover">
      <div
        class="absolute inset-0"
        :style="`background:
          radial-gradient(ellipse 70% 60% at 62% 38%, hsl(${hue} 55% 45% / 0.20), transparent 70%),
          linear-gradient(180deg, var(--fs-bg) 0%, transparent 30%, transparent 70%, rgb(13 13 15 / 0.6) 100%)`"
      />
    </div>
    <div class="relative m-6 w-full max-w-sm rounded-xl bg-fs-bg/85 p-6 backdrop-blur-sm md:m-14">
      <p class="font-mono text-[11px] uppercase tracking-[0.25em] text-fs-muted">{{ label }}</p>
      <h2 class="mt-2 text-2xl font-semibold md:text-3xl">{{ title }}</h2>
      <p class="mt-2 text-sm text-fs-muted">{{ description }}</p>
      <div class="mt-4">
        <BaseButton :to="to">{{ cta }} →</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  title: string
  description: string
  cta: string
  to: string
  hue?: number
  image?: string
}>(), { hue: 190 })
</script>
