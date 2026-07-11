#!/usr/bin/env bash
set -euo pipefail
if [ -z "${JAVA_HOME:-}" ] && [ -d /opt/homebrew/opt/openjdk@21 ]; then
  export JAVA_HOME=/opt/homebrew/opt/openjdk@21
fi
cd "$(dirname "$0")/../backend"
./mvnw spring-boot:run
