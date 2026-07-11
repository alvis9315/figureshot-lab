<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="to ? undefined : type"
    :disabled="disabled"
    class="inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fs-accent disabled:pointer-events-none disabled:opacity-40"
    :class="[sizeClass, variantClass]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from 'vue'

const NuxtLink = resolveComponent('NuxtLink')

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'md' | 'lg'
  to?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}>(), { variant: 'primary', size: 'md', type: 'button', disabled: false })

const variantClass = computed(() => ({
  primary: 'bg-fs-accent text-fs-bg hover:opacity-90 active:scale-[0.98]',
  ghost: 'text-fs-muted hover:text-fs-text',
  outline: 'border border-fs-muted/40 text-fs-text hover:border-fs-accent hover:text-fs-accent',
}[props.variant]))

const sizeClass = computed(() => ({
  md: 'px-5 py-2 text-sm',
  lg: 'px-8 py-3 text-base',
}[props.size]))
</script>
