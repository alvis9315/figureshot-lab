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

- **首頁節奏 v8**(擁有者六點回饋):①03 標題區置中、CTA 置中、拖曳提示移按鈕下;②02 卡片去光改純色(之後放圖/影),大卡改 vh 高度 + 段落收斂讓 02 一屏完整;③輪盤段 min-h-92vh 置中自成一屏,書架加底距,上方說明文字不再壓進輪盤畫面;④新 TheFooter(品牌+產品/帳號/社群欄+版權,Apple 式)取代單行 footer,兩 layout 共用;⑤頂部列固定(landing fixed / default sticky)+ 毛玻璃半透明 + 窄版 py-2.5。

- **首頁節奏 v9**(擁有者四點回饋):①02 卡片純色去混濁(飽和提高:hsl s42% l21%);②03 置中偏左=letter-spacing 尾端空隙,pl 補償;③銀漸層 v4——中段更亮更冷(#c9ced4 一帶)、尾段 10 停點平滑入黑消除交界;④**輪盤互動**:點擊 → 轉輪 1.75s(cubic-bezier 減速)→「配對成功!/開始旅程 →」→ 跳轉 /generator?spin=1 自動 randomize + 隨機風格場景 + 直接亮結果;reduced-motion 直接跳轉。

- **雙配色方案**(擁有者需求,token 化驗收):新增 `bluebottle` 主題(60% 白 #fbfaf6 / 30% 鈷藍 #2149c1 / 10% 深灰 #2f3033,參考 Blue Bottle 僅取色彩元素)——實作 = main.css 覆寫 `[data-theme]` 五變數 + useTheme composable(cookie 持久化、SSR 無閃爍)+ 兩 layout 色票圓點切換鈕,**元件零修改**,證明元件化換膚成立。輪播可讀性遮罩改 color-mix(var(--fs-bg)) 雙主題通用。

- **搜尋雙元件**(擁有者需求,採藍瓶版):①SearchOverlay——header 放大鏡 → 全頁覆蓋層右→左滑入(0.35s),搜尋框(自動聚焦)+ 熱門分類 chips + 推薦靈感三卡;Enter 帶 ?q= 跳 generator 預填角色池搜尋;Esc/✕ 關閉、開啟時鎖 body 捲動;②SearchPanel——Apple 式頂部下拉半屏(大搜尋框 + 快速連結 + 背景壓暗),收元件庫備用未接線。兩 layout 均接 Overlay。

- **bluebottle 主題微調**(擁有者五點):accent 換 #02a8e0(輪盤/按鈕 token 自動跟)、白版輪播關光暈(CSS 一行)、02 轉場白版改平行斜切+此後全白底(GradientSection 主題分支)、02 卡片白版純 #02a8e0、03 書架卡白版金屬藍光+原深底(cardFallback 函式分支)。深色版全部不動。

- **SearchOverlay v2**(擁有者兩點):①間距重排對齊藍瓶呼吸感(px-6/10、段落 mt-16、標題 text-xl、卡格 gap-6);②搜尋邏輯改**即時過濾不跳轉**——無輸入=熱門分類+熱門靈感,輸入中下方即時顯示符合卡片(標題+風格名比對)、無結果有提示,點卡片才跳詳細頁。六張示範靈感卡抽成共用常數 demoInspirations(ShelfSection/SearchOverlay 共用),新元件 InspirationCard(白版 #02a8e0)。

- **bluebottle 微調 v2**(擁有者五點):①03 書架卡白版改深灰純色 #2f3033(金屬藍光顯濁棄用);②02 卡片白版去黑漸層字幕條,素色 + 白標題 + 灰內文(kicker 在藍底改白);③01 圖文視覺占位白版改 #02a8e0 純色(CSS story-visual);④**對齊修正**:FeatureStorySection 版心 max-w-5xl→6xl,與章節大標題左緣對齊(「卡」的根源);⑤白版 02 斜切反向為右高左低。

- **cinema(深色版)色彩定案**(擁有者四點):①預設主題維持 cinema(cookie 預設本即如此);②01 圖文卡改黃(accent 純色,accentStrength 光暈參數移除);③02 標題改黃、大卡深灰 #2a2b2e、四小卡黃底深字;④03 書架卡白(#f5f2ec)/黃(accent)純色交替,sm 卡內文字配深色。白版(bluebottle)全部不受影響。

- **靈感產生器淺色版樣式**(擁有者):①角色卡(三頁籤共用)底色改灰 #e2e1dc,選取/hover 邊框變藍(accent);②風格與場景卡改深灰純色 #2f3033,hover 整卡變藍;深色版漸層樣式不動。③首頁 02 卡片 hover 放大確認兩主題皆生效,大卡幅度 1.02→1.03。

- **產生器互動補強**(擁有者):①再次點選已選角色=取消選取(自欄位移除;鎖定欄位受保護),空欄位優先補位維持;②淺色版 Slot 圓圈底色改 #02a8e0(深色版色相球不動)。

- **Reveal 改重播**(擁有者定版,覆寫 motion spec「觸發一次」預設):useReveal 改為進出視口即切換——每次滾回來都重播漸入;離開時同步重置(帶退場感)。單點修改,RevealSection 包覆的所有區塊(01/02 圖文、書架、輪盤)全數生效。書架卡另改黃白白循環。

- **書架卡定版**:補第 7 張示範卡(黃昏頂樓演唱會),一黃一白交替(7×2=14,loop 接縫不重色);另分享頁淺色版改藍卡、書架預設置中(Embla align center)、01 文字欄靠上對齊。
- **Wave 3 完成**(擁有者核准開工):①/collection——收藏 grid(2/3/4 欄 RWD)+ 搜尋/狀態篩選 + CollectionCard(狀態 badge)+ BaseSheet 詳情(可帶進產生器)+ BaseEmptyState 空態;②/collection/new——欄位對齊 data-model 的靜態表單(類型/狀態/標籤 chips、照片區佔位、儲存待 API);③/history——InspirationCard(升級為 Base 共用)+ 儲存日期;④/login——正式表單(登入待帳號系統);示範資料 demoCollection 對齊 figures 表。五頁全部脫離佔位,PRE-008 標已完成。

- **PRE 閘門六份初稿完成**(擁有者指示依序做):007 User Flow(五流程 Mermaid,依實作頁面繪製)、006 靈感模板 150 組(場景40/情緒25/任務50/命名35+組合公式)、002 訪談大綱(配額+腳本+記錄表)、003 競品調研(WebSearch:MFC/LearnPhoto365/AI文案工具——三賽道交集為空,差異化成立)、010 驗證計畫(10 指標紅黃綠門檻+8週+Pivot 對應)、005 種子資料(模板+50 筆示範批,待擁有者收藏補滿)。roadmap 各項轉「暫定(待審)」。

- **接線前工程準備**(不受 PRE 閘門限制):①OpenAPI 契約 v0.2.0 完整化——auth/figures(含 photo multipart)/tags/inspiration 全endpoint、分頁慣例、統一錯誤 schema、抽選參數(mode/count/lockedFigureIds/style…)、AI 回退語意(aiGenerated=false);endpoint-summary 改「契約/實作」雙欄。②種子資料機器可讀化:inspiration-templates.json(規則引擎直接吃)+ figure-seed-data.csv(48 筆,對齊 figures 表欄位)。

## 2026-07-12(續)

### Done

- **PRE-007 拍板**(擁有者引導審閱,三題皆非簡單是非題,擁有者提出關鍵工程考量):
  1. 訪客免登入生成 → **裝置配額制**(cookie 追蹤每裝置 1 次真實 AI 呼叫,而非無限開放或全鎖登入)。擁有者主動指出商業化後每次生成即成本,不能無限開放——已寫入 user-flow.md Flow A 與 security-guideline.md 防濫用章節。
  2. 照片是否必填 → 擁有者澄清真正問題是「AI 要怎麼辨識模型」而非顯示;查證 ADR-0003(v1 AI 純文字、不讀圖)後,**照片維持選填,改為 series/character_name/tags 三選一必填**——寫入 api-spec.md 驗證規則 + error-code-spec.md 新增 FIG_003。
  3. 分享頁署名 → 預設顯示 display name。
  - user-flow.md「待決」章節轉為「決策紀錄」;roadmap PRE-007 標記已完成。
- 釐清 `/codex:review` 不存在(現有 codex 系列僅 rescue/setup,皆非文件審閱用途);self-prompting 技能評估後判定不適用於「引導審閱既有文件」此類任務(其設計是生成迴圈,非審閱迴圈)。

- **PRE-010 拍板**:Activation 門檻下調(≥50%→≥35%,理由:新產品第一波小樣本不宜用過高門檻誤判失敗,黃/紅區間同步下移維持原級距);樣本規模與時程(8 週、100 人)確認可行;付費訊號門檻(≥30%)採用建議值。roadmap 標記已完成。**PRE 閘門進度 2/6**(007、010 已完成)。

- **PRE-003 審閱 + 延伸討論**:擁有者提出實務痛點(海外觀眾常反覆問「這是哪隻/哪牌」)並質疑自由文字建收藏的風險(易錯、易混入盜版)。給出風險並陳的回饋後,記錄新 backlog 文件 [canonical-catalog-backlog.md](research/canonical-catalog-backlog.md):混合制構想(目錄搜尋優先 + 找不到才自訂新增待比對),含風險評估(維護成本、長尾覆蓋、Activation 衝擊、爬蟲法遵)與資料來源選項(不做決定)。competitor-analysis.md 補 MFC 白話註解、修正行動建議 1;interview-guide.md 加兩題白話新題(資料辨識痛點頻率、盜版觀感),取代原本生硬的「你用過 MFC 嗎」;roadmap 新增「討論中(不阻擋現行進度)」章節收錄此項。PRE-003 標記已完成。**PRE 閘門進度 3/6**(003、007、010)。

## 2026-07-12(續二):圖片授權決策 + 靈感模板 v2

### Done

- **歸檔新法務決策文件**:擁有者提供「圖片搜尋、AI 靈感生成商業化與侵權風險決策」md(v1.0),完整解碼歸入 [policy/image-rights-and-commercialization-decision.md](policy/image-rights-and-commercialization-decision.md)(21 節:圖片使用風險分級、rights_status 資料設計、UGC 政策、訂閱/廣告風險、上線前 12 份法遵文件)。新增 **ADR-0005**(圖片來源與 AI 視覺輸入政策——僅限已授權/自製/使用者上傳,與 ADR-0003 純文字 AI 互相印證)。串接 security-guideline.md(UGC 政策段)、error-code-spec.md(FIG_004)、api-spec.md、user-flow.md Flow C。roadmap 新增「上線前必要文件」12 項清單(與 PRE 閘門不同層級,商業化開放前門檻,不阻擋 MVP 開發)。
- **Q1 拍板**:照片上傳同意聲明是**表單內 inline checkbox**,不是獨立問卷頁,只在選擇上傳時出現,未勾選回 FIG_004。
- **Q3 拍板**:PRE-005 種子資料改由擁有者私下爬蟲 + 自行正規化,完成後交付匯入(不由我代辦)。**關鍵盲點已標注**:文字/結構化資料可爬(呼應 ADR-0005 允許清單),商品照片不可爬取存放代管顯示(直接落在禁止清單),目錄圖片欄位建議用 LINK_ONLY 或留空。已更新 canonical-catalog-backlog.md。
- **Q2 完成**(最大工程):擁有者提出「四種拍攝類型」構想(電影感/致敬原作/搞笑/主題先行選角),分析後定位:電影感是視覺風格層、其餘三種是選角邏輯層。識別出需要 3 個新標籤維度(ability_tags/personality_tags/archetype_tags)。WebSearch 三輪驗證真實參考:Homage Cover(漫畫業界跨媒介致敬傳統,DC 已有先例)、@hotkenobi(真實模型攝影師同好)、Power Trio/Five-Man Band(TVTropes 團隊分工原型)、Femme Fatale Spy(黑寡婦為範例,驗證擁有者的「女特務三人組」發想)、Odd Couple/Red Oni Blue Oni(搞笑配對公式)。產出 [seed/inspiration-modes.md](seed/inspiration-modes.md):4 模式選角邏輯、homage_moves 庫(12 組)、team_concepts 庫(9 組)、整體流程 Mermaid 圖。

### Next

- 擁有者:續審靈感模板 v2、審其餘初稿(訪談大綱/種子資料)、私下完成爬蟲交付文字資料、執行訪談。
- 前端:接 API(待 PRE 閘門完成 + 後端 P0);Loading/Error 態屆時補。

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
