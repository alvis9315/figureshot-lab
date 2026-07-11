package com.figureshotlab.ai;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * app.ai.*;api key 只來自環境變數 ANTHROPIC_API_KEY,不進 repo。
 */
@ConfigurationProperties(prefix = "app.ai")
public record AiProperties(String apiKey, String model) {
}
