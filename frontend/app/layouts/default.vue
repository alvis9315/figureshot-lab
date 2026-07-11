<template>
  <div class="flex min-h-screen flex-col">
    <header class="border-b border-fs-surface">
      <nav class="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-3">
        <NuxtLink :to="localePath('/')" class="font-semibold tracking-wide text-fs-accent">
          {{ $t('app.name') }}
        </NuxtLink>
        <div class="ml-auto flex flex-wrap items-center gap-4 text-sm text-fs-muted">
          <NuxtLink :to="localePath('/collection')" class="hover:text-fs-text">{{ $t('nav.collection') }}</NuxtLink>
          <NuxtLink :to="localePath('/wheel')" class="hover:text-fs-text">{{ $t('nav.wheel') }}</NuxtLink>
          <NuxtLink :to="localePath('/history')" class="hover:text-fs-text">{{ $t('nav.history') }}</NuxtLink>
          <NuxtLink :to="localePath('/login')" class="hover:text-fs-text">{{ $t('nav.login') }}</NuxtLink>
          <button
            type="button"
            class="rounded border border-fs-surface px-2 py-1 hover:text-fs-text"
            @click="toggleLocale"
          >
            {{ locale === 'en' ? '中文' : 'EN' }}
          </button>
        </div>
      </nav>
    </header>
    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <slot />
    </main>
    <footer class="border-t border-fs-surface px-4 py-4 text-center text-xs text-fs-muted">
      {{ $t('app.footer') }}
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'zh-TW' : 'en')
}
</script>
