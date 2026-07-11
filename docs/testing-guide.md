# Testing Guide

## 分層

| 層 | 工具 | 範圍 |
|---|---|---|
| Unit | JUnit 5 + Mockito | service、mapper、規則引擎(不起 Spring context) |
| Slice | @WebMvcTest / @DataJpaTest | controller 驗證與錯誤格式 / repository 查詢 |
| Integration | @SpringBootTest + application-test.yml | 完整流程(health 已有) |
| 前端 | `npm run build` 作為最低防線 | 元件測試待功能期引入(vitest,屆時 ADR 補) |

## Test profile

`application-test.yml` 用 H2(`MODE=PostgreSQL`)且**不跑 Flyway**——V1 migration 已使用 PostgreSQL 專屬型別(jsonb),H2 不支援;migration SQL 的正確性靠本機 Postgres(啟動即 migrate + validate)把關。repository / integration test 進場時改用 Testcontainers 跑真 Postgres,屆時更新本檔。

## 指令

```bash
cd backend && ./mvnw test          # 後端全部
./scripts/check.sh                 # 後端 test + 前端 build(完成任何工作前必跑)
```

## 規則

- AI Provider 在測試一律 mock,不打真 API、不需要 key。
- 新功能至少附 service unit test + controller slice test;修 bug 先寫重現測試。
