package com.figureshotlab.ai;

/**
 * AI 文字生成的唯一抽象;業務邏輯只依賴本介面(ADR-0003)。
 * 新增模型商 = 新增實作,不改呼叫端。
 */
public interface AiProvider {

    /**
     * @param systemPrompt 角色與輸出規則
     * @param userPrompt   結構化靈感骨架(由規則引擎組出)
     * @return 生成文字(主題敘述 / 擺拍優化 / 文案)
     */
    String generateText(String systemPrompt, String userPrompt);
}
