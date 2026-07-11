# Worklog

## 2026-07-12

### Done

- 依擁有者 UX 參考包(GPT 產出的總指令 + 規格四件套)執行:六份 md 讀畢 → 22 張原始圖尋獲(~/figreShotLab參考資料)→ 歸檔 docs/ux/references/(14 張主圖壓 1600px JPEG 入 git,archive 全量本機保存並 gitignore)→ Visual Reference Gate → Implementation Readiness Review(docs/ux/)。
- 擁有者四項決策:①主圖壓縮 commit;②核心頁路由 /generator,**輪盤意象放首頁**當快抽入口;③Result 為 Generator 同頁滑入面板;④本波=靜態 UI+動畫、不接 API(定位 PRE-004+PRE-008 高保真落地)。
- Wave 1 實作完成並通過 build + SSR smoke test(/、/generator、/zh-TW):Landing(滿版 Hero 進場+stagger、三段敘事 scroll reveal、QuickSpin 輪盤區、scroll hint)、Generator(角色池、Pair/Squad/Crossover、Slot crossfade、Lock 脈衝、Randomize 閃切、Result 滑入、搜尋 Empty 態、Generate disabled 態)。動畫全依 motion-interaction-spec,支援 prefers-reduced-motion。
- 元件登記表首批 11 筆;roadmap:PRE-004 已完成、PRE-008 開發中。

### Decisions

- 見上四項;風格三關第 1、3 關完成,第 2 關餘字體未定(暫用系統字,定案只改 token)。

### Issues

- Style/Scene 圖片導向選擇與分享獨立頁屬 Wave 2;Loading/Error 態待接 API 時實作;風格卡與角色池需 PRE-005/006 種子素材替換占位。

### Next

- Wave 2:Style/Scene 選擇區 + CharacterDetailPanel + 分享頁;字體定案;PRE-002/003/005/006/007/010。

## 2026-07-11

### Done

- Repo 初始化(new-project-quickstart skill 產出之 Prompt):root 檔案、docs 全套(product-spec 收入原檔 v0.2、roadmap 狀態板、ADR 0001~0004)、Spring Boot 骨架(health + Flyway V1 + AiProvider/Storage 介面)、Nuxt 3 骨架(Tailwind + Pinia + i18n + 5 個 placeholder 頁)、shared/、scripts/。

### Decisions

- 技術棧定案見 ADR 0001~0004;DB 第一版用 spec 第 11 節簡化 schema(6 表)。
- 狀態追蹤唯一入口:docs/roadmap.md;product-spec.md 凍結。

### Issues

- 本機未安裝 Docker,`docker compose up -d`(Postgres)與 Flyway migration 實跑尚未驗證;health endpoint 以 H2 覆寫參數驗證通過。裝好 Docker Desktop 後跑一次 setup-guide.md 流程即補齊。

- 補充規範(同日第二批):新增 component-guideline.md(元件三層分級、判定規則、升級規則、新增 checklist、登記表);ui-style-guide.md 加「風格定案三關」機制(PRE-004 的執行方式);AGENTS.md UI 防呆加第 4、5 條。決策:正式切版須待 PRE-004 + PRE-008 定稿;結構與風格分離(換風格只改 token)。

- 風格定案第 1 關部分完成:深色為主、平衡型(記於 ui-style-guide.md);參考網站待擁有者提供資料。
- Docker Desktop 以 brew cask 安裝失敗:最後一步 sudo 建 CLI 符號連結需要密碼,非互動環境無法提供,brew 已回滾。待擁有者本人安裝(`brew install --cask docker-desktop` 或官網 dmg),Postgres + Flyway 實跑驗證仍欠。

### Next

- PRE 閘門(roadmap.md 閘門 0):訪談大綱、競品分析、種子資料模板、user flow、wireframe、PRE-010 驗證計畫。
- 擁有者提供參考資料後續跑風格三關;裝好 Docker 後補 Flyway 驗證。
