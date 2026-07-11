<template>
  <!-- 滾動漸入的標準容器:包住任何區塊即獲得 motion spec 2.2 的 reveal -->
  <div
    ref="target"
    class="reveal"
    :class="{ 'reveal-in': revealed }"
    :style="delay ? `transition-delay: ${delay}ms` : undefined"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ delay?: number }>()

const { target, revealed } = useReveal()
</script>
