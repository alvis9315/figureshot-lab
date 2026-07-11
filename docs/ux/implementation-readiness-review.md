# Implementation Readiness Review

> 依 `claude-code-master-prompt.md` 第 4 節產出(2026-07-12)。Visual Reference Gate 已執行:六份規格 md 全數讀畢、22 張原始圖全數尋獲並歸檔、12 組主參考圖說明(Use for/Keep/Avoid/Transform/Priority/Responsive/Interaction/Copyright)全部齊備。**未經擁有者確認,不開始正式 UI 實作。**

## 1. 已理解的產品目標

- 模型收藏管理 + 靈感產生器 + 角色配對/組隊 + 攝影企劃工具。
- 三大風格支柱:Cinematic Figure Photography(電影感)、Modern Character Selection(選角配對感)、Minimal Creative Workspace(簡約創作台)。
- 首頁必須一眼看懂「這是模型攝影靈感平台」,不可流於藝術站或 AI SaaS Dashboard。
- 與既有定案相容:深色為主、平衡型沉浸(2026-07-11 風格第 1 關)、Global-first en/zh-TW、Nuxt 4 + Tailwind。

## 2. 預計實作的頁面

- **Landing**:滿版 Hero + 一句破題 + `Start Creating` / `Explore Inspirations` + 三段功能敘事(Build your team / Generate a scene / Turn figures into stories)
- **Generator**(核心頁,建議取代現有 `/wheel` placeholder):角色池 + Slot + Pair/Squad/Crossover + 搜尋/篩選/Lock/Randomize/Generate
- **Style / Scene Selection**:圖片導向風格卡(建議做成 Generator 流程第二步,同頁分段)
- **Result**:電影感結果呈現(建議 MVP 做 Generator 內滑入面板,分享用獨立頁後續)
- 其他必要頁沿用現有:Collection、History、Login

## 3. 預計採用的介面結構

- **Landing**:Hero(背景 scale-in + 標題 stagger)→ 三段敘事區(scroll reveal)→ 尾段 CTA;輕量 scroll hint
- **Generator 桌機**:左右大型角色預覽/Slot 對峙 + 中央角色池矩陣 + 控制模組區(Teenage Engineering 式:Mode/Lock/Randomize/Generate)+ 側邊詳情面板
- **Generator 平板**:大型預覽縮小、角色池仍為主操作區、設定收合
- **Generator 手機**:角色池優先、Slot 固定頂部或底部、詳情走 Bottom Sheet、控制項轉底部操作列
- **Style/Scene**:風格卡 grid(桌機 3~4 欄、手機 2 欄或橫向捲動),選中有明確外框 + 大圖 crossfade
- **Result**:單一主體強調的編輯感版面(Gentle Monster Detail Focus 式)+ 主題/場景/情緒/擺拍建議/AI 文案 + 儲存/重抽/分享

## 4. 預計建立的元件(依 component-guideline 三層制)

- **Base 層**:BaseButton、BaseCard、BaseTag、BaseSheet(modal/drawer/bottom-sheet)、BaseSkeleton、BaseEmptyState
- **features/landing**:HeroSection、FeatureStorySection、ScrollHint
- **features/generator**:CharacterPool、FigureCard、SlotBar、SlotCard、ModeSwitch(Pair/Squad/Crossover)、LockToggle、RandomizeButton、GenerateButton、CharacterDetailPanel、ResultPanel
- **features/style**:StyleCard、StyleGrid、SceneMoodPicker
- 全部進 component-guideline.md 登記表;樣式只走 token

## 5. 參考圖與畫面對應關係

- Apple Vision Pro → Landing Hero 與功能敘事層級 ✓(landing/apple-vision-pro-hero.png、apple-feature-entertainment.png)
- Gentle Monster → Landing 電影感 + Result 編輯感 ✓(gentle-monster-home-campaign.png、gentle-monster-detail-focus.png)
- Nothing → 淺色科技感**備選**,僅借對比與訊號色邏輯 ✓(nothing-light-hero.png)
- Hero Team Character Select(MvC 經典 + Rivals 現代,統一命名)→ Generator 角色池/對峙/詳情/Team-Up ✓(character-select/ 4 張)
- Teenage Engineering → Generator 控制模組區 ✓(workspace/ 2 張)
- Interface In Game → 深色工作台輔助案例(Low priority)✓(interface-cyberpunk-ui.png)
- Leica Looks → Style/Scene 風格卡 ✓(style/ 2 張)

