<template>
  <!-- 斜切色帶(guide: hero-team-character-detail 語彙)
       不與上一區塊重疊——切邊完整落在第一屏之下(擁有者校正 2026-07-12);
       closeBottom 時底邊也斜切,整條色帶成平行四邊形 -->
  <section
    class="relative"
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
    <div :class="closeBottom ? 'pb-16' : ''">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  tone?: 'light' | 'dark'
  slant?: 'left' | 'right'
  closeBottom?: boolean
}>(), { tone: 'dark', slant: 'right', closeBottom: false })

const clipPath = computed(() => {
  const top = props.slant === 'right' ? '0 0, 100% 3rem' : '0 3rem, 100% 0'
  const bottom = props.closeBottom
    ? (props.slant === 'right' ? '100% 100%, 0 calc(100% - 3rem)' : '100% calc(100% - 3rem), 0 100%')
    : '100% 100%, 0 100%'
  return `clip-path: polygon(${top}, ${bottom})`
})
</script>
