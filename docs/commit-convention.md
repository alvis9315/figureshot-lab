# Commit Convention(Conventional Commits)

```text
feat:     新增功能
fix:      修正錯誤
docs:     文件調整
style:    格式調整(不影響邏輯)
refactor: 重構
test:     測試
chore:    雜項(依賴、目錄整理)
build:    建置相關
ci:       CI/CD 相關
```

- 描述可用中文;一個 commit 一件事。
- scope 可選:`feat(wheel): ...`、`fix(auth): ...`。
- 涉及 DB migration 的 commit,訊息標注 `V<n>`。
