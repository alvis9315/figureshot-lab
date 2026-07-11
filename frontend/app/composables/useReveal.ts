import { onMounted, onBeforeUnmount, ref, type Ref } from 'vue'

/**
 * 滾動進場 Reveal(motion spec 2.2):進入 viewport ~18% 觸發一次,
 * translateY(32px)+opacity → 原位。prefers-reduced-motion 時只保留 opacity。
 * 用法:const { target, revealed } = useReveal();綁 ref 與 .reveal / .reveal-in class。
 */
export function useReveal(threshold = 0.18): { target: Ref<HTMLElement | null>; revealed: Ref<boolean> } {
  const target = ref<HTMLElement | null>(null)
  const revealed = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value || typeof IntersectionObserver === 'undefined') {
      revealed.value = true
      return
    }
    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          revealed.value = true
          observer?.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { target, revealed }
}
