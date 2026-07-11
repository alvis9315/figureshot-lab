# CLAUDE.md

本專案完整規範見 [AGENTS.md](AGENTS.md),請完整遵守。

## Project context

- FigureShot Lab:模型攝影靈感與收藏搭配平台(Nuxt 3 + Spring Boot + PostgreSQL + Claude API)。
- 規格正本:`docs/product-spec.md`(凍結);狀態板:`docs/roadmap.md`(唯一更新處)。
- 受眾 Global-first(en 預設 + zh-TW),AI 呼叫一律經後端。

## Workflow

- 動工前看 `docs/roadmap.md` 確認目前階段與 PRE 閘門狀態。
- 改架構先改 `docs/architecture.md` / `docs/data-model.md` 的 Mermaid 圖,再改 code。
- 完成前跑 `./scripts/check.sh`;工作紀錄寫 `docs/worklog.md`。
