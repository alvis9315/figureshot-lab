<template>
  <!-- 收藏卡:照片優先 + 名稱/廠牌/系列 + 持有狀態 badge(guide RWD:桌機 grid、手機單欄) -->
  <button type="button" class="group text-left" @click="$emit('open', item)">
    <div class="relative aspect-[4/5] overflow-hidden rounded-xl">
      <BaseMedia
        :image="item.image"
        class="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        :fallback="fallback"
      />
      <span
        class="absolute right-2 top-2 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
        :class="statusClass"
      >
        {{ $t(`collection.status.${item.status}`) }}
      </span>
    </div>
    <p class="mt-3 text-sm font-medium">{{ item.name }}</p>
    <p class="text-xs text-fs-muted">{{ item.brand }} · {{ item.series }}</p>
    <p class="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-fs-muted/70">
      {{ $t(`collection.type.${item.figureType}`) }} · {{ item.scale }}
    </p>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CollectionItem } from '../constants/demoCollection'

const props = defineProps<{ item: CollectionItem }>()
defineEmits<{ open: [CollectionItem] }>()

const { theme } = useTheme()

const fallback = computed(() =>
  theme.value === 'bluebottle'
    ? 'background:#e2e1dc'
    : `background: linear-gradient(180deg, hsl(${props.item.hue} 42% 30%) 0%, hsl(${props.item.hue} 45% 12%) 100%)`,
)

const statusClass = computed(() => ({
  owned: 'bg-fs-accent text-fs-bg',
  wishlist: 'bg-fs-bg/70 text-fs-text backdrop-blur-sm',
  preorder: 'bg-fs-surface text-fs-muted',
}[props.item.status]))
</script>
