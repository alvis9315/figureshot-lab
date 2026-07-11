<template>
  <div class="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 py-12 text-center md:py-20">
    <!-- 分享頁:SSR + OG meta 是選 Nuxt 的核心理由(ADR-0001);版面借 gentle-monster-detail-focus 編輯感 -->
    <p class="font-mono text-xs uppercase tracking-[0.3em] text-fs-accent">{{ $t('share.kicker') }}</p>

    <div
      class="aspect-[4/3] w-full rounded-2xl"
      style="background:
        radial-gradient(ellipse 70% 60% at 50% 40%, color-mix(in srgb, var(--fs-accent) 24%, transparent), transparent 72%),
        linear-gradient(160deg, #17171b 0%, #0d0d0f 100%);"
      aria-hidden="true"
    />

    <div class="flex flex-col gap-3">
      <h1 class="text-3xl font-semibold md:text-4xl">{{ $t('generator.result.demoTitle') }}</h1>
      <div class="flex flex-wrap justify-center gap-2">
        <BaseTag active>🎬 {{ $t('generator.result.demoScene') }}</BaseTag>
        <BaseTag active>💭 {{ $t('generator.result.demoMood') }}</BaseTag>
        <BaseTag active>🎯 {{ $t('generator.result.demoTask') }}</BaseTag>
      </div>
      <p class="mx-auto max-w-md italic text-fs-muted">{{ $t('generator.result.demoCaption') }}</p>
    </div>

    <div class="flex flex-col gap-3 sm:flex-row">
      <BaseButton :to="localePath('/generator')" size="lg">{{ $t('share.cta') }}</BaseButton>
      <BaseButton :to="localePath('/')" size="lg" variant="ghost">{{ $t('share.backHome') }}</BaseButton>
    </div>
    <p class="text-xs text-fs-muted/60">{{ $t('share.demoNote') }}</p>
  </div>
</template>

<script setup lang="ts">
// 靜態展示:route param 先不消費,真實分享 id 待 API 接線(saved_inspirations)
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => `${t('generator.result.demoTitle')} — ${t('app.name')}`,
  description: () => t('generator.result.demoCaption'),
  ogTitle: () => `${t('generator.result.demoTitle')} — ${t('app.name')}`,
  ogDescription: () => t('generator.result.demoCaption'),
  ogType: 'article',
  twitterCard: 'summary_large_image',
})
</script>
