<template>
  <!-- 新增模型表單(靜態版:欄位對齊 docs/data-model.md figures 表;送出待 API 接線) -->
  <div class="mx-auto max-w-2xl">
    <h1 class="text-3xl font-semibold">{{ $t('collection.form.title') }}</h1>
    <p class="mt-1 text-xs text-fs-muted/70">{{ $t('collection.form.demoNote') }}</p>

    <form class="mt-8 flex flex-col gap-5" @submit.prevent>
      <label class="flex flex-col gap-1.5">
        <span class="text-sm font-medium">{{ $t('collection.form.name') }} <span class="text-fs-accent">*</span></span>
        <input v-model="form.name" type="text" :class="inputClass" required>
      </label>

      <div class="grid gap-5 sm:grid-cols-2">
        <label class="flex flex-col gap-1.5">
          <span class="text-sm font-medium">{{ $t('collection.form.brand') }}</span>
          <input v-model="form.brand" type="text" :class="inputClass">
        </label>
        <label class="flex flex-col gap-1.5">
          <span class="text-sm font-medium">{{ $t('collection.form.series') }}</span>
          <input v-model="form.series" type="text" :class="inputClass">
        </label>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <label class="flex flex-col gap-1.5">
          <span class="text-sm font-medium">{{ $t('collection.form.character') }}</span>
          <input v-model="form.character" type="text" :class="inputClass">
        </label>
        <label class="flex flex-col gap-1.5">
          <span class="text-sm font-medium">{{ $t('collection.form.scale') }}</span>
          <select v-model="form.scale" :class="inputClass">
            <option v-for="s in scales" :key="s" :value="s">{{ s === 'free' ? $t('collection.form.scaleFree') : s }}</option>
          </select>
        </label>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-sm font-medium">{{ $t('collection.form.type') }}</span>
        <div class="flex flex-wrap gap-2">
          <button v-for="ty in types" :key="ty" type="button" @click="form.figureType = ty">
            <BaseTag :active="form.figureType === ty">{{ $t(`collection.type.${ty}`) }}</BaseTag>
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-sm font-medium">{{ $t('collection.form.status') }}</span>
        <div class="flex flex-wrap gap-2">
          <button v-for="s in statuses" :key="s" type="button" @click="form.status = s">
            <BaseTag :active="form.status === s">{{ $t(`collection.status.${s}`) }}</BaseTag>
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-sm font-medium">{{ $t('collection.form.tags') }}</span>
        <div class="flex flex-wrap gap-2">
          <button v-for="tag in tagOptions" :key="tag" type="button" @click="toggleTag(tag)">
            <BaseTag :active="form.tags.includes(tag)">{{ $t(`generator.filter.${tag}`) }}</BaseTag>
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-sm font-medium">{{ $t('collection.form.photo') }}</span>
        <div class="flex aspect-video items-center justify-center rounded-xl border border-dashed border-fs-muted/30 text-sm text-fs-muted/60">
          {{ $t('collection.form.photoHint') }}
        </div>
      </div>

      <div class="mt-2 flex items-center gap-4">
        <BaseButton type="submit" disabled size="lg">{{ $t('collection.form.submit') }}</BaseButton>
        <NuxtLink :to="localePath('/collection')" class="text-sm text-fs-muted hover:text-fs-text">{{ $t('common.close') }}</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const localePath = useLocalePath()

const inputClass = 'w-full rounded-lg border border-fs-muted/30 bg-transparent px-4 py-2.5 text-sm focus:border-fs-accent focus:outline-none'

const scales = ['1/12', '1/7', '1/6', 'free'] as const
const types = ['action', 'pvc', 'chibi'] as const
const statuses = ['owned', 'wishlist', 'preorder'] as const
const tagOptions = ['hero', 'mecha', 'cute', 'daily'] as const

const form = reactive({
  name: '',
  brand: '',
  series: '',
  character: '',
  scale: '1/12' as string,
  figureType: 'action' as string,
  status: 'owned' as string,
  tags: [] as string[],
})

function toggleTag(tag: string) {
  form.tags = form.tags.includes(tag) ? form.tags.filter((t) => t !== tag) : [...form.tags, tag]
}
</script>
