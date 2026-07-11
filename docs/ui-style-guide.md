# UI Style Guide

## 選型

- **Tailwind CSS 唯一樣式系統**;禁止引入 Element Plus / Naive UI / Bootstrap 等任何 UI library(ADR 前提:Cinematic Editorial Workspace 是高度客製視覺)。
- design token 集中兩處:Tailwind theme(`@theme`,見 assets/styles/main.css)+ CSS variables;禁止散落覆寫。

## 視覺基調(spec 10.0,Moodboard PRE-004 定稿前為暫定 token)

- 深色 cinematic 基調:近黑背景、暖白文字、單一強調色(amber 系,攝影棚燈感)。
- 大量留白與大圖 Showcase;避免企業 SaaS 儀表板感。
- 字階:標題用 clamp() 流動字級;內文 16px 基準。

## 配色方案(2026-07-12 起雙主題)

| 主題 | 定位 | token 值 |
|---|---|---|
| `cinema`(預設) | 深色電影感 | 近黑底 / 暖白字 / 暖橘 accent |
| `bluebottle` | 白底鈷藍(比例 60% 白 / 30% 藍 / 10% 深灰;參考 Blue Bottle 只取色彩元素) | `#fbfaf6` 底 / `#2f3033` 深灰字 / `#2149c1` 鈷藍 accent |

機制(token 化的驗收):換膚 = `main.css` 覆寫 `[data-theme]` 五個變數,**元件零修改**;header 色票圓點切換(圓點顯示切過去的顏色)、cookie 持久化、SSR 首屏即正確主題無閃爍(`useTheme` composable + app.vue 綁 htmlAttrs)。硬編色的例外(卡片深底、名牌條、漸層帶)為刻意跨主題不變項;遮罩一律用 `color-mix(var(--fs-bg))` 調製以雙主題可讀。新增第三主題:加一段變數覆寫即可。

## Generator 頁次風格:現代遊戲選角語彙(2026-07-12 擁有者定向)

擁有者回饋 Generator 太中規中矩,要求遊戲選角化;二選一裁決採**現代遊戲科技感**(hero-team-select-modern / Rivals 路線),不走復古街機(guide 對經典圖的 Avoid 已排除高飽和邊框與老式字體)。語彙:斜切平行四邊形卡(`.fs-skew-card`)、亮底深字名牌條、斜切 tab(`.fs-plate`)、低調斜向掃描紋背景(`.fs-game-bg`)、手機 A **VS** B 對峙。仍在深色電影 token 系統內,MvC 借結構(中央池 + 左右對峙)、Rivals 借皮(幾何與名牌)。此語彙**只用於 Generator**,Landing/Result 維持編輯感,不得全站蔓延。

## Landing 區塊庫與節奏規則(2026-07-12 擁有者提議模組化區塊,採納)

**區塊庫**(全部 token 驅動、共用 reveal 動畫、斜切角度統一 3rem,與 Generator 斜切語彙呼應):

| 區塊 | 職責 | 參考來源 | 狀態 |
|---|---|---|---|
| HeroCarousel | 滿版破題輪播 | Apple / GM | ✅ |
| AngledSection | **轉場**:斜切亮暗交替色帶 + 超大章節標題 | Rivals 角色詳情頁 | ✅ |
| FeatureStorySection | **說明**:圖文並茂交替列(tone 亮暗) | Apple / Leica | ✅ |
| FullBleedBlock | 直角滿版 + 無框編輯式排版(備用,現未上場) | Nothing / Rivals | ✅ |
| GradientSection | **轉場**:細緻暖階漸層(米→暖褐→深棕→黑,多停點;灰階直混死灰已棄用) | 擁有者堅持漸層 | ✅ v2 |
| MediaShowcaseSection | **展示**:一大圖 + 下排四小圖 | Apple Fitness+(擁有者追加) | ✅ |
| ShelfSection + BaseShelf | **櫥窗**:標題 + 慣性滑動卡列(momentum scrolling + snap 緩停) | Apple News(擁有者追加) | ✅ |
| QuickSpinSection | 輪盤快抽收尾 | — | ✅ |
| StoryStrip 連環故事段 | 教學/品牌敘事 | Teenage Engineering 漫畫頁 | ⏸ 待插畫素材才建,適合未來「怎麼玩」頁,不進首頁 |

