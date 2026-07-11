# Backend Architecture(Spring Boot)

## Package structure(root:com.figureshotlab)

```text
api/v1/          Controller、request/response DTO、api mapper(HTTP 層,不放商業邏輯)
domain/          user / figure / inspiration,各含 entity、repository、service、dto、mapper
ai/              AiProvider 介面 + ClaudeProvider + AiProperties(業務邏輯只依賴介面)
storage/         StorageService 介面 + LocalStorageService
common/          ApiResponse、ErrorResponse、BusinessException、ErrorCode、GlobalExceptionHandler、util
config/          Web、CORS、Jackson、OpenAPI 設定
security/        SecurityConfig、JwtAuthenticationFilter
```

## 邊界規則

- Controller:接 request、@Valid 驗證、呼叫 service、回 response DTO。不做商業邏輯、DB 查詢、交易控制。
- Service:業務邏輯與交易邊界(讀 `@Transactional(readOnly = true)`,寫 `@Transactional`)。
- Repository:只做資料存取;複雜查詢用 @Query / Specification;注意 N+1 與分頁(Pageable)。
- Entity 不出 API 層;mapping 集中在 mapper。

## Exception

業務錯誤丟 `BusinessException(ErrorCode)`;`GlobalExceptionHandler` 統一轉 error-code-spec.md 格式。不到處 try-catch。

## Config / Profiles

- `application.yml` 共用;`application-local.yml` 連 docker Postgres(讀 .env 變數);`application-prod.yml` 全走環境變數;`application-test.yml` 用 H2(PostgreSQL 相容模式,見 testing-guide.md)。
- 機密一律環境變數,不進 repo。

## DB

Flyway 唯一 schema 來源,`ddl-auto=validate`。詳見 data-model.md。
