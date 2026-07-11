# ADR-0004:部署暫定 Vercel(Nuxt)+ Render(Spring Boot)+ Neon(PostgreSQL)

- Status: **proposed**(2026-07-11 暫定,MVP 完成前可換,正式部署前復審)
- 對應 spec:20B 部署(原「討論中」)、20I Global-first

## Context

受眾以國外為主、台灣次之(擁有者確認)。需要全球邊緣分發的前端、可跑 JVM 的後端主機、免運維的 PostgreSQL,MVP 階段成本要接近零。

## Decision(暫定)

- Nuxt SSR → Vercel(全球邊緣、零設定、免費額度夠 MVP;台灣延遲也低)。
- Spring Boot → Render(支援 Docker/JVM、免費層可驗證;冷啟動慢是已知代價)。
- PostgreSQL → Neon(serverless、免費層、與 Render/本機皆可連)。
- 圖片正式儲存 → Cloudflare R2(免 egress 費,配合全球受眾);MVP 前先本機。

## Consequences

- 三平台皆免費層起步,驗證期零固定成本;流量起來後 Render 冷啟動與 Neon 連線數是第一個要復審的點。
- 環境變數與 secret 全走各平台 secret manager,詳見 deployment-guide.md。
