# Motion & Interaction Spec

## 1. 原則

FigureShot Lab 的動畫要做到：

- 有電影感，但不拖慢操作
- 有科技感，但不過度電玩化
- 有角色配對張力，但仍是工具型產品
- 以 `transform` 與 `opacity` 為主
- 優先考慮效能與可維護性

### 實作建議

MVP 優先採用：
- CSS transition / animation
- IntersectionObserver 觸發 Reveal
- 如使用 Vue / Nuxt，可搭配 `@vueuse/core` 的 `useIntersectionObserver`

除非真的需要複雜場景，不建議第一版就導入重型動畫系統。

---

## 2. Landing 動畫

### 2.1 Hero 進場

- 背景主視覺：
  - 初始：`scale(1.04)` + `opacity: 0.92`
  - 進場至：`scale(1)` + `opacity: 1`
  - 時間：`900ms ~ 1200ms`
  - 緩動：`ease-out`

- 主標題：
  - 初始：`translateY(24px)` + `opacity: 0`
  - 結束：`translateY(0)` + `opacity: 1`
  - 時間：`600ms`

- 副標與 CTA：
  - 同樣使用 `translateY(24px)` + `opacity` reveal
  - 使用 `120ms ~ 160ms` stagger

### 2.2 上下滑動 Reveal（重點）

這是你剛剛特別提到的效果，**現在已納入規格中**。

每個首頁段落（Feature sections）建議：

- 初始：`translateY(32px)` + `opacity: 0`
- 進場：`translateY(0)` + `opacity: 1`
- 觸發：元素進入 viewport 約 15%～25%
- 時間：`500ms ~ 700ms`
- 緩動：`cubic-bezier(0.22, 1, 0.36, 1)` 或近似 smooth ease-out
- 行為：
  - 預設觸發一次即可
  - 不做反覆進出重播

### 2.3 區塊間轉場

首頁可做「上一段視覺收斂，下一段內容滑入」的節奏：

- 上一段圖像略微上移 `translateY(-12px)` 並降低不透明度
- 下一段內容由下方滑入 `translateY(24px -> 0)`
- 避免整頁大幅 parallax

### 2.4 Hero 往下導引

- 可以有一個輕量的 scroll hint
- 使用上下 6px 的往返位移
- 週期約 1.6s
- 透明度 0.55 ~ 1 間變化

---

## 3. Generator 動畫

### 3.1 角色卡 Hover
- `translateY(-4px)`
- `scale(1.02)`
- 外框或陰影顯示選取可能性
- 時間：`140ms ~ 180ms`

### 3.2 角色選中
- 外框顏色切換
- 勾選或狀態標記淡入
- 若有大型預覽，使用 crossfade
- 時間：`120ms ~ 180ms`

### 3.3 放入 Slot
- 建議使用「卡片飛入 Slot」的輕量感受
- 簡化做法：
  - 卡片縮圖淡出
  - Slot 內卡片淡入 + scale from 0.96 to 1
- 時間：`180ms ~ 240ms`

### 3.4 大型預覽切換
- 使用 `opacity` crossfade
- 若切換角色很快，不要整頁震動或大位移
- 可增加輕微 `translateX(8px)` 或 `translateY(6px)` 過渡
- 時間：`180ms ~ 220ms`

### 3.5 Lock / Unlock
- Lock 按下：
  - icon 短暫 scale up 到 1.08 再回 1
  - 或加 1 次微脈衝
- 時間：`120ms ~ 160ms`

### 3.6 Shuffle / Randomize
- 不要做大型轉盤特效
- 建議：
  - 按鈕按下有瞬間壓下回彈
  - 角色池有 150ms 的 loading shimmer 或快速閃切
  - 大型預覽於結果確定後 crossfade

### 3.7 結果面板出現
- 自下方滑入 `translateY(24px -> 0)` + `opacity 0 -> 1`
- 時間：`260ms ~ 320ms`

---

## 4. Style / Scene 選擇動畫

### 4.1 風格卡片 Hover
- 卡片上浮 4px
- 預覽圖亮度增加 4% ~ 8%
- 顯示簡短 style label

### 4.2 風格選中
- 外框改為主題色
- 卡片標題由半透明轉為實色
- 可顯示小型 check 或 `Selected`

### 4.3 預覽切換
- 若右側有大圖預覽，使用 crossfade
- 時間：`180ms ~ 220ms`

---

## 5. 狀態動畫

### Loading
- 使用 skeleton / shimmer
- 不要轉圈圈佔滿畫面
- 結果區可用卡片骨架表示

### Empty
- 可用淡入顯示提示文字與 CTA
- 不需誇張動畫

### Error
- 以簡短 shake 或高亮邊框提醒即可
- 不建議大幅晃動

### Disabled
- 透明度降低
- Hover 效果取消或變弱

---

## 6. RWD 動畫注意事項

### 手機版
- 減少大面積平移
- 優先使用 opacity + 小位移
- Slot 切換或 Drawer 開闔要快速，避免遲滯

### 桌機版
- 可保留較多進場與 crossfade
- 但仍應控制在 200ms ~ 700ms 的體感範圍內

---

## 7. 避免事項

請避免：

- 長時間滾動視差
- 全螢幕閃爍
- 每個元件都動
- 超過 700ms 的常用操作動畫
- 大量使用 `top/left` 改位造成 reflow
- 過度模仿遊戲戰鬥特效

---

## 8. 無障礙

必須支援：

- `prefers-reduced-motion`
- 若使用者偏好減少動畫：
  - 停用大部分位移
  - 保留最基本的 opacity 切換
