#!/usr/bin/env bash
# 完成任何工作前必跑:後端測試 + 前端 build
set -euo pipefail
if [ -z "${JAVA_HOME:-}" ] && [ -d /opt/homebrew/opt/openjdk@21 ]; then
  export JAVA_HOME=/opt/homebrew/opt/openjdk@21
fi
cd "$(dirname "$0")/../backend" && ./mvnw -q test
cd ../frontend && npm run build
echo "check.sh: ALL PASSED"
