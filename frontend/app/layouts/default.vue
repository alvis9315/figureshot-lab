<template>
  <div class="flex min-h-screen flex-col">
    <!-- 固定半透明頂部列(與 landing 同款,2026-07-12) -->
    <header class="sticky top-0 z-40 border-b border-fs-text/5 bg-fs-bg/70 backdrop-blur-md">
      <nav class="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-2.5">
        <NuxtLink :to="localePath('/')" class="font-semibold tracking-wide text-fs-accent">
          {{ $t('app.name') }}
        </NuxtLink>
        <div class="ml-auto flex flex-wrap items-center gap-4 text-sm text-fs-muted">
          <NuxtLink :to="localePath('/collection')" class="hover:text-fs-text">{{ $t('nav.collection') }}</NuxtLink>
          <NuxtLink :to="localePath('/generator')" class="hover:text-fs-text">{{ $t('nav.generator') }}</NuxtLink>
          <NuxtLink :to="localePath('/history')" class="hover:text-fs-text">{{ $t('nav.history') }}</NuxtLink>
          <NuxtLink :to="localePath('/login')" class="hover:text-fs-text">{{ $t('nav.login') }}</NuxtLink>
          <button
            type="button"
            class="rounded border border-fs-surface px-2 py-0.5 hover:text-fs-text"
            @click="toggleLocale"
          >
            {{ locale === 'en' ? '中文' : 'EN' }}
          </button>
          <button
            type="button"
            class="flex h-6 w-6 items-center justify-center rounded-full border border-fs-surface transition hover:border-fs-muted"
            :aria-label="$t('common.themeToggle')"
            @click="toggle"
          >
            <span
              class="h-3.5 w-3.5 rounded-full"
              :style="theme === 'cinema' ? 'background:#2149c1' : 'background:#e8a33d'"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
    </header>
    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const { theme, toggle } = useTheme()

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'zh-TW' : 'en')
}
</script>
