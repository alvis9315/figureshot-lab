<template>
  <section
    class="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-4 text-center"
    aria-roledescription="carousel"
    @mouseenter="pause"
    @mouseleave="resume"
  >
    <!-- 滿版破題輪播(guide: apple-vision-pro-hero + gentle-monster-home-campaign)
         主視覺為漸層占位,正式模型攝影圖待 PRE-004/005 素材 -->
    <Transition name="hero-fade">
      <div
        :key="current"
        class="pointer-events-none absolute inset-0"
        :style="`background:
          radial-gradient(ellipse 70% 55% at 50% 38%, hsl(${slides[current]!.hue} 60% 45% / 0.22), transparent 70%),
          radial-gradient(ellipse 45% 35% at 50% 42%, hsl(${slides[current]!.hue} 65% 55% / 0.14), transparent 65%)`"
        aria-hidden="true"
      />
    </Transition>

    <div class="relative flex max-w-4xl flex-col items-center gap-6">
      <Transition name="hero-fade" mode="out-in">
        <div :key="current" class="flex min-h-56 flex-col items-center justify-center gap-5 md:min-h-64">
          <p class="font-mono text-xs uppercase tracking-[0.35em] text-fs-accent">
            {{ $t(slides[current]!.kicker) }}
          </p>
          <h1 class="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            {{ $t(slides[current]!.title) }}
          </h1>
          <p class="max-w-xl text-lg text-fs-muted">{{ $t(slides[current]!.sub) }}</p>
        </div>
      </Transition>

      <div class="flex flex-col gap-3 sm:flex-row">
        <BaseButton :to="localePath('/generator')" size="lg">{{ $t('landing.cta.start') }}</BaseButton>
        <BaseButton :to="localePath('/collection')" size="lg" variant="outline">{{ $t('landing.cta.explore') }}</BaseButton>
      </div>

      <div class="mt-2 flex items-center gap-3">
        <button
          type="button"
          class="px-2 text-fs-muted transition hover:text-fs-text"
          :aria-label="$t('landing.carousel.prev')"
          @click="go(current - 1)"
        >‹</button>
        <button
          v-for="(s, i) in slides"
          :key="s.kicker"
          type="button"
          class="h-1.5 rounded-full transition-all duration-300"
          :class="i === current ? 'w-6 bg-fs-accent' : 'w-1.5 bg-fs-muted/40 hover:bg-fs-muted'"
          :aria-label="$t('landing.carousel.goto', { n: i + 1 })"
          :aria-current="i === current"
          @click="go(i)"
        />
        <button
          type="button"
          class="px-2 text-fs-muted transition hover:text-fs-text"
          :aria-label="$t('landing.carousel.next')"
          @click="go(current + 1)"
        >›</button>
      </div>
    </div>

    <div class="scroll-hint absolute bottom-8 text-fs-muted" aria-hidden="true">↓</div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const localePath = useLocalePath()

// 張數可再討論;先以三張破題:品牌 → 組隊配對 → 生成故事
const slides = [
  { hue: 36, kicker: 'app.tagline', title: 'landing.hero.title', sub: 'landing.question' },
  { hue: 210, kicker: 'landing.slides.s2.kicker', title: 'landing.slides.s2.title', sub: 'landing.slides.s2.sub' },
  { hue: 320, kicker: 'landing.slides.s3.kicker', title: 'landing.slides.s3.title', sub: 'landing.slides.s3.sub' },
] as const

const AUTOPLAY_MS = 5000
const current = ref(0)
let timer: ReturnType<typeof setInterval> | null = null
let paused = false

function go(i: number) {
  current.value = (i + slides.length) % slides.length
  restart()
}

function tick() {
  if (!paused) current.value = (current.value + 1) % slides.length
}

function start() {
  // 尊重 prefers-reduced-motion:不自動播放,仍可手動切換
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(tick, AUTOPLAY_MS)
}

function restart() {
  if (timer) clearInterval(timer)
  timer = null
  start()
}

function pause() {
  paused = true
}

function resume() {
  paused = false
}

onMounted(start)
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.hero-fade-enter-active {
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.hero-fade-leave-active {
  transition: opacity 0.45s ease-in;
}
.hero-fade-enter-from {
  opacity: 0;
  transform: scale(1.02);
}
.hero-fade-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .hero-fade-enter-from {
    transform: none;
  }
}
</style>
