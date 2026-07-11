# Frontend Architecture(Nuxt 3)

## 分層

```text
app/app.vue                  只當 shell(NuxtLayout + NuxtPage),禁寫畫面
app/layouts/                 default(導覽 + footer)、empty(登入等滿版頁)
app/pages/                   路由唯一來源:index、login、collection/、wheel、history
app/features/<feature>/      collection / inspiration / auth
  ├─ components/             功能元件
  ├─ composables/            功能邏輯
  ├─ api/                    該功能的 API 呼叫(用 services/apiClient)
  └─ stores/                 功能 Pinia store
app/components/common/       跨功能基礎元件(BaseButton 等,做了才放)
app/services/apiClient.ts    唯一 fetch 封裝(baseURL = NUXT_PUBLIC_API_BASE、帶 token、統一錯誤)
app/stores/                  全域 store(auth session)
app/assets/styles/           Tailwind 入口 + design token(CSS variables)
i18n/locales/                en.json(預設)、zh-TW.json
```

## 規則

- API 呼叫只出現在 services/ 與 features/*/api/;page 與元件不直接 fetch。
- 文案一律 `$t()`,新增字串同時補 en 與 zh-TW。
- SSR:分享頁與 Landing 需 OG meta(useSeoMeta);純互動頁(輪盤)可 CSR。
- 狀態:跨頁才進 store,元件內部狀態不進 store。

## UI 定位

Cinematic Editorial Workspace(spec 10.0):首頁大圖 Showcase + 「What do you want to shoot today?」;工作區聚焦「選模型 → 輪盤 → 結果 → 儲存」。視覺基調見 ui-style-guide.md;Moodboard(PRE-004)定稿前不刻正式視覺。
