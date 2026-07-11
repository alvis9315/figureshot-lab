<template>
  <!-- 一大圖帶下排小圖(Apple Fitness+ 版式)
       cinema:深色純色 + 黑漸層字幕條;bluebottle:#02a8e0 素色、無漸層、白標題灰內文(2026-07-12) -->
  <div class="mx-auto max-w-6xl px-4 py-10 md:py-12">
    <div class="group relative overflow-hidden rounded-2xl">
      <BaseMedia
        class="h-[40vh] w-full transition-transform duration-300 ease-out group-hover:scale-[1.02] md:h-[48vh]"
        :fallback="isLight ? 'background:#02a8e0' : 'background: hsl(30 38% 16%)'"
      />
      <div class="absolute inset-x-0 bottom-0 p-6 md:p-8" :class="isLight ? '' : 'bg-gradient-to-t from-black/70 to-transparent'">
        <p class="font-mono text-[11px] uppercase tracking-[0.25em]" :class="isLight ? 'text-white/85' : 'text-fs-accent'">{{ $t('landing.media.featured') }}</p>
        <p class="mt-1 text-xl font-semibold md:text-2xl" :class="isLight ? 'text-white' : ''">{{ $t('generator.result.demoTitle') }}</p>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
      <div v-for="thumb in thumbs" :key="thumb.scene" class="group relative overflow-hidden rounded-xl">
        <BaseMedia
          class="aspect-video w-full transition-transform duration-300 ease-out group-hover:scale-[1.05]"
          :fallback="isLight ? 'background:#02a8e0' : `background: hsl(${thumb.hue} 42% 21%)`"
        />
        <div class="absolute inset-x-0 bottom-0 p-3" :class="isLight ? '' : 'bg-gradient-to-t from-black/70 to-transparent'">
          <p class="text-sm font-medium" :class="isLight ? 'text-white' : ''">{{ $t(`style.scene.${thumb.scene}`) }}</p>
          <p class="font-mono text-[10px] uppercase tracking-wider" :class="isLight ? 'text-[#dfe3e6]' : 'text-fs-muted'">{{ $t(`style.mood.${thumb.mood}`) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { theme } = useTheme()
const isLight = computed(() => theme.value === 'bluebottle')

const thumbs = [
  { scene: 'rooftop', mood: 'deadpan', hue: 212 },
  { scene: 'store', mood: 'awkward', hue: 36 },
  { scene: 'beach', mood: 'heartwarming', hue: 190 },
  { scene: 'ruins', mood: 'epic', hue: 352 },
] as const
</script>
