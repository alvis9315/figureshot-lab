<template>
  <div class="inline-flex rounded-full border border-fs-muted/25 bg-fs-surface p-1" role="tablist">
    <button
      v-for="m in modes"
      :key="m"
      type="button"
      role="tab"
      :aria-selected="modelValue === m"
      class="rounded-full px-4 py-1.5 text-sm transition duration-150"
      :class="modelValue === m ? 'bg-fs-accent text-fs-bg' : 'text-fs-muted hover:text-fs-text'"
      @click="$emit('update:modelValue', m)"
    >
      {{ $t(`generator.mode.${m}`) }}
    </button>
  </div>
</template>

<script setup lang="ts">
export type GeneratorMode = 'pair' | 'squad' | 'crossover'

defineProps<{ modelValue: GeneratorMode }>()
defineEmits<{ 'update:modelValue': [GeneratorMode] }>()

const modes: GeneratorMode[] = ['pair', 'squad', 'crossover']
</script>
