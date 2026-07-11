<template>
  <div>
    <!-- 節奏(2026-07-12 擁有者定版):每滑一區一種手法、不重複——
         滿版輪播 → 斜切亮帶 → 漸層轉場 → 滿版資訊卡 → 輪盤;規則見 docs/ui-style-guide.md -->
    <HeroCarousel />

    <AngledSection :title="$t('landing.story1.kicker')" tone="light" slant="right">
      <RevealSection>
        <FeatureStorySection
          kicker="01"
          :title="$t('landing.story1.title')"
          :description="$t('landing.story1.desc')"
          :accent-strength="14"
          tone="light"
        />
      </RevealSection>
    </AngledSection>

    <GradientSection :title="$t('landing.story2.kicker')" from-tone="light">
      <RevealSection>
        <FeatureStorySection
          kicker="02"
          :title="$t('landing.story2.title')"
          :description="$t('landing.story2.desc')"
          flip
          :accent-strength="8"
        />
      </RevealSection>
    </GradientSection>

    <FullBleedBlock
      :label="`03 · ${$t('landing.story3.kicker')}`"
      :title="$t('landing.story3.title')"
      :description="$t('landing.story3.desc')"
      :cta="$t('landing.showcase.cta')"
      :to="localePath('/share/demo')"
    />

    <RevealSection>
      <QuickSpinSection />
    </RevealSection>
  </div>
</template>

<script setup lang="ts">
import HeroCarousel from '~/features/landing/components/HeroCarousel.vue'
import AngledSection from '~/features/landing/components/AngledSection.vue'
import GradientSection from '~/features/landing/components/GradientSection.vue'
import FeatureStorySection from '~/features/landing/components/FeatureStorySection.vue'
import FullBleedBlock from '~/features/landing/components/FullBleedBlock.vue'
import QuickSpinSection from '~/features/landing/components/QuickSpinSection.vue'

definePageMeta({ layout: 'landing' })

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('app.name'),
  description: () => t('landing.hero.title'),
  ogTitle: () => t('app.name'),
  ogDescription: () => t('landing.hero.title'),
})
</script>
