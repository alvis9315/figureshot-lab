<template>
  <!-- 漸入由頁面層的 RevealSection 包覆(動畫模組化,2026-07-12) -->
  <section
    class="mx-auto grid max-w-5xl items-center gap-8 px-4 py-20 md:grid-cols-2 md:py-28"
    :class="flip ? 'md:[&>div:first-child]:order-2' : ''"
  >
    <!-- 視覺占位:待模型攝影素材(guide: apple-feature-entertainment 段落節奏) -->
    <div
      class="aspect-[4/3] rounded-2xl bg-fs-surface"
      :style="`background-image: radial-gradient(ellipse 80% 70% at 50% 45%, color-mix(in srgb, var(--fs-accent) ${accentStrength}%, transparent), transparent 75%)`"
      aria-hidden="true"
    />
    <div class="flex flex-col gap-4">
      <p class="font-mono text-sm uppercase tracking-[0.3em] text-fs-accent">{{ kicker }}</p>
      <h2 class="text-3xl font-semibold md:text-4xl">{{ title }}</h2>
      <p class="max-w-md text-fs-muted">{{ description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  kicker: string
  title: string
  description: string
  flip?: boolean
  accentStrength?: number
}>(), { flip: false, accentStrength: 10 })
</script>
