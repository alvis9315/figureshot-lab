# ADR-0001:前端採用 Nuxt 3(SSR)而非 Vue 3 SPA

- Status: accepted(2026-07-11)
- 對應 spec:20B 前端框架(原「討論中」)

## Context

spec 20I 的 Global-first 策略要求:分享頁 Open Graph metadata、多語系 URL 與 SEO、社群傳播(IG/Threads 分享連結)是成長主渠道。擁有者明確要求「照長遠的技術來決定,改來改去也是成本」。

## Decision

採用 Nuxt 3(TypeScript + Pinia + @nuxtjs/i18n + Tailwind CSS),npm + Node 22。

## Consequences

- 分享頁 OG tags 與多語 SEO 原生支援,不需之後從 SPA 遷移(遷移是最貴的路)。
- 代價:比純 SPA 多一層 SSR 運行時,部署需支援 Node server(見 ADR-0004)。
- 不需 SSR 的頁面可用 Nuxt 路由規則降級為 CSR,不影響開發模式。