**組合規則(2026-07-12 擁有者修訂:要新鮮感,不要重複)**:
1. **每滑一區換一種手法,同一手法一頁只出現一次**(斜切連用會無聊);轉場手法目前有:斜切(可 closeBottom 成平行四邊形色帶)、光暈溢出、直角滿版。**切邊不得出現在第一屏內**——區塊不與 Hero 重疊。
2. 職責固定:滿版=開場/重點、圖文=說明、斜切/漸層=轉場;不得混用職責。
3. **第一屏(100vh)不得露出下一區塊的切邊**——往下滑才發現新設計,驚喜要藏。
4. 首頁定案節奏(2026-07-12 v7):HeroCarousel(滿版輪播)→ **PinnedStorySection 定格滾動宣言**(scroll-pinning,參考 Apple Vision Pro)→ 斜切亮帶+01 圖文 → 金屬銀漸層+02 大圖小圖 → 03 全寬慣性大卡書架(Embla loop,素面無光)→ QuickSpin(輪盤收尾)。
5. 新頁面要用區塊時從本表選,選不到才提新區塊(並登記 component-guideline)。

**打光與色彩鐵律(2026-07-12 擁有者校正)**:
- 光暈與文字**同側**——光抓焦點,焦點就是文字;禁止光與字反向造成視覺混亂。
- 輪播三色 = 超級英雄紅藍黃:灰藍(hsl 212 38% 56%,提亮)/ 暖黃(36 60% 45%)/ 英雄酒紅(352 58% 42%);禁用紫紅。

## 元件規則

- 重複 pattern 抽成 component;className 不可超長重複貼。
- 基礎元件(Button/Card/Input)放 `components/common/`,做了才建,不預先堆。
- 圖片一律 lazy + 設定寬高避免 layout shift(收藏照片、Showcase 大圖)。

## 禁止

混用 UI library;樣式全塞單一 css;各處自定顏色不走 token。

## 風格定案三關(PRE-004 的執行機制)

擁有者的視覺需求不夠明確時,**不得憑感覺開刻**;由 AI 逐關提問(選項式,非開放題),每關追問上限 2 次,未答部分採現行暫定 token 並標注假設——與 new-project-quickstart 同一套收斂哲學。

**第 1 關:參考與氛圍**
- 2~3 個參考網站 / 作品(各說出喜歡它的哪一點:排版?色調?動態?)
- 深色 / 淺色 / 雙主題
- 電影感濃度:滿版沉浸 ↔ 乾淨工具感,落在哪

> 三關進度(2026-07-12 更新):
> - **第 1 關:已完成**——深色為主、平衡型;參考已由 UX 參考包定案(核心:Apple Vision Pro=資訊層級、Gentle Monster=電影感、Hero Team Character Select=配對感、Teenage Engineering=控制台感;輔助:Nothing、Leica Looks、Interface In Game)。逐張規格見 docs/ux/visual-reference-guide.md。
> - **第 2 關:已完成**——深色 + 電影感 + 訊號色點綴(暖橘 accent)。字體定案(2026-07-12,依參考收斂裁決):**標題 Space Grotesk**(幾何無襯線,self-host)、**內文系統無襯線**(SF Pro / PingFang TC,零下載且 CJK 原生)、**等寬點綴**(控制台標籤選用)。理由:七個參考來源(Apple、Gentle Monster、TE、Nothing、Rivals、Leica)全為無襯線科技/產品語感,無一襯線案例——電影感由影像與留白承擔,不靠襯線字;CJK 不裝 webfont 以顧 Global-first 首載。token:`--fs-font-display / body / mono`。
> - **第 3 關:已完成**——首頁滿版 Hero + 輪盤快抽意象、Generator 角色池+Slot、風格卡圖片導向、Result 同頁滑入面板(2026-07-12 擁有者確認)。

**第 2 關:視覺語言**
- 強調色方向(現行暫定:攝影棚燈暖橘)
- 字體性格:標題襯線感 / 幾何無襯線 / 中性;中英文搭配
- 圓角 vs 銳角、留白密度(雜誌式大留白 ↔ 資訊密集)
- 動效程度:無 / 微互動 / 豐富轉場

**第 3 關:版面原型**
- 首頁 Showcase 形式:滿版大圖 / 網格牆 / 輪播
- 收藏庫卡片樣式:圖優先 / 資訊優先
- 輪盤呈現:擬物轉盤 / 卡片洗牌 / 抽籤動畫

**定稿產出**:①更新本檔(把「暫定」改為定案值);②更新 `main.css` token;③roadmap.md 的 PRE-004 標已完成。之後改風格 = 重走關卡 + 只改 token(結構不動,保證見 component-guideline.md 第 6 節)。
