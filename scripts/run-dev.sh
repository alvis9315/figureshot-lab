#!/usr/bin/env bash
# 前後端一起起;Ctrl+C 一併結束
set -euo pipefail
DIR="$(dirname "$0")"
"$DIR/run-backend.sh" &
BACK_PID=$!
trap 'kill $BACK_PID 2>/dev/null' EXIT
"$DIR/run-frontend.sh"
