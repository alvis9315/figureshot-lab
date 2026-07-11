<template>
  <!-- 卡片櫥窗區塊(guide 追加參考:Apple News 雜誌列,2026-07-12):
       版心標題 + BaseShelf 慣性滑動卡列;背景酒紅光暈(光在文字側) -->
  <section class="relative overflow-hidden py-16 md:py-24">
    <div
      class="pointer-events-none absolute inset-0"
      style="background: radial-gradient(ellipse 60% 55% at 25% 30%, hsl(352 58% 42% / 0.18), transparent 70%)"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-6xl px-4">
      <div class="max-w-lg">
        <p class="font-mono text-[11px] uppercase tracking-[0.25em] text-fs-muted">{{ label }}</p>
        <h2 class="mt-3 text-3xl font-semibold md:text-4xl">{{ title }}</h2>
        <p class="mt-3 max-w-md text-fs-muted">{{ description }}</p>
        <div class="mt-5 flex items-center gap-4">
          <BaseButton :to="to">{{ cta }} →</BaseButton>
          <span class="hidden font-mono text-[10px] uppercase tracking-wider text-fs-muted/60 md:inline">{{ $t('landing.shelf.hint') }}</span>
        </div>
      </div>

      <BaseShelf class="mt-8">
        <NuxtLink
          v-for="card in cards"
          :key="card.key"
          :to="to"
          class="group w-52 shrink-0 snap-start md:w-60"
          draggable="false"
        >
          <div
            class="relative aspect-[3/4] overflow-hidden rounded-xl transition duration-150 group-hover:-translate-y-1"
            :style="`background:
              radial-gradient(ellipse 80% 60% at 50% 30%, hsl(${card.hue} 50% 42% / 0.45), transparent 75%),
              linear-gradient(180deg, #1c1a17 0%, #100f0e 100%)`"
          >
            <div class="absolute inset-x-0 bottom-0 p-4">
              <p class="font-mono text-[9px] uppercase tracking-wider text-fs-accent">{{ $t(`style.name.${card.style}`) }}</p>
              <p class="mt-1 text-sm font-medium leading-snug">{{ $t(`landing.shelf.cards.${card.key}`) }}</p>
            </div>
          </div>
        </NuxtLink>
      </BaseShelf>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  title: string
  description: string
  cta: string
  to: string
}>()

const cards = [
  { key: 'c1', style: 'cinematic', hue: 352 },
  { key: 'c2', style: 'street', hue: 212 },
  { key: 'c3', style: 'warmDaily', hue: 36 },
  { key: 'c4', style: 'neoTokyo', hue: 300 },
  { key: 'c5', style: 'warmDaily', hue: 150 },
  { key: 'c6', style: 'street', hue: 20 },
] as const
</script>
