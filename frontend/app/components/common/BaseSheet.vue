<template>
  <Teleport to="body">
    <Transition name="sheet">
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-end justify-center md:items-center"
        @click.self="$emit('close')"
      >
        <div class="absolute inset-0 bg-black/60" aria-hidden="true" @click="$emit('close')" />
        <div
          class="sheet-panel relative max-h-[85vh] w-full overflow-y-auto rounded-t-2xl bg-fs-surface p-6 md:max-w-lg md:rounded-2xl"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            class="absolute right-4 top-4 rounded-full px-2 py-1 text-fs-muted transition hover:text-fs-text"
            :aria-label="$t('common.close')"
            @click="$emit('close')"
          >✕</button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>()
defineEmits<{ close: [] }>()
</script>

<style scoped>
.sheet-enter-active,
.sheet-leave-active {
  transition: opacity 0.2s ease-out;
}
.sheet-enter-active .sheet-panel,
.sheet-leave-active .sheet-panel {
  transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease-out;
}
.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
}
.sheet-enter-from .sheet-panel,
.sheet-leave-to .sheet-panel {
  transform: translateY(24px);
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .sheet-enter-from .sheet-panel,
  .sheet-leave-to .sheet-panel {
    transform: none;
  }
}
</style>
