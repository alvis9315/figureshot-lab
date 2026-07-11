<template>
  <!-- 圖/影媒體格:video 時附圓形播放/暫停鈕(Apple 式,2026-07-12);
       無素材時吃 fallback 漸層占位 -->
  <div class="relative h-full w-full overflow-hidden">
    <video
      v-if="video"
      ref="vid"
      :src="video"
      :poster="poster"
      loop
      muted
      playsinline
      preload="metadata"
      class="h-full w-full object-cover"
    />
    <img v-else-if="image" :src="image" alt="" draggable="false" class="h-full w-full object-cover">
    <div v-else class="h-full w-full" :style="fallback" aria-hidden="true" />

    <button
      v-if="video"
      type="button"
      class="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-fs-text/30 bg-fs-bg/50 text-sm text-fs-text/80 backdrop-blur-sm transition duration-150 hover:text-fs-text"
      :aria-label="playing ? $t('common.pause') : $t('common.play')"
      @click.stop.prevent="toggle"
    >
      <span aria-hidden="true">{{ playing ? '❚❚' : '▶' }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  video?: string
  image?: string
  poster?: string
  fallback?: string
}>()

const vid = ref<HTMLVideoElement | null>(null)
const playing = ref(false)

function toggle() {
  const v = vid.value
  if (!v) return
  if (v.paused) {
    v.play()
    playing.value = true
  } else {
    v.pause()
    playing.value = false
  }
}
</script>
