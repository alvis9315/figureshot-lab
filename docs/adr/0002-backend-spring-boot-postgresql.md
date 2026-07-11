# ADR-0002:後端採用 Spring Boot + PostgreSQL(Maven、Java 21)

- Status: accepted(2026-07-11)
- 對應 spec:20B 後端 / 資料庫 / 認證(原「討論中」)

## Context

候選:Supabase / Firebase / Spring Boot。擁有者選擇 Spring Boot + PostgreSQL(練習完整前後端、架構控制力,spec 10.2 已列為可選路線)。

## Decision

- Spring Boot 3 穩定版、Maven、Java 21,root package `com.figureshotlab`。
- PostgreSQL 16,schema 全部走 Flyway migration(ddl-auto=validate)。
- 認證自建:Spring Security + JWT(隨 Spring Boot 選型定案,取代 Supabase/Firebase Auth)。
- 分層依 AGENTS.md:api / domain / common / config / security,Entity 不出 API 層。

## Consequences

- MVP 時程比 BaaS 長(Auth、Storage、部署全自管),換得完整後端能力與 B 端擴充控制力。
- PostgreSQL 支援 JSON 與全文檢索,相容 spec 20C 未來 27 表正規化方向;第一版先用 spec 第 11 節簡化 schema(6 表)。
- 圖片儲存:MVP 本機 `StorageService` 抽象,正式換 Cloudflare R2 / S3(介面不變)。
