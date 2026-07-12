# Roadmap 與實作狀態板

> 本檔是實作順序與狀態的**唯一更新處**,轉錄自 `product-spec.md`(v0.2)第 8、17、18、20A 節。
> 規格原文凍結不動;狀態只在這裡改。狀態值沿用 spec 定義:`未開始 / 討論中 / 暫定 / 已確認 / 待驗證 / 開發中 / 已完成 / 已淘汰`。
> 最後更新:2026-07-11(repo 初始化)

## 大方向路線(spec 第 17 節)

```text
Stage 1 工具期(現在) → Stage 2 社群期 → Stage 3 資料期 → Stage 4 商業合作期
```

目前位置:**Stage 1 工具期,開工前準備階段(PRE 閘門未過,尚未進功能 Sprint)**。

## 閘門 0:開工前準備(spec 20A)——功能程式碼動工前必須完成

| 編號 | 項目 | 驗收條件 | 狀態 | 備註 |
|---|---|---|---|---|
| PRE-001 | 專案總綱文件 | spec md 為單一事實來源、版本紀錄 | **已完成** | 已收入 `docs/product-spec.md`(v0.2)+ 本狀態板 |
| PRE-002 | 目標玩家訪談 | 訪談 8~12 位不同類型玩家 | 暫定(大綱初稿待審) | [research/interview-guide.md](research/interview-guide.md);**執行**只有擁有者能做 |
| PRE-003 | 競品與替代方案分析 | 比較收藏管理、輪盤、AI 文案、攝影社群等競品 | **已完成** | [research/competitor-analysis.md](research/competitor-analysis.md);結論:三賽道交集為空,差異化成立。擁有者延伸出公共模型目錄構想,見下方討論中項目 |
| PRE-004 | UI Moodboard | Cinematic Editorial Workspace 視覺參考 | **已完成** | 2026-07-12 擁有者提供 UX 參考包(7 來源 22 張圖 + visual-reference-guide 逐張規格),歸檔於 docs/ux/references/ |
| PRE-005 | 種子模型資料 | ~100 筆具多樣性的模型資料 | 開發中(50 筆示範批) | [seed/figure-seed-data.md](seed/figure-seed-data.md);待擁有者收藏清單補滿+核對 |
| PRE-006 | 靈感模板資料 | ~150 組場景、任務、情緒與命名模板 | 暫定(150 組初稿待審) | [seed/inspiration-templates.md](seed/inspiration-templates.md) |
| PRE-007 | User Flow | 訪客、會員、收藏新增、生成與分享流程 | **已完成** | [user-flow.md](user-flow.md);3 個待決問題已拍板(訪客配額制、照片選填+文字必填規則、分享預設署名) |
| PRE-008 | Low-Fidelity Wireframe | 首頁、收藏庫、輪盤、結果頁與歷史紀錄 | **已完成** | 升級為高保真落地(靜態 UI + 動畫、不接 API):Landing/Generator/Style/Result/分享頁(Wave 1-2)+ Collection/新增表單/History/Login(Wave 3,2026-07-12)——全頁脫離佔位,雙主題 |
| PRE-009 | 技術 ADR | 前端、後端、DB、Auth、Storage、AI Provider 均有決策紀錄 | **已完成** | `docs/adr/0001~0005`(0005:圖片來源與 AI 視覺輸入政策,2026-07-12 新增) |
| PRE-010 | MVP 驗證計畫 | KPI、樣本數、測試週期與 Pivot 條件定案 | **已完成** | [research/mvp-validation-plan.md](research/mvp-validation-plan.md);Activation 門檻下調至 ≥35%(新產品寬容),樣本/時程(8週100人)與付費訊號門檻(≥30%)確認採用 |

## 閘門 1:MVP 功能 Sprint(spec 第 18 節優先級)

PRE 閘門通過後才動工。順序:P0 全部 → P1 → P2(P3 屬 Stage 3+)。

