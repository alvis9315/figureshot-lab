# Git Workflow

## 分支

- `main`:可運行狀態;單人開發可直推小型 docs/chore,功能一律開分支。
- `feature/<name>` / `fix/<name>` / `docs/<topic>` / `chore/<task>`。
- PRE 閘門未過前不開 P0 功能分支(roadmap.md 更新規則)。

## 流程

```bash
git checkout -b feature/figure-crud
# ...開發,完成前 ./scripts/check.sh
git add <files> && git commit -m "feat: ..."
git push origin feature/figure-crud   # push 前與擁有者確認
```

## Commit / push 檢查

`git status` 確認無 .env、uploads/、target/、node_modules、.output;commit message 見 commit-convention.md。

## Release / deploy

MVP 期以 main 為部署基準;正式部署啟用後補 tag 規則(`v0.x`)。
