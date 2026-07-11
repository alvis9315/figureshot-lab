<template>
  <BaseSheet :open="!!figure" @close="$emit('close')">
    <!-- 角色詳情(guide: hero-team-character-detail;切換 crossfade,手機為 bottom sheet)-->
    <Transition name="detail-swap" mode="out-in">
      <div v-if="figure" :key="figure.id" class="flex flex-col items-center gap-4 pt-2 text-center">
        <div
          class="flex h-36 w-36 items-center justify-center rounded-full text-6xl"
          :style="`background: radial-gradient(circle at 35% 30%, hsl(${figure.hue} 50% 45%), hsl(${figure.hue} 40% 12%))`"
          aria-hidden="true"
        >
          <span class="opacity-75">🤖</span>
        </div>
        <div>
          <h2 class="text-2xl font-semibold">{{ figure.name }}</h2>
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-fs-muted">{{ figure.series }}</p>
        </div>
        <dl class="grid w-full grid-cols-3 gap-2 text-sm">
          <div class="rounded-xl bg-fs-bg p-3">
            <dt class="font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ $t('generator.detail.brand') }}</dt>
            <dd class="mt-1">—</dd>
          </div>
          <div class="rounded-xl bg-fs-bg p-3">
            <dt class="font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ $t('generator.detail.scale') }}</dt>
            <dd class="mt-1">1/12</dd>
          </div>
          <div class="rounded-xl bg-fs-bg p-3">
            <dt class="font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ $t('generator.detail.type') }}</dt>
            <dd class="mt-1">{{ $t('generator.detail.demoType') }}</dd>
          </div>
        </dl>
        <div class="flex flex-wrap justify-center gap-2">
          <BaseTag active>#{{ $t('generator.filter.hero') }}</BaseTag>
          <BaseTag>#{{ $t('generator.filter.daily') }}</BaseTag>
        </div>
        <BaseButton @click="$emit('pick', figure)">{{ $t('generator.detail.addToSlot') }}</BaseButton>
        <p class="text-xs text-fs-muted/60">{{ $t('generator.detail.demoNote') }}</p>
      </div>
    </Transition>
  </BaseSheet>
</template>

<script setup lang="ts">
import type { DemoFigure } from '../constants/demoFigures'

defineProps<{ figure: DemoFigure | null }>()
defineEmits<{ close: []; pick: [DemoFigure] }>()
</script>

<style scoped>
.detail-swap-enter-active,
.detail-swap-leave-active {
  transition: opacity 0.2s ease-out;
}
.detail-swap-enter-from,
.detail-swap-leave-to {
  opacity: 0;
}
</style>
