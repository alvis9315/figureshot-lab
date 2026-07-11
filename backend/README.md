# FigureShot Lab — Backend

Spring Boot 4(Maven, Java 21)+ PostgreSQL + Flyway。分層規則見 ../docs/backend-architecture.md。

```bash
export JAVA_HOME=/opt/homebrew/opt/openjdk@21   # macOS + Homebrew
docker compose -f ../docker-compose.yml up -d    # 先起 DB
./mvnw spring-boot:run                           # http://localhost:8080/api/v1/health
./mvnw test
./mvnw clean package
```
