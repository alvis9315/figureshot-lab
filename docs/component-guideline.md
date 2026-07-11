# Component Guideline(元件判定、擺放與新增機制)

> 核心原則:**模組化**——元件是積木,結構與風格分離(樣式只走 design token),換風格不動結構。
> 本檔是「什麼該做成元件、放哪、怎麼新增」的唯一裁判;新增元件必須走本檔流程並登記。

## 1. 元件三層分級

| 層 | 位置 | 定義 | 例子 |
|---|---|---|---|
| **Base 層** | `app/components/common/` | 無業務語意、只吃 props/emit、樣式 100% 走 token;全站可用 | BaseButton、BaseInput、BaseCard、BaseModal、BaseTag |
| **Feature 層** | `app/features/<feature>/components/` | 含業務語意,只服務該 feature;內部組合 Base 元件 | FigureCard、TagPicker、WheelSpinner、InspirationResult |
| **Layout 層** | `app/layouts/` | 頁面殼:header、footer、導覽 | default.vue、empty.vue |

`app/pages/` 只做「組裝」:排列 feature 元件 + 傳資料,不寫可重用 UI。

## 2. 什麼該做成元件(判定規則)

依序判斷,命中即抽:

1. **重複律**:同一塊 UI 第 2 次出現(或已確定會重複)→ 必須抽元件;不等第 3 次。
2. **語意律**:有獨立語意、可獨立描述 props 與行為的單位(一張卡片、一個表單欄位、一個 modal)→ 抽,即使目前只用一次。
3. **互動律**:有自己的狀態或互動邏輯(輪播、下拉、輪盤動畫)→ 抽,邏輯放同層 composable。
4. **反例**:一次性的頁面 section、純排版組合(hero 區的排列)→ **不抽**,留在 page;過度抽象也是維護債。

## 3. 層級判定與升級規則

- 判定問句:「這個元件的 props 裡有沒有業務名詞(figure、tag、session)?」有 → Feature 層;沒有 → Base 層。
- **升級**:Feature 元件被第二個 feature 需要時,把「無業務的殼」抽去 Base 層,業務部分留在原 feature 包裝它。禁止直接跨 feature import 別人的元件。
- **降級禁止**:Base 元件不得 import feature 的任何東西(store、api、型別)。

## 4. 命名與檔案規則

- Base 層一律 `Base` 前綴(BaseButton.vue);Feature 層用業務名詞(FigureCard.vue);一檔一元件。
- props 必須有 TypeScript 型別;事件用 emit,不直接改 props。
- 樣式只用 Tailwind utility + token(`fs-*` 色);**禁止在元件裡寫死色碼、字級、間距的 magic number**。

## 5. 新增元件 Checklist(每次照跑)

1. 查第 7 節登記表——已有可用元件就不重造(可加 variant)。
2. 依第 2、3 節判定「該不該抽」與「放哪層」。
3. 樣式檢查:只用 token,無 magic number。
4. RWD:元件自己處理容器寬度行為(見 rwd-guideline.md)。
5. i18n:元件內文案走 `$t()`,不硬編。
6. **登記**:在第 7 節表格加一列(名稱、層級、用途、使用處)。
7. commit 訊息:`feat(ui): add BaseXxx` / `feat(<feature>): add XxxCard`。

## 6. 與風格的分離保證

元件結構(HTML/props/行為)與視覺(token)分離:風格定案或改版時,只改 `assets/styles/main.css` 的 token 與 ui-style-guide.md,元件不動。若某次改風格必須動元件結構,代表元件把樣式寫死了——先修元件,再改風格。

## 7. 元件登記表(新增必登記)

| 元件 | 層級 | 用途 | 使用處 |
|---|---|---|---|
| BaseButton | Base | 按鈕(primary/ghost/outline × md/lg,可作連結) | 全站 |
| BaseTag | Base | 標籤 / 篩選 chip(active 態) | generator 篩選、結果標籤 |
| layouts/landing | Layout | 透明 header 疊滿版 Hero 的首頁殼 | / |
| HeroCarousel | Feature(landing) | 滿版破題輪播(3 張、自動播放 5s、hover 暫停、圓點/箭頭、reduced-motion 不自動播);取代原 HeroSection | / |
| RevealSection | Base | 滾動漸入標準容器(包住任何區塊即得 reveal;動畫模組化入口) | / 各區段 |
| AngledSection | Feature(landing) | 斜切亮暗色帶 + 超大章節標題(轉場區塊;slant/tone 交替) | / ×3 |
| FullBleedBlock | Feature(landing) | 直角滿版 + 無框編輯式文字(accent 豎線;支援 image) | 備用(未上場) |
| GradientSection | Feature(landing) | 細緻暖階漸層轉場 + 大章節標題(v2) | / 02 段 |
| BaseShelf | Base | 水平慣性櫥窗 v2:Embla(loop 無限循環 + dragFree 摩擦減速,iPhone 相簿手感) | ShelfSection,未來收藏列 |
| MediaShowcaseSection | Feature(landing) | 一大圖 + 四小圖櫥窗(文字壓圖內 + hover 放大) | / 02 段 |
| ShelfSection | Feature(landing) | 標題 + 慣性卡片櫥窗;size 變體:sm 直幅小卡 / lg Apple 式大卡+圖下說明 | / 03 段(lg) |
| BaseMedia | Base | 圖/影媒體格:video 附圓形播放/暫停鈕,無素材吃 fallback 漸層 | 櫥窗卡,未來收藏照/大圖 |
| PinnedStorySection | Feature(landing) | 定格滾動敘事(sticky pin + 滾動進度驅動文字穿越;reduced-motion 靜態) | / 宣言段 |
| TheFooter | Layout | 正式 footer:品牌 + 產品/帳號/社群欄 + 版權細字(Apple 式) | 兩個 layout |
| SearchOverlay | Feature(search) | 藍瓶式全頁搜尋:右→左滑入覆蓋、搜尋框+熱門分類+推薦靈感、Esc 關閉、q 帶入 generator | 兩個 layout(採用中) |
| SearchPanel | Feature(search) | Apple 式搜尋:頂部下拉半屏、大搜尋框+快速連結、背景壓暗 | 備用(未接線) |
| FeatureStorySection | Feature(landing) | 單段功能敘事(scroll reveal,可翻轉) | / ×3 |
| QuickSpinSection | Feature(landing) | 輪盤快抽入口(擁有者決策:輪盤意象放首頁) | / |
| ModeSwitch | Feature(generator) | Pair / Squad / Crossover 切換 | /generator |
| FigureCard | Feature(generator) | 角色池占位卡(hover / 選中態) | /generator |
| SlotCard | Feature(generator) | Slot(空/滿態、crossfade、Lock 脈衝) | /generator |
| GeneratorControls | Feature(generator) | 搜尋 + 篩選 + Randomize + Generate 控制列 | /generator |
| ResultPanel | Feature(generator) | 結果滑入面板(編輯感版面,吃 StyleSelection) | /generator |
| BaseSheet | Base | 手機 bottom sheet / 桌機 modal 容器 | 角色詳情,未來 filter drawer |
| StyleCard | Feature(style) | 風格卡(預覽圖導向、hover 提亮、選中態) | /generator 風格區 |
| StyleScenePicker | Feature(style) | 風格 4 卡 + 場景/情緒/任務 tag 群(v-model) | /generator |
| CharacterDetailPanel | Feature(generator) | 角色詳情(BaseSheet 內,切換 crossfade) | /generator |

共用 composable:`useReveal`(IntersectionObserver 滾動進場,搭 .reveal/.reveal-in;reduced-motion 安全)。
