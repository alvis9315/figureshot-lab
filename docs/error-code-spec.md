# Error Code Spec

## 錯誤回應格式(GlobalExceptionHandler 統一輸出)

```json
{
  "timestamp": "2026-07-11T10:00:00+08:00",
  "status": 400,
  "code": "FIG_001",
  "message": "Figure not found",
  "path": "/api/v1/figures/99"
}
```

- validation 失敗時附 `fieldErrors: [{field, message}]`。
- 不回傳 stack trace;系統錯誤記 log、回一般化訊息。

## 命名規則

`<域前綴>_<三位數>`:COM(共用)、AUTH、FIG(figures/tags)、INS(inspiration)、AI、STO(storage)。

## 錯誤碼表(隨實作擴充,新增先登記於此)

| Code | HTTP | 說明 |
|---|---|---|
| COM_001 | 400 | 參數格式錯誤(validation) |
| COM_002 | 500 | 未預期系統錯誤 |
| AUTH_001 | 401 | 未登入或 token 無效 |
| AUTH_002 | 403 | 無權限 |
| AUTH_003 | 409 | email 已註冊 |
| FIG_001 | 404 | 模型不存在或非本人所有 |
| FIG_002 | 400 | 照片格式/大小不符 |
| INS_001 | 422 | 收藏數不足以抽選 |
| INS_002 | 429 | 生成次數達上限(防濫用,spec 20H) |
| AI_001 | 502 | AI Provider 呼叫失敗(前端應顯示回退內容) |
| STO_001 | 500 | 檔案儲存失敗 |
