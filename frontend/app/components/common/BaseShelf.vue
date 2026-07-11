<template>
  <!-- 水平慣性櫥窗 v2:Embla(loop 無限循環 + dragFree 自由拖曳)——
       甩越大力滑越快、摩擦力漸降至停(iPhone 相簿手感,2026-07-12 擁有者指定) -->
  <div
    ref="emblaRef"
    class="overflow-hidden"
    :class="dragging ? 'cursor-grabbing' : 'cursor-grab'"
  >
    <div class="flex select-none" style="touch-action: pan-y">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: true,
  dragFree: true,
  align: 'start',
  skipSnaps: true,
})

const dragging = ref(false)

onMounted(() => {
  const api = emblaApi.value
  if (!api) return
  api.on('pointerDown', () => (dragging.value = true))
  api.on('pointerUp', () => (dragging.value = false))
})
</script>
