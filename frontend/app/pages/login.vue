<template>
  <div class="w-full max-w-sm rounded-2xl bg-fs-surface p-8">
    <h1 class="text-2xl font-semibold">{{ $t('nav.login') }}</h1>
    <p class="mt-1 text-xs text-fs-muted/70">{{ $t('login.demoNote') }}</p>

    <form class="mt-6 flex flex-col gap-4" @submit.prevent>
      <label class="flex flex-col gap-1.5">
        <span class="text-sm font-medium">{{ $t('login.email') }}</span>
        <input type="email" autocomplete="email" :class="inputClass">
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="text-sm font-medium">{{ $t('login.password') }}</span>
        <input type="password" autocomplete="current-password" :class="inputClass">
      </label>
      <BaseButton type="submit" disabled class="mt-2 w-full">{{ $t('login.submit') }}</BaseButton>
    </form>

    <p class="mt-5 text-center text-xs text-fs-muted">
      {{ $t('login.noAccount') }}
      <span class="text-fs-accent/70">{{ $t('login.register') }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'empty' })

const inputClass = 'w-full rounded-lg border border-fs-muted/30 bg-fs-bg px-4 py-2.5 text-sm focus:border-fs-accent focus:outline-none'
</script>
