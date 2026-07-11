<template>
  <!-- 滿版資訊卡塊(guide: nothing-light-hero):直角滿版、卡片對齊版心
       背景三層:照片(可選)→ 打光(與卡片同側,光抓焦點)→ 底部漸暗 -->
  <section class="relative flex min-h-[80vh] items-end overflow-hidden">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <img v-if="image" :src="image" alt="" class="absolute inset-0 h-full w-full object-cover">
      <div
        class="absolute inset-0"
        :style="`background:
          radial-gradient(ellipse 65% 55% at 30% 42%, hsl(${h} ${s}% ${l}% / 0.22), transparent 70%),
          linear-gradient(180deg, var(--fs-bg) 0%, transparent 25%, transparent 70%, rgb(13 13 15 / 0.6) 100%)`"
      />
    </div>
    <!-- 卡片與其他區塊共用同一版心(max-w-6xl px-4),排版一致 -->
    <div class="relative mx-auto w-full max-w-6xl px-4 pb-14 md:pb-20">
      <div class="w-full max-w-sm rounded-xl bg-fs-bg/85 p-6 backdrop-blur-sm">
        <p class="font-mono text-[11px] uppercase tracking-[0.25em] text-fs-muted">{{ label }}</p>
        <h2 class="mt-2 text-2xl font-semibold md:text-3xl">{{ title }}</h2>
        <p class="mt-2 text-sm text-fs-muted">{{ description }}</p>
        <div class="mt-4">
          <BaseButton :to="to">{{ cta }} →</BaseButton>
        </div>
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
  h?: number
  s?: number
  l?: number
  image?: string
}>(), { h: 352, s: 58, l: 42 })
</script>
