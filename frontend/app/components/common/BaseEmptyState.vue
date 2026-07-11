<template>
  <!-- 空狀態:圖示 + 標題 + 說明 + CTA slot(對齊 spec 20J Activation 思維) -->
  <div class="flex flex-col items-center gap-3 py-16 text-center">
    <span class="text-4xl" aria-hidden="true">{{ icon }}</span>
    <p class="text-lg font-semibold">{{ title }}</p>
    <p class="max-w-sm text-sm text-fs-muted">{{ description }}</p>
    <div v-if="$slots.default" class="mt-3">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description: string
  icon?: string
}>(), { icon: '📦' })
</script>
