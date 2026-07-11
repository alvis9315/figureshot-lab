# Setup Guide

## 前置需求

| 工具 | 版本 | macOS 安裝 |
|---|---|---|
| Node.js | 22(見 frontend/.nvmrc) | `nvm install 22` |
| Java | 21 | `brew install openjdk@21` |
| Docker | 任意近期版 | Docker Desktop |

Java 21 via Homebrew 時需設 JAVA_HOME(scripts/ 已自動偵測 `/opt/homebrew/opt/openjdk@21`):

```bash
export JAVA_HOME=/opt/homebrew/opt/openjdk@21
```

## 步驟

```bash
git clone https://github.com/alvis9315/figureshot-lab.git && cd figureshot-lab
cp .env.example .env        # 改掉密碼與 JWT_SECRET;ANTHROPIC_API_KEY 之後接 AI 功能才需要
docker compose up -d        # PostgreSQL 16 @ localhost:5432
./scripts/setup.sh          # frontend npm install
./scripts/run-backend.sh    # http://localhost:8080/api/v1/health → {"status":"UP"}
./scripts/run-frontend.sh   # http://localhost:3000
```

## 常見問題

- `Unable to locate a Java Runtime`:JAVA_HOME 未設,見上方。
- 後端起不來且訊息含 connection refused:Postgres 未起,`docker compose up -d` 後重試。
- Flyway validate 錯誤:本機 DB schema 髒了,開發期可 `docker compose down -v` 重建(會清資料)。
