<template>
  <div class="flex flex-col gap-6">
    <header>
      <h1 class="text-3xl font-semibold">{{ $t('nav.history') }}</h1>
      <p class="mt-1 text-xs text-fs-muted/70">{{ $t('history.demoNote') }}</p>
    </header>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="(card, i) in demoInspirations" :key="card.key">
        <InspirationCard :card="card" />
        <p class="mt-1 font-mono text-[10px] uppercase tracking-wider text-fs-muted/60">
          {{ $t('history.savedOn') }} 2026-07-{{ String(12 - i).padStart(2, '0') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { demoInspirations } from '~/features/landing/constants/demoInspirations'
</script>