## 6. 動畫與互動落點

依 motion-interaction-spec.md 全表實作:Hero scale-in(900~1200ms)、標題 stagger(120~160ms)、scroll reveal(translateY 32px→0,觸發一次)、卡片 hover(-4px/1.02)、選中/放入 Slot(180~240ms)、大型預覽 crossfade、Lock 脈衝、Randomize 快速閃切、Result 面板滑入(260~320ms)、Loading skeleton / Empty / Error / Disabled 四態。技術:CSS transition + IntersectionObserver(`@vueuse/core` 的 `useIntersectionObserver`),只動 `transform`/`opacity`,支援 `prefers-reduced-motion`(停位移、留 opacity)。

## 7. RWD 處理方式

桌機/平板/手機三版型分別設計(非縮小),詳見第 3 節;手機動畫減量(小位移 + opacity 優先)。與既有 rwd-guideline.md(mobile-first、Tailwind breakpoint)相容。

## 8. 已完成的圖片歸檔

- 14 張主參考圖已依 visual-reference-guide 改英文名歸入 `docs/ux/references/{landing,character-select,workspace,style}/`
- 22 張原始截圖全量保留於 `docs/ux/references/archive/`(含未被選為主參考的 7 張)
- 原始來源另有兩份備份未動:`~/figreShotLab參考資料/` 與 `~/figreShotLab參考資料.zip`
- 規格 md 六份歸入 `docs/ux/`(總指令存為 claude-code-master-prompt.md);縮圖索引存為 references/figureshot-refs-contact-sheet.jpg

## 9. 尚缺資料

1. **風格卡預覽圖素材**:Leica 式風格卡需要每種風格的示意圖(Cinematic / Street / Warm Daily Life / Neo Tokyo…),目前無素材(屬 PRE-006 範疇)。MVP 擬用色調漸層 + 文字占位,待種子素材替換。
2. **角色池種子資料**:Generator 要有模型可選;訪客試玩需種子模型照片與資料(屬 PRE-005,未開始)。MVP 擬用灰底剪影占位卡。
3. **品牌字體選定**:標題字體性格(襯線感/幾何無襯線)未定——即風格三關第 2 關未答項。

## 10. 存在衝突的參考

1. **Nothing 淺色 vs 已定案深色為主**:處置——Nothing 降為輔助,僅借高對比與訊號色點綴,不做整站淺色(guide 本身已標 Medium/備選)。
2. **UX 包「Generator」vs product-spec「靈感輪盤」**:motion spec 明言不做大型轉盤特效;兩者是同一核心功能的不同隱喻。建議正式採 **Generator(角色池 + Slot)** 模式,後續文件與路由統一用詞(product-spec 凍結不改,差異記於 roadmap)。
3. **首頁文案**:spec 10.0 的「What do you want to shoot today?」vs UX 包的「Start Creating / Explore Inspirations」。建議:提問句當 Hero 破題副標,CTA 用 Start Creating,兩者並存。

## 11. 需要使用者確認的決策

1. **參考圖 commit 策略**(必答):references 共 616MB、最大單檔 78MB(GitHub 單檔 100MB 硬限、>50MB 警告)。
   - **A(推薦)**:主參考圖壓縮(縮至寬 1600px,單張 <2MB)後 commit;`archive/` 加入 .gitignore 僅本機保存(原圖已有資料夾 + zip 兩份備份,不遺失)
   - B:全部不 commit,docs 只留 contact sheet 與 guide(內含 Source URL)
   - C:Git LFS(要多管一套工具,單人專案不划算)
2. **路由命名**:`/wheel` 改為 `/generator`?(建議改,與 UX 包一致)
3. **`Explore Inspirations` CTA 去向**:MVP 尚無公共靈感牆——先導向 `/collection`?或首版隱藏此按鈕?
4. **Result 形式**:MVP 做 Generator 同頁滑入面板(建議,符合 motion spec 3.7)或獨立路由頁?
5. **實作範圍與閘門定位**:建議把本波定位為「**PRE-004 + PRE-008 的高保真落地**」——只做靜態 UI + 動畫 + 占位資料,**不接後端 API**(功能接線仍待 PRE 閘門其餘項目),不違反 roadmap「PRE 未過不開 P0 功能」規則。確認後第一波先做 Landing + Generator,第二波 Style/Result。
6. **開工順序確認**:以上 1~5 答完即可開工,或你要再補充參考資料?
