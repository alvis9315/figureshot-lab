# Endpoint Summary(前後端契約速查)

| 域 | Endpoint | 契約 | 實作 |
|---|---|---|---|
| Health | GET /api/v1/health | ✅ | ✅ |
| Auth | POST /auth/register・login,GET /auth/me | ✅(0.2.0)| 未(P1) |
| Figures | GET/POST /figures,GET/PUT/DELETE /figures/{id},POST /figures/{id}/photo | ✅(0.2.0)| 未(P0) |
| Tags | GET /tags?type= | ✅(0.2.0)| 未(P0) |
| Inspiration | POST/GET /inspiration-sessions,PATCH /inspiration-sessions/{id} | ✅(0.2.0)| 未(P0) |

契約正本:openapi.yaml v0.2.0(2026-07-12 完整化——含分頁、錯誤格式、AI 回退語意 aiGenerated、鎖定重抽參數);人讀版 docs/api-spec.md。
