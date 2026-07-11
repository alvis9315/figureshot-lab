/**
 * 配色方案切換:cinema(深色電影感,預設)/ bluebottle(白底鈷藍)。
 * cookie 持久化讓 SSR 首屏就是正確配色(無閃爍);
 * data-theme 由 app.vue 綁到 <html>,CSS 變數覆寫見 main.css。
 */
export type ThemeName = 'cinema' | 'bluebottle'

export function useTheme() {
  const theme = useCookie<ThemeName>('fs-theme', {
    default: () => 'cinema',
    maxAge: 60 * 60 * 24 * 365,
  })

  function toggle() {
    theme.value = theme.value === 'cinema' ? 'bluebottle' : 'cinema'
  }

  return { theme, toggle }
}
