<template>
  <!-- 一大圖帶下排小圖(Apple Fitness+ 版式)
       純色底不加打光(擁有者 2026-07-12:之後放圖片/影片);高度收斂讓整段一屏完整呈現 -->
  <div class="mx-auto max-w-6xl px-4 py-10 md:py-12">
    <div class="group relative overflow-hidden rounded-2xl">
      <BaseMedia
        class="h-[40vh] w-full transition-transform duration-300 ease-out group-hover:scale-[1.02] md:h-[48vh]"
        fallback="background: hsl(30 38% 16%)"
      />
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
        <p class="font-mono text-[11px] uppercase tracking-[0.25em] text-fs-accent">{{ $t('landing.media.featured') }}</p>
        <p class="mt-1 text-xl font-semibold md:text-2xl">{{ $t('generator.result.demoTitle') }}</p>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
      <div v-for="thumb in thumbs" :key="thumb.scene" class="group relative overflow-hidden rounded-xl">
        <BaseMedia
          class="aspect-video w-full transition-transform duration-300 ease-out group-hover:scale-[1.05]"
          :fallback="`background: hsl(${thumb.hue} 42% 21%)`"
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
