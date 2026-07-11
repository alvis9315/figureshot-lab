# RWD Guideline

## 策略

Mobile-first;breakpoint 只用 Tailwind 預設(sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536),不可另創。

依 spec 10.0:**手機端主體驗 = 輪盤 + 快速生成;桌機端主體驗 = 收藏管理與編輯**。

## Layout 變形規則

| 區塊 | 手機 | 桌機 |
|---|---|---|
| 導覽 | 底部或 hamburger | 頂部橫列 |
| 收藏庫 | 單欄卡片列表 | md 2 欄 / lg 3~4 欄 grid |
| 收藏表格資訊 | 卡片(名稱+廠牌+狀態,其餘進 detail) | 完整欄位 |
| 輪盤/結果頁 | 滿版直式、單手可操作 | 置中窄欄 |
| 表單 | 單欄 | 可雙欄但不犧牲可讀性 |
| Modal | bottom sheet / 滿版 drawer | 置中 modal |

## 圖片

收藏照與 Showcase 用 srcset/sizes + lazy;手機不載桌機大圖。

## Typography

rem 基準;標題 clamp();不用純 vw 當內文字級;不擋使用者縮放(viewport meta 不加 user-scalable=no)。

## 測試清單(完成畫面前必檢)

375 / 390 / 768 / 1024 / 1280px;無整頁橫向捲軸;按鈕可點面積足夠;zoom 200% 可操作。

## 禁止

只做桌機版;元件自定 breakpoint;固定寬度爆版;table 手機版無策略;CSS scale 縮小當 RWD。
