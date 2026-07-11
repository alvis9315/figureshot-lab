<template>
  <!-- 漸層轉場區塊:與上一區塊的色調以漸層相接(擁有者提議的「連接處做漸層」手法) -->
  <section
    class="relative"
    :style="`background: linear-gradient(180deg, ${fromColor} 0%, var(--fs-bg) 240px)`"
  >
    <div class="mx-auto max-w-6xl px-4 pt-44 md:pt-52">
      <h2 class="font-display text-4xl font-bold uppercase leading-none tracking-tight text-fs-text/90 md:text-6xl">
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
  fromTone?: 'light' | 'dark'
}>(), { fromTone: 'light' })

const fromColor = computed(() => (props.fromTone === 'light' ? 'var(--fs-text)' : 'var(--fs-surface)'))
</script>
