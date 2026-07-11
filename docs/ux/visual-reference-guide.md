# Visual Reference Guide
## 使用說明
這份文件將已收斂的參考圖片逐張說明，供 Claude Code 在實作前理解每張圖的用途、可借用元素與不可照抄部分。
## 主參考圖索引
### Apple Vision Pro Hero
- File：`docs/ux/references/landing/apple-vision-pro-hero.png`
- Source URL：https://www.apple.com/apple-vision-pro/
- Use for：Landing 第一屏 Hero
- Keep：
  - 滿版 Hero 比例
  - 一句話破題
  - 主視覺優先、文字極簡
  - CTA 簡短明確
- Avoid：
  - 直接模仿 Apple 視覺品牌
  - 照搬 visionOS 漂浮視窗
  - 過於冷淡的企業感
- Transform：
  - 改為模型攝影主視覺
  - 標題改為 FigureShot Lab 與創作語言
  - CTA 指向 Start Creating / Explore Inspirations
- Priority：High
- Responsive Note：手機版保留主視覺與短標題，CTA 堆疊
- Interaction Note：Hero 進場 + 標題 stagger reveal
- Copyright Note：只參考結構與資訊層級，不複製品牌元素

### Apple Feature Section
- File：`docs/ux/references/landing/apple-feature-entertainment.png`
- Source URL：https://www.apple.com/apple-vision-pro/
- Use for：Landing 功能敘事區段
- Keep：
  - 大標題搭配強視覺
  - 每段只講一件事
  - 捲動時上下 reveal 節奏
- Avoid：
  - 過長文案
  - 多個功能塞在同一段
- Transform：
  - 對應 Build your team / Generate a scene / Turn figures into stories 三段首頁敘事
- Priority：High
- Responsive Note：手機版改為直式堆疊，縮短文案
- Interaction Note：滾動進場以 translateY + opacity reveal
- Copyright Note：僅借用段落節奏

### Gentle Monster Home Campaign
- File：`docs/ux/references/landing/gentle-monster-home-campaign.png`
- Source URL：https://www.gentlemonster.com/
- Use for：Landing 電影感氛圍
- Keep：
  - 滿版影像的世界觀
  - 高質感攝影
  - 畫面先說話，文字後說明
- Avoid：
  - 過度隱晦導致看不出產品用途
  - 只剩時尚感沒有工具感
- Transform：
  - 作為 FigureShot Lab 首頁的電影感來源，但保留清楚破題
- Priority：High
- Responsive Note：手機版聚焦單一主體，不保留過多邊界留白
- Interaction Note：Hero 背景可有輕微 scale in
- Copyright Note：不複製商品或品牌圖像

### Gentle Monster Detail Focus
- File：`docs/ux/references/landing/gentle-monster-detail-focus.png`
- Source URL：https://www.gentlemonster.com/
- Use for：Result 頁與主題頁的高質感構圖
- Keep：
  - 單一主體被強調
  - 編輯感版面
  - 高質感留白與焦點控制
- Avoid：
  - 變成一般購物頁
  - 過度商品化資訊
- Transform：
  - 用於靈感結果頁的主視覺版型
- Priority：Medium
- Responsive Note：手機版以單欄主圖為主
- Interaction Note：進場淡入即可
- Copyright Note：不複製原商品圖片

### Nothing Light Hero
- File：`docs/ux/references/landing/nothing-light-hero.png`
- Source URL：https://nothing.tech/
- Use for：淺色科技感備選
- Keep：
  - 淺底科技感
  - 黑白高對比
  - 訊號色點綴
- Avoid：
  - 整頁過於冷硬
  - 點陣或工業語言過量
- Transform：
  - 用於收藏管理頁或 Landing 淺色版本測試
- Priority：Medium
- Responsive Note：手機版保持高對比與簡潔 CTA
- Interaction Note：區塊切換以簡潔 reveal 為主
- Copyright Note：僅借用配色邏輯與層級

### Hero Team Character Select Classic
- File：`docs/ux/references/character-select/hero-team-select-classic.png`
- Source URL：User collected image based on Marvel vs. Capcom character select
- Use for：Generator 的經典角色池與左右對峙感
- Keep：
  - 中央角色池矩陣
  - 左右大型角色對峙
  - 明確的選角與配對張力
- Avoid：
  - 街機風高飽和邊框
  - 老式字體
  - 只能是 1v1 對戰語意
- Transform：
  - 用於 FigureShot Lab 的 Pair Mode；改為現代簡約角色池 + Slot A / Slot B
- Priority：High
- Responsive Note：手機版角色池優先，Slot 固定在上方或底部
- Interaction Note：角色選中後大型預覽 crossfade
- Copyright Note：不複製角色素材與 UI 細節

### Hero Team Character Select Modern
- File：`docs/ux/references/character-select/hero-team-select-modern.png`
- Source URL：User collected image based on modern character select (Marvel vs. Capcom / Marvel Rivals inspiration)
- Use for：Generator 的現代化選角版型
- Keep：
  - 左右大型角色
  - 中央角色矩陣
  - 清楚的已選狀態
- Avoid：
  - 直接使用原遊戲角色與品牌字樣
  - 過度戰鬥化
- Transform：
  - 作為現代版 Pair / Crossover 模式範本
