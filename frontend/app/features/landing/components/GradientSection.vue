<template>
  <!-- 細緻漸層轉場 v3(2026-07-12 擁有者校色:暖褐顯髒 → 改白→金屬銀→黑冷色階) -->
  <section
    class="relative"
    style="background: linear-gradient(180deg,
      var(--fs-text) 0%,
      #dcdddc 14%,
      #a9acae 33%,
      #5f6366 54%,
      #26282a 74%,
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
