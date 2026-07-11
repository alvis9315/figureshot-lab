<template>
  <div class="flex flex-col gap-6">
    <header class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 class="text-3xl font-semibold">{{ $t('nav.collection') }}</h1>
        <p class="mt-1 text-xs text-fs-muted/70">{{ $t('collection.demoNote') }}</p>
      </div>
      <BaseButton :to="localePath('/collection/new')">＋ {{ $t('collection.add') }}</BaseButton>
    </header>

    <!-- 篩選列:搜尋 + 持有狀態 chips(手機直式堆疊,桌機同列) -->
    <div class="flex flex-col gap-3 md:flex-row md:items-center">
      <input
        v-model="q"
        type="search"
        :placeholder="$t('collection.searchPlaceholder')"
        class="w-full rounded-full border border-fs-muted/25 bg-transparent px-4 py-2 text-sm placeholder:text-fs-muted/60 focus:border-fs-accent focus:outline-none md:max-w-xs"
      >
      <div class="flex flex-wrap gap-2">
        <button v-for="s in statusOptions" :key="s" type="button" @click="statusFilter = s">
          <BaseTag :active="statusFilter === s">{{ $t(`collection.status.${s}`) }}</BaseTag>
        </button>
      </div>
    </div>

    <!-- 收藏 grid:手機 2 欄、平板 3 欄、桌機 4 欄(rwd-guideline) -->
    <div v-if="filtered.length" class="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      <CollectionCard v-for="item in filtered" :key="item.id" :item="item" @open="detail = $event" />
    </div>
    <BaseEmptyState
      v-else
      :title="$t('collection.empty.title')"
      :description="$t('collection.empty.desc')"
      icon="🤖"
    >
      <BaseButton :to="localePath('/collection/new')">{{ $t('collection.empty.cta') }}</BaseButton>
    </BaseEmptyState>

    <!-- 收藏詳情(BaseSheet:手機 bottom sheet / 桌機 modal) -->
    <BaseSheet :open="!!detail" @close="detail = null">
      <div v-if="detail" class="flex flex-col items-center gap-4 pt-2 text-center">
        <div class="h-32 w-32 overflow-hidden rounded-2xl">
          <BaseMedia :fallback="detailFallback" />
        </div>
        <div>
          <h2 class="text-2xl font-semibold">{{ detail.name }}</h2>
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-fs-muted">{{ detail.brand }} · {{ detail.series }}</p>
        </div>
        <dl class="grid w-full grid-cols-3 gap-2 text-sm">
          <div class="rounded-xl bg-fs-bg p-3">
            <dt class="font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ $t('generator.detail.type') }}</dt>
            <dd class="mt-1">{{ $t(`collection.type.${detail.figureType}`) }}</dd>
          </div>
          <div class="rounded-xl bg-fs-bg p-3">
            <dt class="font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ $t('generator.detail.scale') }}</dt>
            <dd class="mt-1">{{ detail.scale }}</dd>
          </div>
          <div class="rounded-xl bg-fs-bg p-3">
            <dt class="font-mono text-[10px] uppercase tracking-wider text-fs-muted">{{ $t('collection.statusLabel') }}</dt>
            <dd class="mt-1">{{ $t(`collection.status.${detail.status}`) }}</dd>
          </div>
        </dl>
        <BaseButton :to="localePath('/generator')" @click="detail = null">{{ $t('collection.sendToGenerator') }}</BaseButton>
        <p class="text-xs text-fs-muted/60">{{ $t('collection.detailNote') }}</p>
      </div>
    </BaseSheet>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CollectionCard from '~/features/collection/components/CollectionCard.vue'
import { demoCollection, type CollectionItem, type OwnershipStatus } from '~/features/collection/constants/demoCollection'

const localePath = useLocalePath()
const { theme } = useTheme()

const q = ref('')
const statusOptions = ['all', 'owned', 'wishlist', 'preorder'] as const
const statusFilter = ref<typeof statusOptions[number]>('all')
const detail = ref<CollectionItem | null>(null)

const filtered = computed(() => {
  const term = q.value.trim().toLowerCase()
  return demoCollection.filter((item) => {
    const statusOk = statusFilter.value === 'all' || item.status === (statusFilter.value as OwnershipStatus)
    const termOk = !term
      || item.name.toLowerCase().includes(term)
      || item.series.toLowerCase().includes(term)
      || item.brand.toLowerCase().includes(term)
    return statusOk && termOk
  })
})

const detailFallback = computed(() =>
  !detail.value
    ? ''
    : theme.value === 'bluebottle'
      ? 'background:#02a8e0'
      : `background: radial-gradient(circle at 35% 30%, hsl(${detail.value.hue} 50% 42%), hsl(${detail.value.hue} 40% 14%))`,
)
</script>
