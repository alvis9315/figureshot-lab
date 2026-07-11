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
    <!-- 無框編輯式排版(2026-07-12 擁有者棄用卡片盒):左側 accent 豎線 + 文字直接壓滿版,
         可讀性由打光層 + 底部漸暗層保證 -->
    <div class="relative mx-auto w-full max-w-6xl px-4 pb-16 md:pb-24">
      <div class="max-w-lg border-l-2 border-fs-accent pl-6 md:pl-8">
        <p class="font-mono text-[11px] uppercase tracking-[0.25em] text-fs-muted">{{ label }}</p>
        <h2 class="mt-3 text-3xl font-semibold md:text-5xl">{{ title }}</h2>
        <p class="mt-3 max-w-md text-fs-muted">{{ description }}</p>
        <div class="mt-6">
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
