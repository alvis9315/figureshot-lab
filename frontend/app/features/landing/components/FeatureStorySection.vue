<template>
  <!-- 漸入由頁面層的 RevealSection 包覆;tone 配合 AngledSection 亮暗帶 -->
  <!-- max-w-6xl 與章節大標題同版心,左緣對齊(擁有者校正 2026-07-12) -->
  <section
    class="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24"
    :class="flip ? 'md:[&>div:first-child]:order-2' : ''"
  >
    <!-- 視覺占位:待模型攝影素材;白版由 CSS 改 #02a8e0 純色(story-visual) -->
    <div
      class="story-visual aspect-[4/3] rounded-2xl"
      :class="tone === 'light' ? 'bg-fs-bg/10' : 'bg-fs-surface'"
      :style="`background-image: radial-gradient(ellipse 80% 70% at 50% 45%, color-mix(in srgb, var(--fs-accent) ${accentStrength}%, transparent), transparent 75%)`"
      aria-hidden="true"
    />
    <div class="flex flex-col gap-4">
      <p class="font-mono text-sm uppercase tracking-[0.3em] text-fs-accent">{{ kicker }}</p>
      <h3 class="text-3xl font-semibold md:text-4xl" :class="tone === 'light' ? 'text-fs-bg' : ''">{{ title }}</h3>
      <p class="max-w-md" :class="tone === 'light' ? 'text-fs-bg/65' : 'text-fs-muted'">{{ description }}</p>
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
  tone?: 'light' | 'dark'
}>(), { flip: false, accentStrength: 10, tone: 'dark' })
</script>
