<template>
  <!-- 正式 footer(Apple 式欄目,2026-07-12):品牌 + 連結欄 + 細字版權 -->
  <footer class="border-t border-fs-surface">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:py-16">
      <div>
        <p class="font-semibold tracking-wide text-fs-accent">{{ $t('app.name') }}</p>
        <p class="mt-2 max-w-xs text-sm text-fs-muted">{{ $t('app.footer') }}</p>
      </div>
      <nav :aria-label="$t('footer.product')">
        <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-fs-muted">{{ $t('footer.product') }}</p>
        <ul class="mt-3 flex flex-col gap-2 text-sm">
          <li><NuxtLink :to="localePath('/collection')" class="text-fs-muted hover:text-fs-text">{{ $t('nav.collection') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/generator')" class="text-fs-muted hover:text-fs-text">{{ $t('nav.generator') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/history')" class="text-fs-muted hover:text-fs-text">{{ $t('nav.history') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/share/demo')" class="text-fs-muted hover:text-fs-text">{{ $t('landing.showcase.cta') }}</NuxtLink></li>
        </ul>
      </nav>
      <nav :aria-label="$t('footer.account')">
        <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-fs-muted">{{ $t('footer.account') }}</p>
        <ul class="mt-3 flex flex-col gap-2 text-sm">
          <li><NuxtLink :to="localePath('/login')" class="text-fs-muted hover:text-fs-text">{{ $t('nav.login') }}</NuxtLink></li>
        </ul>
      </nav>
      <div>
        <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-fs-muted">{{ $t('footer.community') }}</p>
        <ul class="mt-3 flex flex-col gap-2 text-sm text-fs-muted/60">
          <li>Instagram</li>
          <li>Threads</li>
          <li>YouTube</li>
        </ul>
        <p class="mt-2 text-xs text-fs-muted/50">{{ $t('footer.soon') }}</p>
      </div>
    </div>
    <div class="border-t border-fs-surface">
      <p class="mx-auto max-w-6xl px-4 py-4 text-xs text-fs-muted/60">{{ $t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
