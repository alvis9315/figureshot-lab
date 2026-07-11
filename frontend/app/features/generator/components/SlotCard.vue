<template>
  <div
    class="relative flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 rounded-2xl border transition duration-200"
    :class="figure ? 'border-fs-accent/60 bg-fs-surface' : 'border-dashed border-fs-muted/30 bg-fs-surface/40'"
  >
    <template v-if="figure">
      <!-- key 觸發 crossfade + scale-in(motion spec 3.3/3.4) -->
      <Transition name="slot-swap" mode="out-in">
        <div :key="figure.id" class="flex flex-col items-center gap-3">
          <div
            class="flex h-24 w-24 items-center justify-center rounded-full text-4xl md:h-32 md:w-32"
            :style="`background: radial-gradient(circle at 35% 30%, hsl(${figure.hue} 50% 42%), hsl(${figure.hue} 40% 14%))`"
            aria-hidden="true"
          >
            <span class="opacity-75">🤖</span>
          </div>
          <div class="text-center">
            <p class="font-medium">{{ figure.name }}</p>
            <p class="text-xs text-fs-muted">{{ figure.series }}</p>
          </div>
        </div>
      </Transition>
      <button
        type="button"
        class="absolute right-3 top-3 rounded-full border px-2 py-1 text-xs transition duration-150"
        :class="[locked ? 'border-fs-accent text-fs-accent' : 'border-fs-muted/40 text-fs-muted hover:text-fs-text', pulsing ? 'lock-pulse' : '']"
        :aria-pressed="locked"
        @click="onLock"
      >
        {{ locked ? '🔒' : '🔓' }} {{ $t('generator.lock') }}
      </button>
    </template>
    <template v-else>
      <span class="text-3xl text-fs-muted/50" aria-hidden="true">＋</span>
      <span class="text-xs text-fs-muted">{{ label }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DemoFigure } from '../constants/demoFigures'

defineProps<{ figure: DemoFigure | null; locked: boolean; label: string }>()
const emit = defineEmits<{ toggleLock: [] }>()

const pulsing = ref(false)

function onLock() {
  pulsing.value = true
  setTimeout(() => (pulsing.value = false), 200)
  emit('toggleLock')
}
</script>

<style scoped>
.slot-swap-enter-active,
.slot-swap-leave-active {
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}
.slot-swap-enter-from {
  opacity: 0;
  transform: scale(0.96);
}
.slot-swap-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .slot-swap-enter-from {
    transform: none;
  }
}
</style>
