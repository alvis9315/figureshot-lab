<template>
  <!-- 細緻漸層轉場 v2(2026-07-12 擁有者要求維持漸層、提高細緻度):
       不走灰階直混——沿暖色階多停點下降(米→暖褐→深棕→黑),像光的自然衰減 -->
  <section
    class="relative"
    style="background: linear-gradient(180deg,
      var(--fs-text) 0%,
      #cfc8ba 14%,
      #8f887a 33%,
      #4a4439 54%,
      #201d18 74%,
      var(--fs-bg) 94%)"
  >
    <div class="mx-auto max-w-6xl px-4 pt-56 md:pt-72">
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
