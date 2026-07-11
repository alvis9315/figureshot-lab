import { onMounted, onBeforeUnmount, ref, type Ref } from 'vue'

/**
 * 滾動進場 Reveal:進入 viewport ~18% 顯示、離開即重置——
 * 每次滾回來都重播動畫(2026-07-12 擁有者定版,覆寫 motion spec「觸發一次」預設)。
 * prefers-reduced-motion 時只保留 opacity(見 main.css .reveal)。
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
        for (const e of entries) revealed.value = e.isIntersecting
      },
      { threshold },
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { target, revealed }
}
