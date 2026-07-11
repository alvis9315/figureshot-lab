<template>
  <!-- Apple 式搜尋面板(元件庫備用,2026-07-12):自頂部往下展開約半屏,
       大搜尋框 + 快速連結;目前未接線,採用的是 SearchOverlay(藍瓶式) -->
  <Teleport to="body">
    <Transition name="panel-fade">
      <div v-if="open" class="fixed inset-0 z-40 bg-black/40" aria-hidden="true" @click="$emit('close')" />
    </Transition>
    <Transition name="panel-drop">
      <div
        v-if="open"
        class="fixed inset-x-0 top-0 z-50 min-h-[50vh] border-b border-fs-surface bg-fs-bg/95 backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
        :aria-label="$t('search.open')"
      >
        <div class="mx-auto max-w-3xl px-6 py-16">
          <form @submit.prevent="submit">
            <div class="flex items-center gap-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-6 w-6 shrink-0 text-fs-muted" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              <input
                ref="inputEl"
                v-model="q"
                type="search"
                :placeholder="$t('search.placeholder')"
                class="w-full bg-transparent text-2xl font-medium placeholder:text-fs-muted/50 focus:outline-none"
              >
            </div>
          </form>
          <p class="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-fs-muted">{{ $t('search.quickLinks') }}</p>
          <ul class="mt-4 flex flex-col gap-3 text-sm">
            <li v-for="link in links" :key="link.to">
              <NuxtLink
                :to="localePath(link.to)"
                class="group flex items-center gap-3 text-fs-muted transition hover:text-fs-text"
                @click="$emit('close')"
              >
                <span class="text-fs-muted/50 transition group-hover:translate-x-0.5 group-hover:text-fs-accent">→</span>
                <span class="font-medium">{{ $t(link.label) }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const localePath = useLocalePath()
const q = ref('')
const inputEl = ref<HTMLInputElement | null>(null)

const links = [
  { to: '/generator', label: 'nav.generator' },
  { to: '/collection', label: 'nav.collection' },
  { to: '/history', label: 'nav.history' },
  { to: '/share/demo', label: 'landing.showcase.cta' },
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
    await nextTick()
    inputEl.value?.focus()
  } else {
    window.removeEventListener('keydown', onKey)
  }
})

onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.panel-drop-enter-active {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.panel-drop-leave-active {
  transition: transform 0.25s ease-in;
}
.panel-drop-enter-from,
.panel-drop-leave-to {
  transform: translateY(-100%);
}
.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.panel-fade-enter-from,
.panel-fade-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .panel-drop-enter-from,
  .panel-drop-leave-to {
    transform: none;
    opacity: 0;
  }
}
</style>
