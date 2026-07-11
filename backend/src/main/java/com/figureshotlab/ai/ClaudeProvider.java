package com.figureshotlab.ai;

import com.figureshotlab.common.exception.BusinessException;
import com.figureshotlab.common.exception.ErrorCode;
import org.springframework.stereotype.Component;

/**
 * Anthropic Messages API 實作(第一版唯一 provider,ADR-0003)。
 * TODO(P0 AI 功能時實作):POST https://api.anthropic.com/v1/messages,
 * headers: x-api-key / anthropic-version,body: model + system + messages;
 * 失敗重試上限與逾時由呼叫端規則引擎控制,最終失敗回退模板骨架(AI_001)。
 */
@Component
public class ClaudeProvider implements AiProvider {

    private final AiProperties properties;

    public ClaudeProvider(AiProperties properties) {
        this.properties = properties;
    }

    @Override
    public String generateText(String systemPrompt, String userPrompt) {
        if (properties.apiKey() == null || properties.apiKey().isBlank()) {
            throw new BusinessException(ErrorCode.AI_001, "ANTHROPIC_API_KEY is not configured");
        }
        throw new UnsupportedOperationException("TODO: implement Anthropic Messages API call (model=" + properties.model() + ")");
    }
}
