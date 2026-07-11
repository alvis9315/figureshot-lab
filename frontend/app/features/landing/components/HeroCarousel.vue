<template>
  <!-- min-h-screen:第一屏不露出下方斜切區塊,往下滑才有驚喜(擁有者要求) -->
  <section
    class="relative min-h-screen overflow-hidden"
    aria-roledescription="carousel"
    @mouseenter="pause"
    @mouseleave="resume"
  >
    <!-- 三層背景:①照片(待擁有者攝影作品/設計圖)②打光效果(保留,光源偏向文字對側)③文字側漸暗 -->
    <Transition name="hero-fade">
      <div :key="current" class="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          v-if="slide.image"
          :src="slide.image"
          alt=""
          class="absolute inset-0 h-full w-full object-cover"
        >
        <div class="absolute inset-0" :style="lightingStyle" />
        <div class="absolute inset-0" :style="shadeStyle" />
      </div>
    </Transition>

    <!-- 內容:每張各自的對齊(左/右/中)與獨立 CTA -->
    <div class="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 md:px-20">
      <Transition name="hero-fade" mode="out-in">
        <div :key="current" class="flex w-full flex-col gap-5" :class="alignClasses">
          <p class="font-mono text-xs uppercase tracking-[0.35em] text-fs-accent">{{ $t(slide.kicker) }}</p>
          <h1 class="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">{{ $t(slide.title) }}</h1>
          <p class="max-w-xl text-lg text-fs-muted">{{ $t(slide.sub) }}</p>
          <div class="mt-2">
            <BaseButton :to="localePath(slide.to)" size="lg">{{ $t(slide.cta) }} →</BaseButton>
          </div>
        </div>
      </Transition>
    </div>

    <!-- 左右側箭頭:無外框大字雪佛蘭,粗體高可見(擁有者校正 2026-07-12) -->
    <button
      type="button"
      class="absolute left-2 top-1/2 z-10 -translate-y-1/2 px-3 py-2 font-display text-4xl font-bold text-fs-text/70 transition duration-150 hover:text-fs-text md:left-5 md:text-5xl"
      :aria-label="$t('landing.carousel.prev')"
      @click="go(current - 1)"
    >‹</button>
    <button
      type="button"
      class="absolute right-2 top-1/2 z-10 -translate-y-1/2 px-3 py-2 font-display text-4xl font-bold text-fs-text/70 transition duration-150 hover:text-fs-text md:right-5 md:text-5xl"
      :aria-label="$t('landing.carousel.next')"
      @click="go(current + 1)"
    >›</button>

    <!-- 圓點 -->
    <div class="absolute inset-x-0 bottom-16 flex items-center justify-center gap-2">
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
    </div>

    <div class="scroll-hint absolute inset-x-0 bottom-6 text-center text-fs-muted" aria-hidden="true">↓</div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const localePath = useLocalePath()

type SlideAlign = 'left' | 'right' | 'center'

interface Slide {
  h: number
  s: number
  l: number
  align: SlideAlign
  kicker: string
  title: string
  sub: string
  cta: string
  to: string
  image?: string
}

// 順序:藍光第一(擁有者指定);色彩=超級英雄紅藍黃(灰藍提亮 / 暖黃 / 英雄酒紅,2026-07-12 校色)
// 對齊 左→右→中;image 待攝影作品/設計圖(PRE-004/005 素材)
const slides: Slide[] = [
  { h: 212, s: 38, l: 56, align: 'left', kicker: 'app.tagline', title: 'landing.hero.title', sub: 'landing.question', cta: 'landing.cta.start', to: '/generator' },
  { h: 36, s: 60, l: 45, align: 'right', kicker: 'landing.slides.s2.kicker', title: 'landing.slides.s2.title', sub: 'landing.slides.s2.sub', cta: 'landing.slides.s2.cta', to: '/collection' },
  { h: 352, s: 58, l: 42, align: 'center', kicker: 'landing.slides.s3.kicker', title: 'landing.slides.s3.title', sub: 'landing.slides.s3.sub', cta: 'landing.slides.s3.cta', to: '/share/demo' },
]

const AUTOPLAY_MS = 5000
const current = ref(0)
const slide = computed(() => slides[current.value]!)

const alignClasses = computed(() => ({
  left: 'items-start text-left',
  right: 'items-end text-right',
  center: 'items-center text-center',
}[slide.value.align]))

// 打光層:光源與文字**同側**——光抓住焦點,焦點就是文字(擁有者校正 2026-07-12)
const lightingStyle = computed(() => {
  const x = { left: 32, right: 68, center: 50 }[slide.value.align]
  const { h, s, l } = slide.value
  return `background:
    radial-gradient(ellipse 70% 55% at ${x}% 40%, hsl(${h} ${s}% ${l}% / 0.26), transparent 70%),
    radial-gradient(ellipse 45% 35% at ${x}% 44%, hsl(${h} ${s}% ${Math.min(l + 12, 70)}% / 0.16), transparent 65%)`
})

// 可讀性層:壓在文字側;用 --fs-bg 調製,深色主題壓暗、淺色主題壓亮,雙配色皆可讀
const shadeStyle = computed(() => ({
  left: 'background: linear-gradient(90deg, color-mix(in srgb, var(--fs-bg) 72%, transparent) 0%, color-mix(in srgb, var(--fs-bg) 25%, transparent) 40%, transparent 65%)',
  right: 'background: linear-gradient(270deg, color-mix(in srgb, var(--fs-bg) 72%, transparent) 0%, color-mix(in srgb, var(--fs-bg) 25%, transparent) 40%, transparent 65%)',
  center: 'background: linear-gradient(180deg, transparent 35%, color-mix(in srgb, var(--fs-bg) 66%, transparent) 100%)',
}[slide.value.align]))

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
