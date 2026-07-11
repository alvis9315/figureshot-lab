<template>
  <section class="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
    <!-- 主視覺占位:攝影棚燈光漸層;正式模型攝影圖待素材(guide: apple-vision-pro-hero / gentle-monster-home-campaign) -->
    <div
      class="hero-bg-in pointer-events-none absolute inset-0"
      style="background:
        radial-gradient(ellipse 70% 55% at 50% 38%, color-mix(in srgb, var(--fs-accent) 22%, transparent), transparent 70%),
        radial-gradient(ellipse 45% 35% at 50% 42%, color-mix(in srgb, var(--fs-accent) 14%, transparent), transparent 65%);"
    />
    <div class="relative flex flex-col items-center gap-6">
      <p class="rise-in text-sm uppercase tracking-[0.35em] text-fs-muted" style="animation-delay: 0.15s">
        {{ $t('app.name') }}
      </p>
      <h1 class="rise-in max-w-4xl text-4xl font-semibold leading-tight md:text-6xl" style="animation-delay: 0.29s">
        {{ $t('landing.hero.title') }}
      </h1>
      <p class="rise-in max-w-xl text-lg text-fs-muted" style="animation-delay: 0.43s">
        {{ $t('landing.question') }}
      </p>
      <div class="rise-in mt-2 flex flex-col gap-3 sm:flex-row" style="animation-delay: 0.57s">
        <BaseButton :to="localePath('/generator')" size="lg">{{ $t('landing.cta.start') }}</BaseButton>
        <BaseButton :to="localePath('/collection')" size="lg" variant="outline">{{ $t('landing.cta.explore') }}</BaseButton>
      </div>
    </div>
    <div class="scroll-hint absolute bottom-8 text-fs-muted" aria-hidden="true">↓</div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
