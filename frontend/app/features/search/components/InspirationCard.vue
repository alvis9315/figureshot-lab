<template>
  <!-- 搜尋覆蓋層用靈感卡:白版一律 #02a8e0、深版各色深底;點卡片才跳詳細頁 -->
  <NuxtLink :to="localePath('/share/demo')" class="group" @click="$emit('navigate')">
    <div class="relative aspect-[4/3] overflow-hidden rounded-xl">
      <BaseMedia
        :video="card.video"
        :image="card.image"
        class="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        :fallback="fallback"
      />
    </div>
    <p class="mt-3 text-sm font-medium">{{ $t(`landing.shelf.cards.${card.key}`) }}</p>
    <p class="font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ $t(`style.name.${card.style}`) }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DemoInspiration } from '~/features/landing/constants/demoInspirations'

const props = defineProps<{ card: DemoInspiration }>()
defineEmits<{ navigate: [] }>()

const localePath = useLocalePath()
const { theme } = useTheme()

const fallback = computed(() =>
  theme.value === 'bluebottle'
    ? 'background:#02a8e0'
    : `background: hsl(${props.card.hue} 42% 21%)`,
)
</script>
