<template>
  <!-- 細緻漸層轉場 v4(2026-07-12:更銀=更亮更冷的中段;尾段多停點平滑入黑,消除交界突兀) -->
  <section
    class="relative"
    style="background: linear-gradient(180deg,
      var(--fs-text) 0%,
      #e6e9ec 10%,
      #c9ced4 24%,
      #aab0b7 38%,
      #82888e 52%,
      #575c61 66%,
      #33373a 78%,
      #1d1f21 88%,
      #131415 95%,
      var(--fs-bg) 100%)"
  >
    <div class="mx-auto max-w-6xl px-4 pt-40 md:pt-52">
      <h2 class="font-display text-4xl font-bold uppercase leading-none tracking-tight text-fs-text/90 md:text-6xl">
        {{ title }}
      </h2>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>
