<template>
  <div class="w-full max-w-sm rounded-lg bg-fs-surface p-8 text-center">
    <h1 class="mb-2 text-2xl font-semibold">{{ $t('nav.login') }}</h1>
    <p class="text-sm text-fs-muted">{{ $t('common.placeholder') }}</p>
    <!-- TODO(P1 auth):登入/註冊表單,見 docs/api-spec.md Auth 段 -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'empty' })
</script>
