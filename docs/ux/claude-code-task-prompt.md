# Claude Code 任務提示詞（可直接貼用）

請你把這個 repo 視為 FigureShot Lab 的前端 UI／UX 實作起點，並**先閱讀以下文件**：

1. `README.md`
2. `docs/ux/implementation-brief.md`
3. `docs/ux/visual-reference-guide.md`
4. `docs/ux/motion/motion-interaction-spec.md`

## 第一階段：先做 Visual Reference Gate

在開始寫任何頁面前，先檢查：

1. 是否已理解 Landing、Generator、Style/Scene、Result 的頁面目標
2. 是否已理解每張主參考圖的 `Use for / Keep / Avoid / Transform`
3. 是否已理解動畫與互動規格
4. 是否已知道主參考圖位置與 archive 位置
5. 是否已知道哪些風格是核心、哪些只是輔助

若仍缺少任何會影響資訊架構、互動、動畫、RWD 或風格收斂的重要資訊，**請先列出缺漏清單，不得直接開始實作**。

## 第二階段：確認圖片歸檔

若目前 repo 尚未有參考圖，請先把所有圖片歸檔到：

```text
docs/
└─ ux/
   ├─ references/
   │  ├─ landing/
   │  ├─ character-select/
   │  ├─ workspace/
   │  ├─ style/
   │  └─ archive/
```

原則：
- `references/` 保留收斂後的主參考圖
- `references/archive/` 保留所有原始截圖
- 不可遺失使用者已搜集的圖片

## 第三階段：先輸出 Implementation Readiness Review

請先回報：

```md
## Implementation Readiness Review

### 已理解的目標
- 

### 預計採用的版面結構
- 

### 預計建立的元件
- 

### 參考圖對應關係
- 

### 動畫與互動落點
- 

### 尚缺資料
- 

### 存在衝突的參考
- 

### 需要使用者確認的決策
- 
```

只有在使用者確認後，才開始正式實作。

## 第四階段：實作要求

### Landing
- 需有滿版 Hero
- 需有明確破題與 CTA
- 需實作滾動進場的上下 reveal 動畫
- 需延續電影感，但不可看不出產品用途

### Generator
- 需有角色池
- 需有 Pair / Squad / Crossover 模式
- 需有角色預覽與 Slot
- 需有搜尋、篩選、Lock、Randomize、Generate
- 需有角色選中與放入 Slot 的動畫回饋

### Style / Scene
- 需以圖片導向方式呈現風格選擇
- 不可只做成純文字選單

### Result
- 需有電影感結果呈現
- 需能延伸顯示主題、拍攝建議與後續操作

### 動畫
- 務必根據 `docs/ux/motion/motion-interaction-spec.md` 實作
- 須支援 `prefers-reduced-motion`
- 避免炫技特效與重型動畫

## 第五階段：實作完成後自我檢查

- 是否保留了 FigureShot Lab 的模型攝影形象？
- 是否清楚表達角色配對與組隊感？
- 是否有明確的首頁破題？
- 是否有納入上下滑動的 reveal 動畫？
- 是否支援 Pair、Squad、Crossover？
- 是否兼顧桌機與手機版？
- 是否避免直接照抄參考網站與遊戲？
