<template>
  <!-- 光暈溢出轉場:上方區塊的「光」灑進暗區頂部,取代生硬的黑白線性漸層
       (2026-07-12 擁有者回饋黑白漸層不自然後改版;貼合攝影打光主題) -->
  <section class="relative bg-fs-bg">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-80"
      style="background: radial-gradient(ellipse 90% 100% at 50% 0%, color-mix(in srgb, var(--fs-text) 9%, transparent), transparent 72%)"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-6xl px-4 pt-24 md:pt-32">
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
