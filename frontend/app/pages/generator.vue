<template>
  <div class="flex flex-col gap-6">
    <header class="flex flex-col items-center gap-4 text-center">
      <h1 class="text-3xl font-semibold">{{ $t('nav.generator') }}</h1>
      <ModeSwitch v-model="mode" />
      <p v-if="mode === 'crossover'" class="text-xs text-fs-muted">{{ $t('generator.crossoverHint') }}</p>
    </header>

    <!-- Squad:三格橫列在池上方;Pair/Crossover:左右對峙(桌機),手機一律橫列置頂 -->
    <div :class="mode === 'squad' ? 'flex flex-col gap-6' : 'grid gap-6 lg:grid-cols-[1fr_2fr_1fr] lg:items-start'">
      <div :class="mode === 'squad' ? 'grid grid-cols-3 gap-3 md:mx-auto md:w-2/3' : 'grid grid-cols-2 gap-3 lg:order-none lg:grid-cols-1'">
        <SlotCard
          :figure="slots[0] ?? null"
          :locked="locks[0] ?? false"
          :label="$t('generator.slotLabel', { n: 'A' })"
          @toggle-lock="toggleLock(0)"
        />
        <SlotCard
          v-if="mode === 'squad'"
          :figure="slots[1] ?? null"
          :locked="locks[1] ?? false"
          :label="$t('generator.slotLabel', { n: 'B' })"
          @toggle-lock="toggleLock(1)"
        />
        <SlotCard
          v-if="mode !== 'squad'"
          class="lg:hidden"
          :figure="slots[1] ?? null"
          :locked="locks[1] ?? false"
          :label="$t('generator.slotLabel', { n: 'B' })"
          @toggle-lock="toggleLock(1)"
        />
        <SlotCard
          v-if="mode === 'squad'"
          :figure="slots[2] ?? null"
          :locked="locks[2] ?? false"
          :label="$t('generator.slotLabel', { n: 'C' })"
          @toggle-lock="toggleLock(2)"
        />
      </div>

      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6" :class="{ 'pool-flash': flashing }">
          <FigureCard
            v-for="f in visibleFigures"
            :key="f.id"
            :figure="f"
            :selected="isSelected(f)"
            @select="pick"
            @detail="detailFigure = $event"
          />
        </div>
        <p v-if="visibleFigures.length === 0" class="py-8 text-center text-sm text-fs-muted">
          {{ $t('generator.emptyPool') }}
        </p>
      </div>

      <SlotCard
        v-if="mode !== 'squad'"
        class="hidden lg:flex"
        :figure="slots[1] ?? null"
        :locked="locks[1] ?? false"
        :label="$t('generator.slotLabel', { n: 'B' })"
        @toggle-lock="toggleLock(1)"
      />
    </div>

    <StyleScenePicker v-model="styleSelection" />

    <GeneratorControls
      v-model:search="search"
      :active-filters="activeFilters"
      :can-generate="filledCount === slotCount"
      @toggle-filter="toggleFilter"
      @randomize="randomize"
      @generate="showResult = true"
    />

    <ResultPanel v-if="showResult" :selection="styleSelection" @reroll="reroll" />

    <CharacterDetailPanel
      :figure="detailFigure"
      @close="detailFigure = null"
      @pick="pickFromDetail"
    />

    <p class="text-center text-xs text-fs-muted/60">{{ $t('generator.demoNote') }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import ModeSwitch, { type GeneratorMode } from '~/features/generator/components/ModeSwitch.vue'
import FigureCard from '~/features/generator/components/FigureCard.vue'
import SlotCard from '~/features/generator/components/SlotCard.vue'
import GeneratorControls from '~/features/generator/components/GeneratorControls.vue'
import ResultPanel from '~/features/generator/components/ResultPanel.vue'
import CharacterDetailPanel from '~/features/generator/components/CharacterDetailPanel.vue'
import StyleScenePicker, { type StyleSelection } from '~/features/style/components/StyleScenePicker.vue'
import { demoFigures, type DemoFigure } from '~/features/generator/constants/demoFigures'

// 靜態展示層:互動僅為呈現動畫狀態(選中/Slot/Lock/Randomize/Result),不含真實邏輯與 API
const mode = ref<GeneratorMode>('pair')
const slots = ref<(DemoFigure | null)[]>([null, null])
const locks = ref<boolean[]>([false, false])
const search = ref('')
const activeFilters = ref<string[]>([])
const showResult = ref(false)
const flashing = ref(false)
const detailFigure = ref<DemoFigure | null>(null)
const styleSelection = ref<StyleSelection>({ style: null, scene: null, mood: null, task: null })

const slotCount = computed(() => (mode.value === 'squad' ? 3 : 2))
const filledCount = computed(() => slots.value.filter(Boolean).length)

const visibleFigures = computed(() =>
  demoFigures.filter((f) => f.name.toLowerCase().includes(search.value.toLowerCase())),
)

watch(mode, () => {
  slots.value = Array.from({ length: slotCount.value }, () => null)
  locks.value = Array.from({ length: slotCount.value }, () => false)
  showResult.value = false
})

function isSelected(f: DemoFigure) {
  return slots.value.some((s) => s?.id === f.id)
}

function pick(f: DemoFigure) {
  if (isSelected(f)) return
  const empty = slots.value.findIndex((s, i) => s === null && !locks.value[i])
  const target = empty !== -1 ? empty : locks.value.findIndex((l) => !l)
  if (target === -1) return
  slots.value[target] = f
}

function toggleLock(i: number) {
  if (!slots.value[i]) return
  locks.value[i] = !locks.value[i]
}

function randomize() {
  flashing.value = true
  setTimeout(() => (flashing.value = false), 350)
  const used = new Set(slots.value.filter((s, i) => s && locks.value[i]).map((s) => s!.id))
  const candidates = demoFigures.filter((f) => !used.has(f.id)).sort(() => Math.random() - 0.5)
  let c = 0
  slots.value = slots.value.map((s, i) => (locks.value[i] ? s : candidates[c++] ?? null))
}

function toggleFilter(f: string) {
  activeFilters.value = activeFilters.value.includes(f)
    ? activeFilters.value.filter((x) => x !== f)
    : [...activeFilters.value, f]
}

function pickFromDetail(f: DemoFigure) {
  pick(f)
  detailFigure.value = null
}

function reroll() {
  showResult.value = false
  randomize()
  requestAnimationFrame(() => (showResult.value = true))
}
</script>
