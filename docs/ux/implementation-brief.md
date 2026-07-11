# FigureShot Lab｜Implementation Brief for Claude Code

## 1. 專案目標

請根據本資料包，為 FigureShot Lab 設計與實作一套可直接開發的前端 UI 方案。產品定位為：

> 模型收藏管理 + 靈感產生器 + 角色配對／組隊 + 攝影企劃工具

核心風格：

- **Cinematic Figure Photography**：電影感模型攝影
- **Modern Character Selection**：角色配對與組隊感
- **Minimal Creative Workspace**：簡約但好操作的創作工作台

## 2. 關鍵頁面

### Landing
- 首頁滿版 Hero
- 一句話破題
- 明確 CTA：`Start Creating` / `Explore Inspirations`
- 逐段功能敘事：Build your team / Generate a scene / Turn figures into stories

### Generator
- 核心頁面
- 中央角色池
- 左右或上下 Slot 顯示已選模型
- 支援 `Pair / Squad / Crossover`
- 提供搜尋、篩選、Lock、Randomize、Generate
- 在生成前就要讓使用者感受到角色配對與組隊感

### Style / Scene Selection
- 攝影風格、情緒、場景、互動模式
- 以圖片導向選擇，不只靠文字

### Result
- 顯示組合結果、主題、拍攝建議、文案與後續動作
- 風格偏電影感與編輯提案感

## 3. 最終視覺收斂

不要把所有參考來源平均混合。

最終風格請收斂為：

1. **Apple Vision Pro**：首頁破題與資訊層級
2. **Gentle Monster**：電影感與品牌世界觀
3. **Hero Team Character Select**（整合 Marvel vs. Capcom + Marvel Rivals）
   - 角色配對
   - 角色池
   - 左右對峙／組隊感
   - 3 對 3 或多角色組合感
4. **Teenage Engineering**：Generator 工作台與控制器感
5. **Nothing**：淺色科技感備選
6. **Leica Looks**：攝影風格選擇與預覽
7. **Interface In Game**：補充特定 UI 佈局案例

## 4. Hero Team Character Select 命名規則

由於本專案同時參考了 Marvel vs. Capcom 的經典選角畫面與 Marvel Rivals 的現代角色資訊層級，請統一使用下列中性名稱：

- **Hero Team Character Select**
- **Character Pairing / Team-Up Reference**

不要在實作說明中誤把整個區塊只稱為 Marvel vs. Capcom 或只稱為 Marvel Rivals。

## 5. 動畫與互動：必須納入

本次實作**必須納入動畫效果設計**，不能只做靜態排版。尤其要涵蓋：

- 首頁 Hero 進場
- 捲動時上下滑動的 Reveal 動畫
- 卡片 Hover
- 角色選中與放入 Slot
- 大型角色預覽切換
- 風格與場景選擇切換
- 生成結果出現

詳細規格請看：
`docs/ux/motion/motion-interaction-spec.md`

## 6. 參考圖片歸檔要求

若將本資料包帶入正式 repo，請把所有圖片都歸檔，結構如下：

```text
docs/
└─ ux/
   ├─ references/
   │  ├─ landing/
   │  ├─ character-select/
   │  ├─ workspace/
   │  ├─ style/
   │  └─ archive/
   ├─ motion/
   ├─ visual-reference-guide.md
   ├─ implementation-brief.md
   └─ claude-code-task-prompt.md
```

其中：
- `references/` 放已收斂的主參考圖
- `references/archive/` 放原始截圖全量歸檔，不遺失

## 7. 開工前必要關卡

在開始實作前，請先執行：

1. `Visual Reference Gate`
2. `Implementation Readiness Review`

如果缺少任何會影響視覺、互動、資訊架構或 RWD 的資料，請先列出缺漏，不可直接實作。

## 8. 實作傾向

- 優先保證資訊架構清晰與配對感
- 動畫使用 `transform` + `opacity` 為主，避免昂貴或炫技特效
- 支援 `prefers-reduced-motion`
- 行動版不可只是桌機縮小，需重新編排 Slot 與角色池
- 請優先實作桌機與手機兩種狀態
