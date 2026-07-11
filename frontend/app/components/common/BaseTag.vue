<template>
  <span
    class="inline-flex items-center rounded-full border px-3 py-1 text-xs tracking-wide transition duration-150"
    :class="active
      ? 'border-fs-accent bg-fs-accent/10 text-fs-accent'
      : 'border-fs-muted/30 text-fs-muted hover:border-fs-muted/60 hover:text-fs-text'"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps<{ active?: boolean }>()
</script>
