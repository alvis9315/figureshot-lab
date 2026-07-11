<template>
  <!-- 一大圖帶下排小圖(Apple Fitness+ 版式)
       文字一律壓在圖內左下 + hover 微放大(擁有者校正 2026-07-12) -->
  <div class="mx-auto max-w-6xl px-4 py-14 md:py-20">
    <div class="group relative overflow-hidden rounded-2xl">
      <!-- 大圖占位:待模型攝影素材;hover 內層放大,容器裁切 -->
      <div
        class="aspect-[16/9] w-full transition-transform duration-300 ease-out group-hover:scale-[1.03] md:aspect-[21/9]"
        style="background:
          radial-gradient(ellipse 60% 70% at 28% 45%, hsl(36 60% 45% / 0.30), transparent 70%),
          linear-gradient(180deg, #201d18 0%, #14120e 100%)"
        aria-hidden="true"
      />
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
        <p class="font-mono text-[11px] uppercase tracking-[0.25em] text-fs-accent">{{ $t('landing.media.featured') }}</p>
        <p class="mt-1 text-xl font-semibold md:text-2xl">{{ $t('generator.result.demoTitle') }}</p>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
      <div v-for="thumb in thumbs" :key="thumb.scene" class="group relative overflow-hidden rounded-xl">
        <div
          class="aspect-video w-full transition-transform duration-300 ease-out group-hover:scale-[1.05]"
          :style="`background:
            radial-gradient(ellipse 70% 80% at 50% 55%, hsl(${thumb.hue} 45% 40% / 0.35), transparent 75%),
            linear-gradient(180deg, #1b1916 0%, #121110 100%)`"
          aria-hidden="true"
        />
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <p class="text-sm font-medium">{{ $t(`style.scene.${thumb.scene}`) }}</p>
          <p class="font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ $t(`style.mood.${thumb.mood}`) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const thumbs = [
  { scene: 'rooftop', mood: 'deadpan', hue: 212 },
  { scene: 'store', mood: 'awkward', hue: 36 },
  { scene: 'beach', mood: 'heartwarming', hue: 190 },
  { scene: 'ruins', mood: 'epic', hue: 352 },
] as const
</script>
