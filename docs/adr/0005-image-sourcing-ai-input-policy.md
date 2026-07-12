# ADR-0005:圖片來源與 AI 視覺輸入政策——僅限已授權/自製/使用者上傳

- Status: accepted(2026-07-12)
- 對應 spec:20G(IP 與內容治理)、20D(AI 責任邊界);完整分析見 [policy/image-rights-and-commercialization-decision.md](../policy/image-rights-and-commercialization-decision.md)

## Context

擁有者提出:是否可在使用者操作時,由系統動態搜尋網路公開圖片作為 AI 生成的輸入?評估後發現「圖片公開可見」不等於「已授權可商業使用」,且下載/快取/送第三方 AI 各自構成獨立的重製與授權風險(見完整分析文件第 4~5 節)。

## Decision

1. **系統不自動抓取、下載、快取或轉發第三方圖片**——公開圖片僅能以外部超連結呈現(導流至原站),不進入 FigureShot Lab 的儲存或 AI 工作流。
2. **AI 視覺輸入僅限三種來源**:使用者自行上傳並同意授權的照片(`USER_UPLOADED`)、FigureShot Lab 自行拍攝(`OWN_PHOTO`)、正式取得授權的合作圖片(`BRAND_LICENSED`/`PARTNER_LICENSED`/`API_LICENSED`,Phase 4 才會出現)。
3. **模型辨識靠結構化文字**,不靠圖片——與 ADR-0003(AI Provider 純文字)完全一致,互相印證,不需修改該 ADR。
4. 每張圖片(未來有圖片功能時)須有明確 `rights_status` 欄位與對應權限矩陣,後端統一以 `canSendImageToAI()` 閘門檢查,不允許功能各自決定。

## Consequences

- MVP(P0 收藏 CRUD、AI 生成)完全不受影響——本來就是文字驅動,現有 `figures.photo_url` 是使用者自願上傳的展示用途,不是 AI 輸入。
- Phase 2(使用者照片 AI 分析)開工前,需先落地完整分析文件第 13 節的 UGC 同意機制(已於 api-spec.md、security-guideline.md、error-code-spec.md 補上對應規則)。
- 公共模型目錄構想([canonical-catalog-backlog.md](../research/canonical-catalog-backlog.md))若導入,目錄的「商品縮圖」欄位只能用 `LINK_ONLY`(連回原廠商品頁)或使用者/官方正式授權圖,不可爬取後代管顯示——這是回答擁有者「爬蟲資料是否能直接進資料庫」的關鍵界線,見該文件更新。
- 正式商業上線前,需完成 18 節列出的 12 份法遵文件(服務條款、隱私政策等),已列入 roadmap「上線前必要文件」清單。
