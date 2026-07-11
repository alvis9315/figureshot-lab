# SA-Lite(MVP)

## 使用者角色(spec 20E 精簡為 MVP 版)

| 角色 | 權限 |
|---|---|
| 訪客 | 瀏覽 Landing、試玩限定輪盤(不入庫) |
| 會員 | 收藏 CRUD、輪盤、生成、儲存、分享 |
| 管理員 | 使用者管理(後期) |

## 功能清單(MVP)

1. 註冊 / 登入(email + 密碼,JWT)
2. 收藏 CRUD + 標籤(style/scene/interaction/mood)
3. 靈感輪盤:抽 1~3 隻(可鎖定主角)+ 場景/情緒/任務,可重抽
4. AI 生成:主題敘述、擺拍優化(道具/構圖/光線)、IG 文案 + hashtags
5. 靈感紀錄:儲存、列表、重新開啟

## 主要流程

登入 → 收藏庫 → 輪盤頁抽選 → 結果頁(生成內容)→ 儲存或分享。
流程圖見 architecture.md;逐頁畫面見 ui-flow.md。

## 例外流程

- AI 呼叫失敗 → 回退為模板骨架 + 提示 AI 暫不可用(不阻斷輪盤體驗)
- 收藏 < 抽選數 → 提示先新增收藏,給快速新增入口
- 未登入操作會員功能 → 導向登入,保留意圖(登入後回原頁)

## 資料欄位

見 data-model.md(erDiagram)。

## API 草稿

見 api-spec.md 與 shared/api-contracts/。

## 畫面草稿

首頁 Showcase、登入、收藏庫、新增/編輯模型、輪盤、結果、歷史紀錄(見 ui-flow.md;wireframe 屬 PRE-008,未開始)。
