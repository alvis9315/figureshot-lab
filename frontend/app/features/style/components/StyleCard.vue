<template>
  <button
    type="button"
    class="group relative flex flex-col overflow-hidden rounded-xl border text-left transition duration-150 ease-out hover:-translate-y-1"
    :class="selected ? 'border-fs-accent' : 'border-transparent hover:border-fs-muted/30'"
    @click="$emit('select', style.id)"
  >
    <!-- 風格預覽占位:正式版換 PRE-006 種子示意圖
         cinema:漸層 + hover 提亮;bluebottle:深灰純色、hover 變藍(2026-07-12) -->
    <div
      class="aspect-video w-full transition duration-150"
      :class="isLight ? 'bg-[#2f3033] group-hover:bg-fs-accent' : 'group-hover:brightness-110'"
      :style="isLight ? undefined : `background: ${style.gradient}`"
      aria-hidden="true"
    />
    <div class="flex items-center justify-between bg-fs-surface px-3 py-2">
      <span class="text-sm transition" :class="selected ? 'text-fs-text' : 'text-fs-muted group-hover:text-fs-text'">
        {{ $t(`style.name.${style.id}`) }}
      </span>
      <span
        class="rounded-full bg-fs-accent px-1.5 text-xs text-fs-bg transition-opacity duration-150"
        :class="selected ? 'opacity-100' : 'opacity-0'"
        aria-hidden="true"
      >✓</span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DemoStyle } from '../constants/demoStyles'

defineProps<{ style: DemoStyle; selected?: boolean }>()
defineEmits<{ select: [string] }>()

const { theme } = useTheme()
const isLight = computed(() => theme.value === 'bluebottle')
</script>
