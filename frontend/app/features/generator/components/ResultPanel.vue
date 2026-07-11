<template>
  <section class="panel-up rounded-2xl bg-fs-surface p-6 md:p-8">
    <!-- 結果面板(motion spec 3.7;版面借 gentle-monster-detail-focus 編輯感)-->
    <p class="text-xs uppercase tracking-[0.3em] text-fs-accent">{{ $t('generator.result.kicker') }}</p>
    <h2 class="mt-2 text-2xl font-semibold md:text-3xl">{{ $t('generator.result.demoTitle') }}</h2>

    <div class="mt-4 flex flex-wrap gap-2">
      <BaseTag active>🎬 {{ $t('generator.result.demoScene') }}</BaseTag>
      <BaseTag active>💭 {{ $t('generator.result.demoMood') }}</BaseTag>
      <BaseTag active>🎯 {{ $t('generator.result.demoTask') }}</BaseTag>
    </div>

    <div class="mt-6 grid gap-6 md:grid-cols-2">
      <div>
        <h3 class="mb-2 text-sm font-medium text-fs-muted">{{ $t('generator.result.tips') }}</h3>
        <ul class="flex list-disc flex-col gap-1.5 pl-5 text-sm text-fs-muted">
          <li>{{ $t('generator.result.tip1') }}</li>
          <li>{{ $t('generator.result.tip2') }}</li>
          <li>{{ $t('generator.result.tip3') }}</li>
        </ul>
      </div>
      <div>
        <h3 class="mb-2 text-sm font-medium text-fs-muted">{{ $t('generator.result.caption') }}</h3>
        <p class="rounded-xl bg-fs-bg p-4 text-sm italic text-fs-muted">{{ $t('generator.result.demoCaption') }}</p>
      </div>
    </div>

    <div class="mt-6 flex flex-wrap gap-3">
      <BaseButton disabled>{{ $t('generator.result.save') }}</BaseButton>
      <BaseButton variant="outline" @click="$emit('reroll')">{{ $t('generator.result.reroll') }}</BaseButton>
      <BaseButton variant="ghost" disabled>{{ $t('generator.result.share') }}</BaseButton>
    </div>
    <p class="mt-3 text-xs text-fs-muted/60">{{ $t('generator.result.demoNote') }}</p>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ reroll: [] }>()
</script>
