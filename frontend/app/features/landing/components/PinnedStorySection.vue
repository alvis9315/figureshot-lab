<template>
  <!-- 定格滾動敘事(scroll-pinning,參考 Apple Vision Pro,2026-07-12):
       外層 220vh 滾動區 + sticky 滿版內層;滾動進度驅動文字 translateY——
       畫面釘住、文字穿過畫面,滑出頂部後才放行下一區塊。
       prefers-reduced-motion:文字固定置中不動。 -->
  <section ref="wrap" class="relative" style="height: 220vh">
    <div class="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
      <div
        class="max-w-3xl px-6 text-center will-change-transform"
        :style="reduced ? undefined : `transform: translate3d(0, ${offset}px, 0)`"
      >
        <p class="text-2xl font-semibold leading-snug text-fs-muted md:text-4xl">{{ $t('landing.pinned.l1') }}</p>
        <p class="mt-8 text-3xl font-semibold leading-snug md:text-5xl">{{ $t('landing.pinned.l2') }}</p>
        <p class="mt-8 text-2xl font-semibold leading-snug text-fs-accent md:text-4xl">{{ $t('landing.pinned.l3') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const wrap = ref<HTMLElement | null>(null)
const offset = ref(0)
const reduced = ref(false)
let ticking = false

function update() {
  ticking = false
  const el = wrap.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  // progress 0(區塊剛進場)→ 1(釘住段結束)
  const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - vh)))
  // 文字自下方 70vh 一路穿越到上方 -70vh
  offset.value = (0.5 - progress) * vh * 1.4
}

function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(update)
  }
}

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduced.value) {
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
  }
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
