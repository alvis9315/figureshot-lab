# Security Guideline

## Authentication / Authorization

- Spring Security + JWT(stateless REST,CSRF 停用是有意決策)。
- 密碼:BCrypt PasswordEncoder,不自刻加密。
- 目前開放:`/api/v1/health`、swagger(local);其餘 endpoint 預設鎖,實作 Auth(P1)後逐條開。
- 資源授權:figures / sessions 一律檢查 user_id 歸屬,不可只靠前端隱藏。

## Secrets

- `ANTHROPIC_API_KEY`、`JWT_SECRET`、DB 帳密:只走環境變數 / 部署平台 secret manager。
- `.env` 不 commit;`.env.example` 只放佔位值。
- AI API 呼叫一律經後端;前端(含 Nuxt server routes)不持有 AI key。

## CORS

local 允許 `http://localhost:3000`;正式環境白名單前端網域,禁 allow all。

## Actuator

只暴露 `health`(部署健康檢查用);其餘 endpoint 不開或加權限。

## 防濫用(spec 20H,實作 AI 功能時落地)

- AI 生成次數限流(帳號 + IP)、失敗重試上限、429 回 `INS_002`。
- 上傳限制格式(jpg/png/webp)與大小,惡意檔案檢查。
- **訪客配額**(2026-07-12 擁有者定案,對應 user-flow.md Flow A):未登入使用者以簽章 httpOnly cookie 追蹤裝置,**每裝置終身 1 次**真實 AI 生成配額;用完後 API 回 401 導向登入,前端不重試。cookie 遺失/清除視為新裝置(可接受的漏洞,目標是擋隨手濫用而非完全防堵);後端另記錄 IP + User-Agent 指紋到 `ai_usage_logs`,同 IP 短時間大量新裝置樣態觸發告警與追加驗證碼。

## 個資與 Consent(spec 14)

- `consent_analytics` 預設 false,可隨時撤回;帳號刪除級聯清除資料。
- log 不記密碼、token、完整個資。
