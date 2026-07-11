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

- 字體定案(第 2 關完成):標題 Space Grotesk(self-host)+ 內文系統無襯線 + 等寬點綴;依參考收斂裁決(七來源全為無襯線),token 化。
- Docker Desktop 安裝完成(官方 dmg 直裝 /Applications,免 sudo;CLI symlink 至 /opt/homebrew/bin)。**Flyway 實跑驗證通過**:Postgres 16.14 成功 migrate V1(6 表 + flyway_schema_history),health 連真 DB 回 200。驗畢已照規範停容器並關閉 Docker Desktop。

- **Wave 2 完成**(擁有者下令開工):①StyleScenePicker——風格 4 卡(Cinematic/街頭/溫暖日常/霓虹東京,漸層占位)+ 場景/情緒/任務 tag 群,整進 Generator 同頁分段,選擇會反映到 ResultPanel;②CharacterDetailPanel——FigureCard 加 ⓘ,BaseSheet(手機 bottom sheet / 桌機 modal)顯示詳情,可直接放入欄位;③分享頁 /share/[id]——SSR + OG/Twitter meta(兌現 ADR-0001 選 Nuxt 的理由),ResultPanel 分享鈕改為可用連結;④等寬字點綴套用於控制台標籤。build + SSR smoke(generator 風格卡、share OG、zh-TW)全過。

- **Generator 選角化改造**(擁有者回饋:太中規中矩,要遊戲選角感;裁決採現代遊戲科技感,復古被 guide Avoid 排除):FigureCard 改斜切卡 + 亮底名牌條、SlotCard 同語彙 + 名牌、ModeSwitch 斜切 tab、頁面加掃描紋背景與「Select your figures」kicker、手機 Pair 模式 A VS B。新 utility:.fs-skew-card/.fs-plate/.fs-game-bg。語彙僅限 Generator 頁。

- **HeroCarousel + 動畫模組化**(擁有者需求):首頁 Hero 改滿版自動輪播 3 張破題(5s、crossfade、hover 暫停、圓點/箭頭、reduced-motion 不自動播);輪盤區不動。新增 Base 元件 RevealSection,滾動漸入正式元件化,landing 區段改由頁面層包覆。
- **修重大 SSR bug**:①BaseButton 的 resolveComponent 寫法改條件分支;②Nuxt 元件自動註冊預設 pathPrefix 使 `components/common/BaseButton.vue` 註冊成 CommonBaseButton,模板的 `<BaseButton>` 全數解析失敗——**Wave 1 起所有 Base 元件(含 CTA、Randomize/Generate 鈕、BaseSheet)在頁面上從未渲染**;nuxt.config 設 `pathPrefix: false` 修復,四頁 smoke 驗證按鈕齊全、警告歸零。教訓:smoke 只 grep 文字不夠,關鍵互動元素要逐一驗證。

- **輪播 v2**(擁有者細部回饋):藍光首張、每張左/右/中對齊 + 獨立 CTA(進一步/看更多)、側邊 44px 圓形箭頭(Apple/GM 慣例位)、三層背景(照片位/打光偏文字對側/文字側漸暗)——照片素材進場只填 image 欄位。
- **Landing 區塊庫**(擁有者提議模組化區塊、採納):新增 AngledSection(Rivals 式斜切亮暗帶 + 超大章節標題)與 FullBleedBlock(Nothing 式滿版 + 浮動資訊卡);FeatureStorySection 加 tone。首頁重組節奏:輪播 → 亮/暗/亮斜切帶×3(01~03 圖文)→ 滿版社群預告 → 輪盤。組合防花規則(≤3 型態、職責固定、亮暗節奏)寫入 ui-style-guide;StoryStrip(TE 漫畫式)列待素材選項不先建。

- **首頁節奏 v3**(擁有者三點回饋):①打光改與文字**同側**(光抓焦點);②校色:灰藍提亮(212 38% 56%)、紫紅→英雄酒紅(352 58% 42%),輪播三色=超級英雄紅藍黃;③FullBleedBlock 卡片改對齊版心(max-w-6xl);④Hero 改 100vh 藏住第一屏切邊;⑤手法不重複:斜切×1 → 新增 GradientSection 漸層轉場 → 直角滿版 → 輪盤,每滑一區一種新鮮感。規則修訂入 ui-style-guide;rwd-guideline 補 Landing 區塊 RWD 行為表。

- **首頁節奏 v4**(擁有者三點回饋):①斜切不再咬進 Hero,切邊完整落於第一屏下,且亮帶 closeBottom 底邊也斜切成平行四邊形色帶;②黑白線性漸層不自然 → 改「**光暈溢出**」轉場(LightSpillSection:暗區頂部柔光,像上方白帶的光灑下,貼攝影主題),GradientSection 刪除;③03 文字框(卡片盒)棄用 → 無框編輯式排版(accent 豎線 + 文字直壓滿版,首次使用的手法)。

- **首頁節奏 v5**(擁有者回饋):①漸層回歸細緻版——暖色階多停點(米→暖褐→深棕→黑),不再灰階直混;②02 改 Apple Fitness+ 式 MediaShowcaseSection(一大圖 21:9 + 下排四小圖);③03 改 Apple News 式 ShelfSection + **BaseShelf 慣性滑動容器**(momentum scrolling:滑鼠拖曳、放手速度衰減滑出、snap-proximity 緩停、拖曳後抑制誤點;觸控用原生慣性);LightSpillSection 刪除、FullBleedBlock 轉備用。

- **首頁節奏 v6**(擁有者六點回饋):①輪播箭頭去圓框、放大加粗、提高可見度;②漸層改白→金屬銀→黑冷色階(暖褐顯髒);③03 櫥窗區移除打光層(輪播已用過燈光);④大圖小圖文字一律壓圖內左下 + hover 微放大;⑤櫥窗改 **Embla**(loop 無限循環 + dragFree 摩擦減速 = iPhone 相簿手感),全寬無邊界書架、卡片×2 確保寬螢幕無縫;⑥新依賴 `embla-carousel-vue`(~8KB 無樣式輪播引擎,取代手刻慣性物理——手刻版手感不順且無限循環易出縫,專用引擎是正解;不違反 motion spec 的「避免重型動畫庫」)。

- **首頁節奏 v7**(擁有者三項需求):①ShelfSection 加 size 變體——lg 為 Apple 式大卡(82vw~46rem、16:9、說明移圖下),sm 保留,首頁改用 lg;②新 Base 元件 **BaseMedia**:每張卡可塞 image 或 video,video 自帶圓形播放/暫停鈕(Apple 式),無素材吃漸層占位——素材進場只填欄位;③新 **PinnedStorySection 定格滾動敘事**(scroll-pinning:220vh 滾動區 + sticky 滿版 + 進度驅動文字穿越,reduced-motion 靜態),插入 Hero 之後作三行品牌宣言段。

### Next

- PRE-002/003/005/006/007/010;風格卡與角色池待 PRE-005/006 種子素材替換占位。
- Wave 3(提案已交,待擁有者確認):Collection/History 版面、Login 正式化。

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