- Priority：High
- Responsive Note：平板與手機應將大型預覽縮小或移到可收合區
- Interaction Note：Hover、選中、Slot 放入都要明確
- Copyright Note：僅參考資訊架構與狀態邏輯

### Hero Team Character Detail
- File：`docs/ux/references/character-select/hero-team-character-detail-spiderman.png`
- Source URL：https://www.marvelrivals.com/
- Use for：角色詳情面板與熱門角色視覺
- Keep：
  - 大型角色立繪
  - 角色名稱與次要資訊層級
  - 右側或下方詳情卡的做法
- Avoid：
  - 能力數值照搬到 FigureShot Lab
  - 過多遊戲屬性欄位
- Transform：
  - 轉為品牌、系列、比例、標籤、推薦原因等模型資料
- Priority：Medium
- Responsive Note：手機版詳情收進抽屜或底部 sheet
- Interaction Note：切換角色時詳情區 crossfade
- Copyright Note：不複製角色或數據內容

### Hero Team Team-Up Lineup
- File：`docs/ux/references/character-select/hero-team-teamup-lineup.png`
- Source URL：https://www.marvelrivals.com/
- Use for：Squad / Crossover 的組隊關係顯示
- Keep：
  - 多角色組合關係
  - 隊伍編成感
  - 組合排列與標示
- Avoid：
  - 複雜遊戲規則說明
  - 戰鬥屬性干擾
- Transform：
  - 用於 3 人小隊、3v3 或跨作品組合展示
- Priority：High
- Responsive Note：手機版改為橫向捲動或分區呈現
- Interaction Note：隊伍調整時使用輕量排序與 Slot 動畫
- Copyright Note：僅借用排列與關係視覺

### Teenage Engineering Home Grid
- File：`docs/ux/references/workspace/teenage-engineering-home-grid.png`
- Source URL：https://teenage.engineering/
- Use for：Workspace 的模組排列與控制器感
- Keep：
  - 模組化分組
  - 簡潔但有趣的產品展示
  - 有設備感的排列邏輯
- Avoid：
  - 照抄品牌工業風細節
  - 過於玩具化
- Transform：
  - 用於 Generator 面板的工具模組區
- Priority：High
- Responsive Note：手機版模組區改為分段或手風琴
- Interaction Note：Hover 與 active 狀態保持輕量
- Copyright Note：只參考模組化布局

### Teenage Engineering EP Controls
- File：`docs/ux/references/workspace/teenage-engineering-ep-controls.png`
- Source URL：https://teenage.engineering/
- Use for：Generator 控制面板
- Keep：
  - 旋鈕／按鈕的可操作感
  - 簡潔標籤
  - 控制區聚焦
- Avoid：
  - 把 UI 做成真實硬體面板
  - 控制元件過多
- Transform：
  - 對應 Randomize、Lock、Mode、Scene、Mood、Generate 控制區
- Priority：High
- Responsive Note：手機版控制項轉為底部操作列或 sheet
- Interaction Note：按鈕回饋、Lock 脈衝、Generate 進度
- Copyright Note：不複製工業設計

### Interface Cyberpunk UI
- File：`docs/ux/references/workspace/interface-cyberpunk-ui.png`
- Source URL：https://interfaceingame.com/
- Use for：深色工作台、資訊面板與 HUD 感補充
- Keep：
  - 深色介面中的資訊層級
  - 面板區塊化
  - 功能密集但仍可掃描
- Avoid：
  - 賽博龐克霓虹過量
  - HUD 過度複雜
- Transform：
  - 僅作為深色工作台的輔助案例，不做主風格
- Priority：Low
- Responsive Note：僅吸收面板分區概念
- Interaction Note：不需模仿其特效，維持簡潔
- Copyright Note：研究案例用途

### Leica Looks Gallery
- File：`docs/ux/references/style/leica-looks-gallery.png`
- Source URL：https://leica-camera.com/en-int/photography/leica-looks
- Use for：攝影風格選擇
- Keep：
  - 風格名稱 + 圖片預覽
  - 讓使用者用影像理解風格
  - 同系統下多風格卡
- Avoid：
  - 只有文字下拉選單
  - 把風格頁做成單純規格表
- Transform：
  - 對應 Cinematic / Street / Warm Daily Life / Neo Tokyo 等風格卡
- Priority：High
- Responsive Note：手機版改為橫向卡片或 2 欄網格
- Interaction Note：選中風格時預覽與狀態切換
- Copyright Note：不複製作品圖片內容

### Leica Style Grid
- File：`docs/ux/references/style/leica-style-grid.png`
- Source URL：User collected screenshot based on Leica style selection
- Use for：多風格並列與結果預覽
- Keep：
  - 不同風格的一致卡片系統
  - 小預覽圖快速比較
- Avoid：
  - 風格名過多過雜
  - 卡片資訊擁擠
- Transform：
  - 用於生成前的 style / mood 預選區
- Priority：Medium
- Responsive Note：手機版以 carousel 或 2 欄呈現
- Interaction Note：點選後對應大型預覽切換
- Copyright Note：研究版型用途

## 原始截圖歸檔說明
所有使用者提供的截圖都已完整保留於 `docs/ux/references/archive/`，即使未列入主參考圖，也不可直接刪除。若後續發現某張圖片有新的用途，可再從 archive 提升為主參考圖。
