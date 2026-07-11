# Claude Code 單一總指令｜FigureShot Lab 視覺參考包

請將目前工作目錄視為 FigureShot Lab 專案 Repo，並依下列流程執行。

## 0. 前提

我已提供一份 ZIP 參考包，內容可能包含：

- `README.md`
- `docs/ux/implementation-brief.md`
- `docs/ux/visual-reference-guide.md`
- `docs/ux/motion/motion-interaction-spec.md`
- `docs/ux/claude-code-task-prompt.md`
- `IMAGE_IMPORT_INSTRUCTIONS.md`
- 參考圖片縮圖或圖片索引
- 另有一份原始參考圖片 ZIP，保存所有網站與遊戲畫面截圖

你必須先讀取這些文件，再做任何 UI／UX 或前端實作。

---

## 1. 先整理 ZIP 與圖片

### 1.1 解壓與歸檔

如果文件 ZIP 尚未解壓，先解壓到 Repo 根目錄。

如果原始參考圖片 ZIP 尚未解壓，請將所有圖片完整歸檔到：

```text
docs/
└─ ux/
   └─ references/
      ├─ landing/
      ├─ character-select/
      ├─ workspace/
      ├─ style/
      └─ archive/
```

歸檔規則：

- `landing/`
  - Apple Vision Pro
  - Gentle Monster
  - Nothing
- `character-select/`
  - Marvel vs. Capcom
  - Marvel Rivals
  - 角色選擇、角色配對、Team-Up、Squad、3v3 畫面
- `workspace/`
  - Teenage Engineering
  - Interface In Game
  - 控制器、工作台、HUD、模組化操作介面
- `style/`
  - Leica Looks
  - 攝影風格、濾鏡、視覺模式
- `archive/`
  - 保存全部原始截圖
  - 不可刪除未被選為主參考的圖片

請使用可理解且穩定的英文檔名重新命名主參考圖，例如：

```text
apple-vision-pro-hero.png
gentle-monster-campaign-hero.png
nothing-light-tech-layout.png
hero-team-character-select-classic.png
hero-team-character-select-modern.png
hero-team-character-detail.png
hero-team-teamup-lineup.png
teenage-engineering-controls.png
leica-style-grid.png
```

原始檔仍須保留在 `archive/`。

---

## 2. 先讀取指定文件

請依序讀取：

1. `README.md`
2. `docs/ux/implementation-brief.md`
3. `docs/ux/visual-reference-guide.md`
4. `docs/ux/motion/motion-interaction-spec.md`
5. `docs/ux/claude-code-task-prompt.md`
6. `IMAGE_IMPORT_INSTRUCTIONS.md`（若存在）

讀取後，不要立刻寫頁面。

---

## 3. 執行 Visual Reference Gate

請先檢查以下內容是否足夠：

### 3.1 頁面與產品目標

- Landing 的目的是否清楚
- Generator 的核心流程是否清楚
- Style / Scene Selection 的目的是否清楚
- Result 頁的輸出內容是否清楚
- Pair / Squad / Crossover 的差異是否清楚

### 3.2 視覺參考

- 是否有首頁滿版 Hero 參考
- 是否有電影感 Campaign 參考
- 是否有角色池與角色配對參考
- 是否有 3 人隊伍或 3v3 參考
- 是否有工作台與控制器參考
- 是否有攝影風格卡片參考
- 是否有桌機與手機版考量

### 3.3 每張主參考圖

確認每張圖是否有：

- `Use for`
- `Keep`
- `Avoid`
- `Transform`
- `Priority`
- `Responsive Note`
- `Interaction Note`
- `Copyright Note`

### 3.4 動畫規格

確認是否已理解：

- Hero 進場
- 上下滑動 Reveal
- Section reveal
- 卡片 Hover
- 角色選中
- 放入 Slot
- Lock / Unlock
- Randomize
- 大型角色預覽切換
- Style / Scene 預覽切換
- Result 面板出現
- Loading / Empty / Error / Disabled
- `prefers-reduced-motion`

### 3.5 不得直接實作的情況

若缺少任何會影響：

- 資訊架構
- 視覺方向
- 互動流程
- 動畫
- RWD
- 元件責任
- 圖片歸檔

的重要資料，請先停止實作，列出缺漏清單並提醒我補充。

不得自行猜測核心決策後直接開發。

---

## 4. 先輸出 Implementation Readiness Review

請先回報以下內容：

```md
# Implementation Readiness Review

## 1. 已理解的產品目標
- 

## 2. 預計實作的頁面
- Landing
- Generator
- Style / Scene Selection
- Result
- 其他必要頁面

## 3. 預計採用的版面結構
- 

## 4. 預計建立的元件
- 

## 5. 參考圖與畫面對應關係
- Apple Vision Pro →
- Gentle Monster →
- Nothing →
- Hero Team Character Select →
- Teenage Engineering →
- Interface In Game →
- Leica Looks →

## 6. 動畫與互動落點
- 

## 7. RWD 處理方式
- 

## 8. 已完成的圖片歸檔
- 

## 9. 尚缺資料
- 

## 10. 存在衝突的參考
- 

## 11. 需要我確認的決策
- 
```

在我確認之前，不要開始正式頁面實作。

---

## 5. 最終視覺收斂原則

不要平均混合所有參考網站。

請以以下權重實作：

### 核心參考

1. Apple Vision Pro
   - 首頁滿版 Hero
   - 資訊層級
   - 簡短 CTA
   - 捲動敘事

