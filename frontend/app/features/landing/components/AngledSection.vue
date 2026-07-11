<template>
  <!-- 斜切色帶(guide: hero-team-character-detail 的亮暗帶 + 超大章節標題語彙)
       負 margin 讓斜邊咬進上一區塊,形成 Rivals 式交錯轉場 -->
  <section
    class="relative -mt-12"
    :class="tone === 'light' ? 'text-fs-bg' : 'text-fs-text'"
    :style="`${clipPath}; background: ${tone === 'light' ? 'var(--fs-text)' : 'var(--fs-bg)'}`"
  >
    <div class="mx-auto max-w-6xl px-4 pt-20 md:pt-24">
      <h2
        class="font-display text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl"
        :class="tone === 'light' ? 'text-fs-bg/90' : 'text-fs-text/90'"
      >
        {{ title }}
      </h2>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  tone?: 'light' | 'dark'
  slant?: 'left' | 'right'
}>(), { tone: 'dark', slant: 'right' })

const clipPath = computed(() =>
  props.slant === 'right'
    ? 'clip-path: polygon(0 0, 100% 3rem, 100% 100%, 0 100%)'
    : 'clip-path: polygon(0 3rem, 100% 0, 100% 100%, 0 100%)',
)
</script>
