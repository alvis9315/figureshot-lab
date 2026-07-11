<template>
  <section class="flex flex-col gap-5 rounded-2xl bg-fs-surface/50 p-4 md:p-6">
    <div>
      <h2 class="font-mono text-xs uppercase tracking-[0.25em] text-fs-muted">{{ $t('style.sectionTitle') }}</h2>
      <!-- 圖片導向風格選擇(guide: leica-looks-gallery,不做純文字下拉) -->
      <div class="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
        <StyleCard
          v-for="s in demoStyles"
          :key="s.id"
          :style="s"
          :selected="modelValue.style === s.id"
          @select="update('style', $event)"
        />
      </div>
    </div>

    <div v-for="group in groups" :key="group.key">
      <h3 class="font-mono text-xs uppercase tracking-[0.25em] text-fs-muted">{{ $t(`style.${group.key}Label`) }}</h3>
      <div class="mt-2 flex flex-wrap gap-2">
        <button
          v-for="opt in group.options"
          :key="opt"
          type="button"
          @click="update(group.key, opt)"
        >
          <BaseTag :active="modelValue[group.key] === opt">{{ $t(`style.${group.key}.${opt}`) }}</BaseTag>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import StyleCard from './StyleCard.vue'
import { demoStyles, demoScenes, demoMoods, demoTasks } from '../constants/demoStyles'

export interface StyleSelection {
  style: string | null
  scene: string | null
  mood: string | null
  task: string | null
}

const props = defineProps<{ modelValue: StyleSelection }>()
const emit = defineEmits<{ 'update:modelValue': [StyleSelection] }>()

const groups = [
  { key: 'scene' as const, options: demoScenes },
  { key: 'mood' as const, options: demoMoods },
  { key: 'task' as const, options: demoTasks },
]

function update(key: keyof StyleSelection, value: string) {
  emit('update:modelValue', {
    ...props.modelValue,
    [key]: props.modelValue[key] === value ? null : value,
  })
}
</script>
