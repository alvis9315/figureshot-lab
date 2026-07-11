<template>
  <button
    type="button"
    class="fs-skew-card group relative p-[2px] text-left transition duration-150 ease-out hover:-translate-y-1"
    :class="selected ? 'bg-fs-accent' : 'bg-fs-muted/15 hover:bg-fs-muted/40'"
    @click="$emit('select', figure)"
  >
    <span class="fs-skew-card flex w-full flex-col overflow-hidden bg-fs-surface">
      <!-- 立繪占位:正式版換收藏照片(hero-team-select-modern 的角色帶語彙) -->
      <span
        class="relative flex aspect-[3/4] w-full items-end justify-center"
        :style="`background: linear-gradient(180deg, hsl(${figure.hue} 42% 30%) 0%, hsl(${figure.hue} 45% 12%) 100%)`"
        aria-hidden="true"
      >
        <span class="pb-2 text-4xl opacity-80 transition duration-150 group-hover:scale-110 md:text-5xl">🤖</span>
        <span
          class="absolute left-1.5 top-1.5 rounded-full px-1 text-xs text-fs-text/40 transition duration-150 hover:!text-fs-accent group-hover:text-fs-text/80"
          role="button"
          :aria-label="$t('generator.detail.open')"
          @click.stop="$emit('detail', figure)"
        >ⓘ</span>
      </span>
      <!-- Rivals 式名牌條:亮底深字 -->
      <span class="block px-2 py-1.5" :style="`background: ${selected ? 'var(--fs-accent)' : 'var(--fs-text)'}`">
        <span class="block truncate font-mono text-[10px] font-semibold uppercase tracking-widest text-fs-bg">
          {{ figure.name }}
        </span>
      </span>
    </span>
    <span
      v-if="selected"
      class="absolute right-2 top-2 h-2 w-2 bg-fs-accent"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
import type { DemoFigure } from '../constants/demoFigures'

defineProps<{ figure: DemoFigure; selected?: boolean }>()
defineEmits<{ select: [DemoFigure]; detail: [DemoFigure] }>()
</script>
