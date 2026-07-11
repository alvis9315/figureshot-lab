#!/usr/bin/env bash
# 依賴安裝:前端 npm install(後端 mvnw 首跑會自動抓依賴)
set -euo pipefail
cd "$(dirname "$0")/../frontend"
npm install
echo "Setup done. Next: docker compose up -d && ./scripts/run-backend.sh"
