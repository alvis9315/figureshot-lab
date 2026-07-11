<template>
  <!-- 卡片櫥窗區塊 v3:size 變體(sm=直幅小卡 / lg=Apple 式大卡+圖下說明,2026-07-12)
       卡片媒體走 BaseMedia:填 video/image 即換素材,video 附播放鈕 -->
  <section class="relative overflow-hidden py-16 pb-28 md:py-24 md:pb-36">
    <!-- 標題區置中(擁有者校正 2026-07-12);CTA 置中、拖曳提示移至按鈕下方 -->
    <div class="mx-auto flex max-w-2xl flex-col items-center px-4 text-center">
      <!-- pl 補償 letter-spacing 尾端空隙,置中才不偏左(2026-07-12) -->
      <p class="pl-[0.25em] font-mono text-[11px] uppercase tracking-[0.25em] text-fs-muted">{{ label }}</p>
      <h2 class="mt-3 text-3xl font-semibold md:text-4xl">{{ title }}</h2>
      <p class="mt-3 max-w-md text-fs-muted">{{ description }}</p>
      <div class="mt-6">
        <BaseButton :to="to" size="lg">{{ cta }} →</BaseButton>
      </div>
      <p class="mt-3 pl-[0.05em] font-mono text-[10px] uppercase tracking-wider text-fs-muted/60">{{ $t('landing.shelf.hint') }}</p>
    </div>

    <!-- 全寬書架:loop 讓卡片左右無邊界連續流動 -->
    <BaseShelf class="mt-8 w-full">
      <NuxtLink
        v-for="(card, i) in loopedCards"
        :key="`${card.key}-${i}`"
        :to="to"
        class="group shrink-0"
        :class="size === 'lg' ? 'ml-5 w-[82vw] sm:w-[34rem] lg:w-[46rem]' : 'ml-4 w-52 md:w-60'"
        draggable="false"
      >
        <template v-if="size === 'lg'">
          <div class="relative aspect-video overflow-hidden rounded-2xl">
            <BaseMedia
              :video="card.video"
              :image="card.image"
              class="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              :fallback="cardFallback(card.hue, 0.4)"
            />
          </div>
          <p class="mt-3 max-w-lg px-1 text-sm text-fs-muted">
            <span class="font-medium text-fs-text">{{ $t(`landing.shelf.cards.${card.key}`) }}</span>
            · {{ $t(`style.name.${card.style}`) }}
          </p>
        </template>
        <template v-else>
          <div
            class="relative aspect-[3/4] overflow-hidden rounded-xl transition duration-150 group-hover:-translate-y-1"
          >
            <BaseMedia
              :video="card.video"
              :image="card.image"
              :fallback="cardFallback(card.hue, 0.45)"
            />
            <div class="absolute inset-x-0 bottom-0 p-4">
              <p class="font-mono text-[9px] uppercase tracking-wider text-fs-accent">{{ $t(`style.name.${card.style}`) }}</p>
              <p class="mt-1 text-sm font-medium leading-snug">{{ $t(`landing.shelf.cards.${card.key}`) }}</p>
            </div>
          </div>
        </template>
      </NuxtLink>
    </BaseShelf>
  </section>
</template>

<script setup lang="ts">
import { demoInspirations } from '../constants/demoInspirations'

withDefaults(defineProps<{
  label: string
  title: string
  description: string
  cta: string
  to: string
  size?: 'sm' | 'lg'
}>(), { size: 'sm' })

// 卡片資料與 SearchOverlay 共用(features/landing/constants/demoInspirations)
const cards = demoInspirations

// 複製一輪確保寬螢幕下卡片數足以無縫 loop
const loopedCards = [...cards, ...cards]

// 卡片底:cinema=各色相光暈;bluebottle=金屬藍光 + 同款深底(擁有者 2026-07-12)
const { theme } = useTheme()

function cardFallback(hue: number, alpha: number) {
  const glow = theme.value === 'bluebottle' ? `rgb(2 168 224 / ${alpha + 0.05})` : `hsl(${hue} 50% 42% / ${alpha})`
  return `background:
    radial-gradient(ellipse 80% 60% at 50% 30%, ${glow}, transparent 75%),
    linear-gradient(180deg, #1c1a17 0%, #100f0e 100%)`
}
</script>
