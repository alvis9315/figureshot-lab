# Worklog

## 2026-07-11

### Done

- Repo 初始化(new-project-quickstart skill 產出之 Prompt):root 檔案、docs 全套(product-spec 收入原檔 v0.2、roadmap 狀態板、ADR 0001~0004)、Spring Boot 骨架(health + Flyway V1 + AiProvider/Storage 介面)、Nuxt 3 骨架(Tailwind + Pinia + i18n + 5 個 placeholder 頁)、shared/、scripts/。

### Decisions

- 技術棧定案見 ADR 0001~0004;DB 第一版用 spec 第 11 節簡化 schema(6 表)。
- 狀態追蹤唯一入口:docs/roadmap.md;product-spec.md 凍結。

### Issues

- 本機未安裝 Docker,`docker compose up -d`(Postgres)與 Flyway migration 實跑尚未驗證;health endpoint 以 H2 覆寫參數驗證通過。裝好 Docker Desktop 後跑一次 setup-guide.md 流程即補齊。

- 補充規範(同日第二批):新增 component-guideline.md(元件三層分級、判定規則、升級規則、新增 checklist、登記表);ui-style-guide.md 加「風格定案三關」機制(PRE-004 的執行方式);AGENTS.md UI 防呆加第 4、5 條。決策:正式切版須待 PRE-004 + PRE-008 定稿;結構與風格分離(換風格只改 token)。

### Next

- PRE 閘門(roadmap.md 閘門 0):訪談大綱、競品分析、種子資料模板、user flow、wireframe、PRE-010 驗證計畫。
- 風格定案三關可隨時開跑(擁有者提供參考網站即第 1 關)。
