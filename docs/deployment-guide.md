# Deployment Guide(暫定方案,見 ADR-0004;尚未部署)

## 拓撲

Vercel(Nuxt SSR)→ Render(Spring Boot)→ Neon(PostgreSQL);圖片正式改 Cloudflare R2。

## 環境變數清單

### Vercel(前端)

| 變數 | 值 |
|---|---|
| NUXT_PUBLIC_API_BASE | `https://<render-app>.onrender.com/api/v1` |

### Render(後端)

| 變數 | 說明 |
|---|---|
| SPRING_PROFILES_ACTIVE | `prod` |
| DB_URL / DB_USERNAME / DB_PASSWORD | Neon 連線資訊(帶 `sslmode=require`) |
| JWT_SECRET | 長隨機字串,只存 Render secret |
| ANTHROPIC_API_KEY | Anthropic console 取得 |
| AI_MODEL | 預設 `claude-sonnet-4-5` |
| APP_CORS_ALLOWED_ORIGINS | Vercel 正式網域(白名單,禁 `*`) |

## 部署要點

- 後端 build:`./mvnw clean package` → `java -jar target/*.jar --spring.profiles.active=prod`;Render 用 Docker 或原生 Java runtime 皆可,健康檢查指 `/api/v1/health`。
- Flyway 於啟動時自動 migrate(prod `ddl-auto=validate`)。
- 免費層已知限制:Render 冷啟動 ~數十秒、Neon 連線數上限——流量起來後復審(ADR-0004)。

## 上線前檢查

CORS 白名單、Actuator 只開 health、Swagger 關閉或加權限、secret 不在 repo、HTTPS 全程。
