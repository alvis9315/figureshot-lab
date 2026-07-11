<template>
  <button
    type="button"
    class="group relative flex flex-col items-center gap-2 rounded-xl border bg-fs-surface p-3 transition duration-150 ease-out hover:-translate-y-1 hover:scale-[1.02]"
    :class="selected ? 'border-fs-accent' : 'border-transparent hover:border-fs-muted/30'"
    @click="$emit('select', figure)"
  >
    <!-- 剪影占位:正式版換收藏照片 -->
    <div
      class="flex h-16 w-16 items-center justify-center rounded-full text-2xl md:h-20 md:w-20"
      :style="`background: radial-gradient(circle at 35% 30%, hsl(${figure.hue} 45% 38%), hsl(${figure.hue} 40% 16%))`"
      aria-hidden="true"
    >
      <span class="opacity-70">🤖</span>
    </div>
    <span class="max-w-full truncate text-xs" :class="selected ? 'text-fs-accent' : 'text-fs-muted group-hover:text-fs-text'">
      {{ figure.name }}
    </span>
    <span
      class="absolute right-2 top-2 rounded-full bg-fs-accent px-1.5 text-xs text-fs-bg transition-opacity duration-150"
      :class="selected ? 'opacity-100' : 'opacity-0'"
      aria-hidden="true"
    >✓</span>
  </button>
</template>

<script setup lang="ts">
import type { DemoFigure } from '../constants/demoFigures'

defineProps<{ figure: DemoFigure; selected?: boolean }>()
defineEmits<{ select: [DemoFigure] }>()
</script>
