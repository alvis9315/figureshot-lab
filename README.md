# FigureShot Lab

模型攝影靈感與收藏搭配平台 — 幫模型玩家從自己的收藏中產生攝影靈感、角色搭配、擺拍優化與社群內容。

A figure photography inspiration and collection pairing platform built with Nuxt 3, Spring Boot, PostgreSQL, and the Claude API.

## 文件導覽

- 產品單一事實來源:[docs/product-spec.md](docs/product-spec.md)(v0.2 結論分析,凍結原文)
- 實作順序與狀態:[docs/roadmap.md](docs/roadmap.md)(活狀態板,唯一更新處)
- 技術決策:[docs/adr/](docs/adr/)
- 架構總覽:[docs/architecture.md](docs/architecture.md)

## Tech Stack

| 層 | 選型 |
|---|---|
| 前端 | Nuxt 3 + TypeScript + Pinia + @nuxtjs/i18n(en / zh-TW)+ Tailwind CSS |
| 後端 | Spring Boot 3(Maven, Java 21)+ Spring Security(JWT) |
| 資料庫 | PostgreSQL 16 + Flyway |
| AI | 後端 AiProvider Adapter,第一版 Claude API |
| 部署(暫定) | Vercel(前端)+ Render(後端)+ Neon(DB) |

## Project Structure

```text
frontend/   Nuxt 3 app
backend/    Spring Boot API
shared/     API contracts (OpenAPI)
scripts/    setup / run / check
infra/      deployment notes
docs/       spec, roadmap, ADR, guides
```

## Requirements

- Node.js 22(`nvm use`,見 frontend/.nvmrc)
- Java 21(macOS:`brew install openjdk@21`)
- Docker(本機 PostgreSQL)

## Setup

```bash
cp .env.example .env          # 填入本機值
docker compose up -d          # 起 PostgreSQL
./scripts/setup.sh            # 前後端依賴安裝
```

## Run

```bash
./scripts/run-dev.sh          # 前後端一起
./scripts/run-backend.sh      # 只起後端 → http://localhost:8080/api/v1/health
./scripts/run-frontend.sh     # 只起前端 → http://localhost:3000
```

## Test / Build

```bash
./scripts/check.sh            # 後端 mvnw test + 前端 npm run build
```

## Deployment

暫定 Vercel + Render + Neon,詳見 [docs/deployment-guide.md](docs/deployment-guide.md)。尚未部署。

## Notes

- 機密只走環境變數,`.env` 不 commit;AI API 呼叫一律經後端,前端永不接觸 API key。
- 功能開發前先完成 docs/roadmap.md 的 PRE 閘門(訪談、wireframe、種子資料)。
