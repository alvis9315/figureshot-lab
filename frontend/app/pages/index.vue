<template>
  <section class="flex flex-col items-center gap-6 py-16 text-center md:py-28">
    <p class="text-sm uppercase tracking-[0.3em] text-fs-muted">{{ $t('app.tagline') }}</p>
    <h1 class="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
      {{ $t('landing.question') }}
    </h1>
    <p class="max-w-xl text-fs-muted">{{ $t('landing.subtitle') }}</p>
    <NuxtLink
      :to="localePath('/wheel')"
      class="rounded-full bg-fs-accent px-8 py-3 font-medium text-fs-bg transition hover:opacity-90"
    >
      {{ $t('landing.cta') }}
    </NuxtLink>
    <!-- TODO(功能期): Showcase 大圖輪播,素材待 PRE-004 Moodboard 定稿 -->
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

useSeoMeta({
  title: () => t('app.name'),
  description: () => t('landing.subtitle'),
  ogTitle: () => t('app.name'),
  ogDescription: () => t('landing.subtitle'),
})
</script>