| 功能 | 優先級 | 狀態 | 對應 spec |
|---|---:|---|---|
| 新增模型收藏 | P0 | 未開始 | Phase 1 |
| 編輯模型標籤 | P0 | 未開始 | Phase 1 |
| 收藏列表 | P0 | 未開始 | Phase 1 |
| 靈感輪盤 | P0 | 未開始 | Phase 2 |
| 隨機主題產生 | P0 | 未開始 | Phase 2 |
| AI 生成擺拍優化 | P0 | 未開始 | Phase 4 |
| 使用者登入 | P1 | 未開始 | 20E 角色模型 |
| AI 生成 IG 文案 | P1 | 未開始 | Phase 4 |
| 儲存靈感紀錄 | P1 | 未開始 | Phase 3(sessions) |
| 分享結果頁 | P2 | 未開始 | Stage 2 前哨 |
| 使用紀錄統計 | P2 | 未開始 | Phase 5 |
| 趨勢統計後台 | P3 | 未開始 | Stage 3 |
| 品牌合作頁 | P3 | 未開始 | Stage 4 |

## 討論中(不阻擋現行進度)

| 項目 | 說明 | 狀態 |
|---|---|---|
| 公共模型目錄(混合制) | 新增收藏改為「目錄優先搜尋 + 找不到才自訂新增」,降低錯誤資料與盜版風險 | [research/canonical-catalog-backlog.md](research/canonical-catalog-backlog.md);待訪談驗證 + 擁有者定案時機,不變更現行 MVP schema |
| 靈感模板多維度分類(4 種拍攝類型) | 電影感/致敬原作/搞笑/主題先行選角,各自不同選角與場景邏輯;已附 WebSearch 真實參考(Homage Cover/Power Trio/Femme Fatale Spy/Odd Couple 等) | [seed/inspiration-modes.md](seed/inspiration-modes.md);待擁有者審 + 擴充 homage_moves/team_concepts 庫 |

## 上線前必要文件(ADR-0005 第 18 節,商業化開放前的硬性門檻)

> 與 PRE 閘門(功能開工前)不同層級——這批是**正式對外收費/公開營運前**必須齊備,MVP 開發期間不阻擋。

| # | 文件 | 狀態 |
|---|---|---|
| 1 | 服務條款 | 未開始 |
| 2 | 隱私權政策 | 未開始 |
| 3 | 訂閱與退款政策 | 未開始 |
| 4 | Cookie 與追蹤技術政策 | 未開始 |
| 5 | 使用者上傳內容條款(UGC) | 未開始(內容要點已備於 security-guideline.md) |
| 6 | 智慧財產權申訴與下架政策 | 未開始 |
| 7 | AI 生成內容聲明 | 未開始 |
| 8 | 圖片與官方廠商關係聲明(免責聲明範本已備) | 未開始 |
| 9 | 資料分析與趨勢報告政策 | 未開始 |
| 10 | 第三方 AI 服務整合聲明 | 未開始 |
| 11 | 廣告與贊助行為聲明 | 未開始 |
| 12 | 資料保存與刪除政策 | 未開始 |

## 基礎建設(不受 PRE 閘門限制)

| 項目 | 狀態 | 備註 |
|---|---|---|
| Repo 骨架 + 文件 + ADR | **已完成** | 2026-07-11 初始化 |
| 後端骨架(Spring Boot + Flyway V1 + health) | **已完成** | 尚無業務邏輯 |
| 前端骨架(Nuxt + Tailwind + i18n + placeholder 頁) | **已完成** | 尚無功能畫面 |
| 部署(Vercel + Render + Neon) | 未開始 | 暫定方案見 ADR-0004,MVP 完成前不部署 |

## Stage 1 成功指標(spec 第 17 節)

```text
100 位使用者 / 1,000 筆模型收藏 / 1,000 次靈感生成
```

## 更新規則

1. 狀態只在本檔改,並在 `worklog.md` 記一筆(日期 + 改了什麼)。
2. 新增功能項目時標注對應 spec 章節;spec 沒有的要先回寫進 spec 討論,不可先斬後奏。
3. PRE 閘門未過前,不得開任何 P0 功能分支。
