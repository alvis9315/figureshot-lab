# UI Style Guide

## 選型

- **Tailwind CSS 唯一樣式系統**;禁止引入 Element Plus / Naive UI / Bootstrap 等任何 UI library(ADR 前提:Cinematic Editorial Workspace 是高度客製視覺)。
- design token 集中兩處:Tailwind theme(`@theme`,見 assets/styles/main.css)+ CSS variables;禁止散落覆寫。

## 視覺基調(spec 10.0,Moodboard PRE-004 定稿前為暫定 token)

- 深色 cinematic 基調:近黑背景、暖白文字、單一強調色(amber 系,攝影棚燈感)。
- 大量留白與大圖 Showcase;避免企業 SaaS 儀表板感。
- 字階:標題用 clamp() 流動字級;內文 16px 基準。

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
