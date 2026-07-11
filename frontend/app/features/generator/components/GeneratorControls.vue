<template>
  <div class="flex flex-col gap-3 rounded-2xl bg-fs-surface p-4">
    <!-- 控制模組區(guide: teenage-engineering-ep-controls) -->
    <div class="flex flex-col gap-3 md:flex-row md:items-center">
      <input
        :value="search"
        type="search"
        :placeholder="$t('generator.searchPlaceholder')"
        class="w-full rounded-full border border-fs-muted/25 bg-fs-bg px-4 py-2 text-sm placeholder:text-fs-muted/60 focus:border-fs-accent focus:outline-none md:max-w-xs"
        @input="$emit('update:search', ($event.target as HTMLInputElement).value)"
      >
      <div class="flex flex-wrap gap-2">
        <button v-for="f in filters" :key="f" type="button" @click="$emit('toggleFilter', f)">
          <BaseTag :active="activeFilters.includes(f)">{{ $t(`generator.filter.${f}`) }}</BaseTag>
        </button>
      </div>
      <div class="flex gap-2 md:ml-auto">
        <BaseButton variant="outline" @click="$emit('randomize')">🎲 {{ $t('generator.randomize') }}</BaseButton>
        <BaseButton :disabled="!canGenerate" @click="$emit('generate')">{{ $t('generator.generate') }}</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  search: string
  activeFilters: string[]
  canGenerate: boolean
}>()
defineEmits<{
  'update:search': [string]
  toggleFilter: [string]
  randomize: []
  generate: []
}>()

const filters = ['hero', 'mecha', 'cute', 'daily']
</script>
