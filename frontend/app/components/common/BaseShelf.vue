<template>
  <!-- 水平慣性滑動櫥窗(momentum scrolling):滑鼠可拖曳、放手帶速度滑出並阻尼減速,
       觸控裝置用原生慣性;snap-proximity 讓卡片緩緩對位 -->
  <div
    ref="el"
    class="flex snap-x snap-proximity gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    :class="dragging ? 'cursor-grabbing' : 'cursor-grab'"
    style="touch-action: pan-y"
    @pointerdown="onDown"
    @pointermove="onMove"
    @pointerup="onUp"
    @pointercancel="onUp"
    @pointerleave="onUp"
    @click.capture="suppressClick"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

const el = ref<HTMLElement | null>(null)
const dragging = ref(false)

let startX = 0
let startScroll = 0
let lastX = 0
let lastT = 0
let velocity = 0
let moved = false
let raf = 0

function onDown(e: PointerEvent) {
  if (!el.value || e.pointerType !== 'mouse') return
  cancelAnimationFrame(raf)
  dragging.value = true
  moved = false
  startX = lastX = e.clientX
  startScroll = el.value.scrollLeft
  lastT = performance.now()
  velocity = 0
}

function onMove(e: PointerEvent) {
  if (!dragging.value || !el.value) return
  const dx = e.clientX - startX
  if (Math.abs(dx) > 5) moved = true
  el.value.scrollLeft = startScroll - dx
  const now = performance.now()
  const dt = now - lastT
  if (dt > 0) velocity = (lastX - e.clientX) / dt
  lastX = e.clientX
  lastT = now
}

function onUp() {
  if (!dragging.value) return
  dragging.value = false
  // 慣性:以放手速度滑出,每幀 4.5% 阻尼衰減至停
  let v = velocity * 16
  const glide = () => {
    if (!el.value || Math.abs(v) < 0.4) return
    el.value.scrollLeft += v
    v *= 0.955
    raf = requestAnimationFrame(glide)
  }
  raf = requestAnimationFrame(glide)
}

function suppressClick(e: MouseEvent) {
  if (moved) {
    e.stopPropagation()
    e.preventDefault()
    moved = false
  }
}

onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>
