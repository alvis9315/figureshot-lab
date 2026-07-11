<template>
  <!-- 轉場區塊(主題分支,2026-07-12 擁有者定版):
       cinema=細緻銀階漸層;bluebottle=不用漸層——與上方色帶平行的斜切,之後一路白底 -->
  <section class="relative" :class="isLight ? '-mt-12' : ''" :style="bgStyle">
    <div class="mx-auto max-w-6xl px-4 pt-40 md:pt-52">
      <h2 class="font-display text-4xl font-bold uppercase leading-none tracking-tight text-fs-text/90 md:text-6xl">
        {{ title }}
      </h2>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps<{ title: string }>()

const { theme } = useTheme()
const isLight = computed(() => theme.value === 'bluebottle')

const bgStyle = computed(() =>
  isLight.value
    ? 'clip-path: polygon(0 0, 100% 3rem, 100% 100%, 0 100%); background: var(--fs-bg)'
    : `background: linear-gradient(180deg,
        var(--fs-text) 0%,
        #e6e9ec 10%,
        #c9ced4 24%,
        #aab0b7 38%,
        #82888e 52%,
        #575c61 66%,
        #33373a 78%,
        #1d1f21 88%,
        #131415 95%,
        var(--fs-bg) 100%)`,
)
</script>
