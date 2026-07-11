# ADR-0003:AI 走 Provider Adapter,第一版預設 Claude API

- Status: accepted(2026-07-11)
- 對應 spec:20B AI Provider(原「討論中」)、10.3、20D

## Context

spec 20B 已要求「AI 呼叫需透過 Provider Adapter,避免業務邏輯綁死單一模型商」。擁有者偏好 Claude,並提出未來可能需要圖片生成、是否讓使用者自選模型的疑問。

## Decision

- 後端 `ai/` 模組定義 `AiProvider` 介面(文字生成層級),業務邏輯只依賴介面。
- 第一版唯一實作:`ClaudeProvider`(Anthropic Messages API;model 由設定指定,預設 `claude-sonnet-4-5`,繁中文案品質穩)。
- API key 只存後端環境變數(`ANTHROPIC_API_KEY`),前端永不接觸(spec 第 1、10.4 節鐵律)。
- MVP **不做**使用者自選模型(徒增 UI、計費與測試複雜度,對核心價值無貢獻)。

## Consequences

- 未來圖片生成(Claude 不支援)= 在 adapter 層新增 OpenAI / Gemini 實作,業務邏輯不動。
- 換模成本被壓在單一模組;規則引擎負責選片與搭配(spec 20D),AI 只負責把結構化結果寫成自然語言,降低對特定模型的依賴。
