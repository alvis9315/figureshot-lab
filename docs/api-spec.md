# API Spec(草稿,實作時逐條定案並同步 shared/api-contracts/openapi.yaml)

Base:`/api/v1`,JSON,JWT Bearer(除標注 public)。錯誤格式見 error-code-spec.md。

## Health(已實作)

| Method | Path | Auth | 說明 |
|---|---|---|---|
| GET | /health | public | 服務健康檢查,回 `{"status":"UP"}` |

## Auth(P1,未實作)

| Method | Path | 說明 |
|---|---|---|
| POST | /auth/register | email + password + displayName |
| POST | /auth/login | 回 accessToken |
| GET | /auth/me | 目前使用者 |

## Figures(P0,未實作)

| Method | Path | 說明 |
|---|---|---|
| GET | /figures?page=&size=&sort=&tag= | 我的收藏(分頁) |
| POST | /figures | 新增(含標籤) |
| GET | /figures/{id} | 詳情 |
| PUT | /figures/{id} | 更新 |
| DELETE | /figures/{id} | 刪除 |
| POST | /figures/{id}/photo | 上傳照片(multipart) |

## Tags(P0,未實作)

| Method | Path | 說明 |
|---|---|---|
| GET | /tags?type= | 標籤清單(系統預設 + 使用者自建) |

## Inspiration(P0,未實作)

| Method | Path | 說明 |
|---|---|---|
| POST | /inspiration-sessions | 抽選 + 生成,body:count、lockedFigureIds、regenerate |
| GET | /inspiration-sessions?saved=true | 歷史紀錄 |
| PATCH | /inspiration-sessions/{id} | 儲存/取消儲存 |

## 慣例

- 分頁:`page`(0-based)/ `size` / `sort=field,desc`
- 201 新增、204 刪除;status 語意見 error-code-spec.md
- URL 不放敏感資訊;所有輸入走 request DTO validation
