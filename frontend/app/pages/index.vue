<template>
  <div>
    <HeroCarousel />

    <!-- 節奏:斜切亮暗交替(轉場)→ 滿版資訊卡(章節開場)→ 輪盤收尾;區塊選用規則見 docs/ui-style-guide.md -->
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

    <AngledSection :title="$t('landing.story2.kicker')" tone="dark" slant="left">
      <RevealSection>
        <FeatureStorySection
          kicker="02"
          :title="$t('landing.story2.title')"
          :description="$t('landing.story2.desc')"
          flip
          :accent-strength="8"
        />
      </RevealSection>
    </AngledSection>

    <AngledSection :title="$t('landing.story3.kicker')" tone="light" slant="right">
      <RevealSection>
        <FeatureStorySection
          kicker="03"
          :title="$t('landing.story3.title')"
          :description="$t('landing.story3.desc')"
          :accent-strength="11"
          tone="light"
        />
      </RevealSection>
    </AngledSection>

    <FullBleedBlock
      :label="$t('landing.showcase.label')"
      :title="$t('landing.showcase.title')"
      :description="$t('landing.showcase.desc')"
      :cta="$t('landing.showcase.cta')"
      :to="localePath('/share/demo')"
      :hue="190"
    />

    <RevealSection>
      <QuickSpinSection />
    </RevealSection>
  </div>
</template>

<script setup lang="ts">
import HeroCarousel from '~/features/landing/components/HeroCarousel.vue'
import AngledSection from '~/features/landing/components/AngledSection.vue'
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
