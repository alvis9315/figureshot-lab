<template>
  <!-- 藍瓶式全頁搜尋覆蓋層 v2(2026-07-12):
       間距對齊藍瓶呼吸感;無輸入=熱門分類+熱門靈感,輸入中=下方即時過濾不跳轉,
       點卡片才進詳細頁;Esc / ✕ 關閉 -->
  <Teleport to="body">
    <Transition name="search-slide">
      <div
        v-if="open"
        class="fixed inset-0 z-50 overflow-y-auto bg-fs-bg"
        role="dialog"
        aria-modal="true"
        :aria-label="$t('search.open')"
      >
        <div class="mx-auto max-w-6xl px-6 md:px-10">
          <div class="flex items-center gap-5 pt-8 md:gap-8">
            <span class="hidden shrink-0 font-semibold tracking-wide text-fs-accent md:block">{{ $t('app.name') }}</span>
            <form class="flex-1" @submit.prevent>
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
              class="shrink-0 px-2 py-1 text-2xl text-fs-muted transition hover:text-fs-text"
              :aria-label="$t('common.close')"
              @click="$emit('close')"
            >✕</button>
          </div>

          <!-- 無輸入:熱門分類 + 熱門靈感 -->
          <template v-if="!searching">
            <div class="mt-16">
              <h3 class="text-xl font-semibold">{{ $t('search.topCategories') }}</h3>
              <div class="mt-5 flex flex-wrap gap-3">
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

            <div class="mt-16 pb-24">
              <h3 class="text-xl font-semibold">{{ $t('search.popular') }}</h3>
              <div class="mt-6 grid gap-6 sm:grid-cols-3">
                <InspirationCard v-for="card in popular" :key="card.key" :card="card" @navigate="$emit('close')" />
              </div>
            </div>
          </template>

          <!-- 輸入中:即時過濾結果,不跳轉 -->
          <div v-else class="mt-16 pb-24">
            <h3 class="text-xl font-semibold">{{ $t('search.results') }}</h3>
            <div v-if="results.length" class="mt-6 grid gap-6 sm:grid-cols-3">
              <InspirationCard v-for="card in results" :key="card.key" :card="card" @navigate="$emit('close')" />
            </div>
            <p v-else class="mt-6 text-fs-muted">{{ $t('search.noResults') }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { demoStyles } from '~/features/style/constants/demoStyles'
import { demoInspirations } from '~/features/landing/constants/demoInspirations'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const localePath = useLocalePath()
const { t } = useI18n()

const q = ref('')
const inputEl = ref<HTMLInputElement | null>(null)

const popular = demoInspirations.slice(0, 3)
const searching = computed(() => q.value.trim().length > 0)

const results = computed(() => {
  const term = q.value.trim().toLowerCase()
  if (!term) return []
  return demoInspirations.filter((c) =>
    t(`landing.shelf.cards.${c.key}`).toLowerCase().includes(term)
    || t(`style.name.${c.style}`).toLowerCase().includes(term),
  )
})

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

watch(() => props.open, async (v) => {
  if (v) {
    q.value = ''
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
