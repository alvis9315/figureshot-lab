# AGENTS.md — FigureShot Lab 協作規範

適用於所有 AI agent 與人類協作者。

## 專案定位

- 產品規格單一事實來源:`docs/product-spec.md`(凍結原文,不可改寫);實作順序與狀態只在 `docs/roadmap.md` 更新。
- 技術棧已由 ADR 定案(`docs/adr/`),不可自行更換框架、資料庫或 AI Provider。
- MVP 範圍:自建收藏庫 + 靈感輪盤 + AI 攝影優化 + IG 文案。範圍外功能(付款、B 端報表、推薦 ML、圖片生成)不做。

## 常用指令

```bash
docker compose up -d                  # 本機 PostgreSQL
./scripts/run-backend.sh              # 後端(需 Java 21)
./scripts/run-frontend.sh             # 前端(需 Node 22,先 nvm use)
./scripts/check.sh                    # 完成前必跑:後端 test + 前端 build
```

## 後端防呆(Spring Boot)

1. 不可把商業邏輯寫在 Controller。
2. 不可直接把 JPA Entity 回傳給前端(走 DTO + mapper)。
3. 不可把 Repository 當 Service 使用。
4. 不可在 Controller 大量 try-catch;例外統一走 GlobalExceptionHandler。
5. 不可把 DB 密碼、JWT secret、API key 寫入 application.yml 並 commit;機密只走環境變數。
6. 不可用 allow all CORS 當正式設定。
7. 不可暴露所有 Actuator endpoints 到 public。
8. 不可略過 request validation(jakarta.validation + @Valid)。
9. 完成前必跑 `./mvnw test`;build 失敗不得假裝完成。
10. 不可混用 Maven 與 Gradle;有 pom.xml 就不准出現 build.gradle。
11. 不可 commit target/、*.jar。
12. schema 變更只走 Flyway migration;正式環境禁 ddl-auto=create / create-drop(本專案一律 validate)。
13. 不可把 stack trace 回傳給前端;不可用 System.out.println 當 log(用 Slf4j)。

## 前端防呆(Nuxt 3)

1. `app/app.vue` 只能是 shell(NuxtLayout + NuxtPage),不可寫任何畫面內容。
2. `components/` 不當垃圾桶;功能元件放 `features/<feature>/components/`。
3. API 呼叫集中在 `services/` 與 `features/*/api/`,不可散落在 page。
4. store 不當垃圾桶;功能 store 放 `features/<feature>/stores/`。
5. `pages/` 是唯一路由來源(Nuxt 慣例),不另建 views/。
6. 文案字串一律走 i18n(en + zh-TW),不可硬編在元件裡。

## UI / CSS 防呆

1. 只用 Tailwind CSS,不引入其他 UI library(Element Plus、Naive UI 等一律禁止)。
2. design token(色彩、字階、間距)集中在 Tailwind theme + `assets/styles/` 的 CSS variables,不可散落覆寫。
3. 樣式不可全塞單一 css 檔;重複 pattern 抽成 component。

## RWD 防呆

1. mobile-first;只用 Tailwind breakpoint(sm/md/lg/xl/2xl),不可另創一套。
2. 手機版不可出現整頁橫向捲軸;table 手機版轉卡片列表。
3. 規則詳見 `docs/rwd-guideline.md`;完成畫面前檢查 375 / 768 / 1280px。

## Node / npm 防呆

1. 只用 npm,不可改用 pnpm / yarn / bun;不可刪 package-lock.json。
2. 不可 commit node_modules、dist、.nuxt、.output、.env。
3. 有 .nvmrc 先 `nvm use`;完成前必跑 `npm run build`。

## AI / 機密防呆

1. `ANTHROPIC_API_KEY` 等一切機密只存環境變數;前端永不接觸 AI API。
2. AI 呼叫一律經後端 `ai/` 模組的 AiProvider 介面;新增 provider 是加 adapter,不是改業務邏輯。
3. 不可 commit:API key、token、.env、憑證、個資、使用者上傳圖片(backend/uploads/ 已 ignore)。

## 安裝套件規則

安裝前說明:名稱、用途、prod 或 dev dependency、可否用現有替代。不可超出 ADR 定案的技術棧自行加大型套件。

## Git

- Conventional Commits(feat / fix / docs / refactor / test / chore / build / ci),描述可用中文。
- 分支:`feature/<name>`、`fix/<name>`;push 前先與擁有者確認。
- commit 前 `git status` 確認無機密與建置產物。

## 失敗處理

指令失敗 → 先嘗試最小可行修復(上限 2 次)→ 仍失敗就停止,回報錯誤訊息、可能原因、建議修法。不得假裝成功。環境問題自行修;需求或選型問題問擁有者。版本與設定不確定時查官方文件。
