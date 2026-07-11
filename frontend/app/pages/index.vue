<template>
  <div>
    <HeroCarousel />
    <RevealSection>
      <FeatureStorySection
        :kicker="$t('landing.story1.kicker')"
        :title="$t('landing.story1.title')"
        :description="$t('landing.story1.desc')"
        :accent-strength="14"
      />
    </RevealSection>
    <RevealSection>
      <FeatureStorySection
        :kicker="$t('landing.story2.kicker')"
        :title="$t('landing.story2.title')"
        :description="$t('landing.story2.desc')"
        flip
        :accent-strength="8"
      />
    </RevealSection>
    <RevealSection>
      <FeatureStorySection
        :kicker="$t('landing.story3.kicker')"
        :title="$t('landing.story3.title')"
        :description="$t('landing.story3.desc')"
        :accent-strength="11"
      />
    </RevealSection>
    <RevealSection>
      <QuickSpinSection />
    </RevealSection>
  </div>
</template>

<script setup lang="ts">
import HeroCarousel from '~/features/landing/components/HeroCarousel.vue'
import FeatureStorySection from '~/features/landing/components/FeatureStorySection.vue'
import QuickSpinSection from '~/features/landing/components/QuickSpinSection.vue'

definePageMeta({ layout: 'landing' })

const { t } = useI18n()
useSeoMeta({
  title: () => t('app.name'),
  description: () => t('landing.hero.title'),
  ogTitle: () => t('app.name'),
  ogDescription: () => t('landing.hero.title'),
})
</script>
