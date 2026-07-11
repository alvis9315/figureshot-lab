<template>
  <!-- 藍瓶式全頁搜尋覆蓋層(2026-07-12 擁有者採用):從右往左滑入蓋住整頁,
       上方搜尋框、下方熱門分類 + 推薦靈感;Esc / ✕ 關閉 -->
  <Teleport to="body">
    <Transition name="search-slide">
      <div
        v-if="open"
        class="fixed inset-0 z-50 overflow-y-auto bg-fs-bg"
        role="dialog"
        aria-modal="true"
        :aria-label="$t('search.open')"
      >
        <div class="mx-auto max-w-6xl px-4 py-5">
          <div class="flex items-center gap-4 md:gap-6">
            <span class="hidden font-semibold tracking-wide text-fs-accent md:block">{{ $t('app.name') }}</span>
            <form class="flex-1" @submit.prevent="submit">
              <div class="flex items-center gap-3 rounded-full border-2 border-fs-accent px-5 py-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 shrink-0 text-fs-muted" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
                <input
                  ref="inputEl"
                  v-model="q"
                  type="search"
                  :placeholder="$t('search.placeholder')"
                  class="w-full bg-transparent text-base placeholder:italic placeholder:text-fs-muted/60 focus:outline-none"
                >
              </div>
            </form>
            <button
              type="button"
              class="px-2 py-1 text-2xl text-fs-muted transition hover:text-fs-text"
              :aria-label="$t('common.close')"
              @click="$emit('close')"
            >✕</button>
          </div>

          <div class="mt-10">
            <h3 class="text-lg font-semibold">{{ $t('search.topCategories') }}</h3>
            <div class="mt-4 flex flex-wrap gap-3">
              <NuxtLink
                v-for="s in demoStyles"
                :key="s.id"
                :to="localePath('/generator')"
                class="rounded-md border border-fs-muted/30 px-4 py-2 text-sm text-fs-muted transition hover:border-fs-accent hover:text-fs-text"
                @click="$emit('close')"
              >
                {{ $t(`style.name.${s.id}`) }}
              </NuxtLink>
            </div>
          </div>

          <div class="mt-12 pb-16">
            <h3 class="text-lg font-semibold">{{ $t('search.popular') }}</h3>
            <div class="mt-5 grid gap-5 sm:grid-cols-3">
              <NuxtLink
                v-for="card in popular"
                :key="card.key"
                :to="localePath('/share/demo')"
                class="group"
                @click="$emit('close')"
              >
                <div class="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <BaseMedia
                    class="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    :fallback="`background: hsl(${card.hue} 42% 21%)`"
                  />
                </div>
                <p class="mt-3 text-sm font-medium">{{ $t(`landing.shelf.cards.${card.key}`) }}</p>
                <p class="font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ $t(`style.name.${card.style}`) }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, ref, watch, onBeforeUnmount } from 'vue'
import { demoStyles } from '~/features/style/constants/demoStyles'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const localePath = useLocalePath()
const q = ref('')
const inputEl = ref<HTMLInputElement | null>(null)

const popular = [
  { key: 'c1', style: 'cinematic', hue: 352 },
  { key: 'c2', style: 'street', hue: 212 },
  { key: 'c3', style: 'warmDaily', hue: 36 },
] as const

function submit() {
  const target = q.value ? `/generator?q=${encodeURIComponent(q.value)}` : '/generator'
  emit('close')
  navigateTo(localePath(target))
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

watch(() => props.open, async (v) => {
  if (v) {
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    await nextTick()
    inputEl.value?.focus()
  } else {
    window.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.search-slide-enter-active {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.search-slide-leave-active {
  transition: transform 0.28s ease-in;
}
.search-slide-enter-from,
.search-slide-leave-to {
  transform: translateX(100%);
}
@media (prefers-reduced-motion: reduce) {
  .search-slide-enter-from,
  .search-slide-leave-to {
    transform: none;
    opacity: 0;
  }
}
</style>