2. Gentle Monster
   - 電影感
   - Campaign 世界觀
   - 高質感模型攝影呈現
   - Result 頁氛圍

3. Hero Team Character Select
   - 這是統一名稱
   - 同時整合：
     - Marvel vs. Capcom 的經典選角、左右對峙、角色池、配對張力
     - Marvel Rivals 的現代角色資訊、熱門角色詳情、Team-Up 與隊伍關係
   - 不可只理解成某一款遊戲的複製版

4. Teenage Engineering
   - Generator 工作台
   - 操作器、按鈕、Lock、Randomize、模式切換
   - 模組化但簡約的工具感

### 輔助參考

5. Nothing
   - 淺色科技感
   - 黑白高對比
   - 非深色介面的備選

6. Leica Looks
   - 攝影風格卡片
   - 影像導向的風格選擇
   - Style / Scene 預覽

7. Interface In Game
   - 只用於補充特定遊戲 UI 佈局
   - 不作為整站主風格

---

## 6. 頁面實作要求

### 6.1 Landing

必須包含：

- 滿版 Hero
- 模型攝影主視覺
- 清楚破題
- 簡短副標
- `Start Creating`
- `Explore Inspirations`
- 往下捲動後的功能敘事

首頁必須同時做到：

- 第一眼驚艷
- 第一眼看得懂是模型攝影靈感平台
- 不可只剩藝術感而失去用途
- 不可做成一般 AI SaaS Dashboard

### 6.2 Generator

必須包含：

- 搜尋
- 篩選
- 角色／模型池
- 大型角色預覽
- Slot
- Pair
- Squad
- Crossover
- Lock
- Randomize
- Generate

UX 必須明確表現：

- 誰被選中
- 誰和誰配對
- 哪一隻被鎖定
- 哪一隻會被重抽
- 目前是 1 人、2 人、3 人或隊伍模式
- 角色選擇後的配對張力

### 6.3 Style / Scene Selection

必須：

- 以圖片預覽為主
- 不能只使用下拉選單
- 可選攝影風格、場景、情緒、互動模式
- 選中後要有明確視覺回饋

### 6.4 Result

必須顯示：

- 模型組合
- 主題名稱
- 場景
- 情緒
- 互動關係
- 拍攝建議
- 構圖／光線／道具
- AI 生成文案
- 儲存／重抽／分享等後續操作

視覺要接近：

- 電影劇照
- Campaign
- 創作提案
- 不要只是普通表單結果頁

---

## 7. 動畫實作要求

詳細依據：

`docs/ux/motion/motion-interaction-spec.md`

最低必須實作：

### Landing

- Hero 背景 scale-in
- 標題與 CTA stagger reveal
- 區塊由下往上的 scroll reveal
- 圖片與文字的淡入／位移
- 輕量 scroll hint

### Generator

- 卡片 Hover
- 選中狀態
- 角色放入 Slot
- 大型預覽 crossfade
- Lock 微動態
- Randomize 回饋
- Result 面板滑入

### 技術限制

- 優先使用 `transform` 與 `opacity`
- 避免大量 reflow
- 避免過重動畫套件
- MVP 可先使用 CSS transition + IntersectionObserver
- 如為 Vue / Nuxt，可搭配 `@vueuse/core`
- 必須支援 `prefers-reduced-motion`

---

## 8. RWD 要求

不可只把桌機版縮小。

### 桌機版

- 中央角色池
- 左右大型預覽或 Slot
- 側邊設定面板
- 清楚的多欄結構

### 平板版

- 大型預覽縮小
- 角色池仍為主要操作區
- 設定區可收合

### 手機版

- 角色池優先
- Slot 固定在頂部或底部
- 詳情使用 Drawer / Bottom Sheet
- 操作按鈕保持可觸控尺寸
- 動畫減量

---

## 9. 版權與轉化限制

不可直接複製：

- Apple 品牌視覺
- Gentle Monster Campaign 素材
- Nothing 專屬品牌元素
- Teenage Engineering 工業設計
- Marvel vs. Capcom 角色與 UI
- Marvel Rivals 角色與 UI
- Leica 作品圖片
- 任何 Logo、商標、專屬字體、角色圖

只能借用：

- 資訊架構
- 版面比例
- 操作邏輯
- 視覺層級
- 配對感
- 動畫節奏
- UX 模式

---

## 10. 實作完成後自我檢查

完成初版後，請逐項回報：

- 是否保留 FigureShot Lab 的模型攝影形象
- 是否有清楚的角色配對與組隊感
- 是否支援 Pair / Squad / Crossover
- 是否有首頁滿版破題
- 是否有上下滑動 Reveal 動畫
- 是否有角色選中與 Slot 動畫
- 是否有圖片導向的風格選擇
- 是否有桌機、平板、手機版
- 是否有 Loading / Empty / Error / Disabled
- 是否支援 reduced motion
- 是否避免照抄參考網站與遊戲
- 是否所有圖片都已歸檔
- 是否有遺失原始參考圖

---

## 11. 最終執行順序

請嚴格依下列順序：

```text
解壓文件包
→ 解壓與歸檔原始圖片
→ 讀取所有規格 MD
→ 執行 Visual Reference Gate
→ 輸出 Implementation Readiness Review
→ 等待我確認
→ 拆頁面與元件
→ 建立 Wireframe / Layout
→ 實作靜態 UI
→ 實作互動與動畫
→ 完成 RWD
→ 自我檢查
→ 回報結果
```

不要跳過確認關卡。
