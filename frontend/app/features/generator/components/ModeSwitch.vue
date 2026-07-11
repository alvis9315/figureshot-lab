<template>
  <div class="flex gap-1.5" role="tablist">
    <button
      v-for="m in modes"
      :key="m"
      type="button"
      role="tab"
      :aria-selected="modelValue === m"
      class="fs-plate px-5 py-2 font-mono text-xs font-semibold uppercase tracking-widest transition duration-150"
      :class="modelValue === m
        ? 'bg-fs-accent text-fs-bg'
        : 'bg-fs-surface text-fs-muted hover:bg-fs-surface/70 hover:text-fs-text'"
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
