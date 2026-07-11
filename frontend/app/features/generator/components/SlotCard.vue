<template>
  <div
    class="fs-skew-card p-[2px] transition duration-200"
    :class="figure ? 'bg-fs-accent/70' : 'bg-fs-muted/20'"
  >
    <div
      class="fs-skew-card relative flex aspect-[3/4] w-full flex-col items-center justify-center gap-3"
      :class="figure ? 'bg-fs-surface' : 'bg-fs-surface/40'"
    >
      <template v-if="figure">
        <!-- key 觸發 crossfade + scale-in(motion spec 3.3/3.4) -->
        <Transition name="slot-swap" mode="out-in">
          <div :key="figure.id" class="flex w-full flex-col items-center gap-3">
            <div
              class="flex h-24 w-24 items-center justify-center rounded-full text-4xl md:h-32 md:w-32"
              :style="`background: radial-gradient(circle at 35% 30%, hsl(${figure.hue} 50% 42%), hsl(${figure.hue} 40% 14%))`"
              aria-hidden="true"
            >
              <span class="opacity-75">🤖</span>
            </div>
            <div class="fs-plate mx-auto w-4/5 px-2 py-1 text-center" style="background: var(--fs-text)">
              <p class="truncate font-mono text-[11px] font-semibold uppercase tracking-widest text-fs-bg">{{ figure.name }}</p>
            </div>
            <p class="font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ figure.series }}</p>
          </div>
        </Transition>
        <button
          type="button"
          class="fs-plate absolute right-2 top-2 border px-2 py-1 font-mono text-[10px] uppercase tracking-wider transition duration-150"
          :class="[locked ? 'border-fs-accent bg-fs-accent/15 text-fs-accent' : 'border-fs-muted/40 text-fs-muted hover:text-fs-text', pulsing ? 'lock-pulse' : '']"
          :aria-pressed="locked"
          @click="onLock"
        >
          {{ locked ? '🔒' : '🔓' }} {{ $t('generator.lock') }}
        </button>
      </template>
      <template v-else>
        <span class="text-3xl text-fs-muted/50" aria-hidden="true">＋</span>
        <span class="px-4 text-center font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ label }}</span>
      </template>
    </div>
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
