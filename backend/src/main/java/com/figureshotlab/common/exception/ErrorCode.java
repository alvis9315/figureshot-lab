package com.figureshotlab.common.exception;

import org.springframework.http.HttpStatus;

/**
 * 錯誤碼集中管理;新增時同步登記 docs/error-code-spec.md。
 */
public enum ErrorCode {
    COM_001(HttpStatus.BAD_REQUEST, "Invalid request"),
    COM_002(HttpStatus.INTERNAL_SERVER_ERROR, "Unexpected server error"),
    AUTH_001(HttpStatus.UNAUTHORIZED, "Authentication required"),
    AUTH_002(HttpStatus.FORBIDDEN, "Access denied"),
    AUTH_003(HttpStatus.CONFLICT, "Email already registered"),
    FIG_001(HttpStatus.NOT_FOUND, "Figure not found"),
    FIG_002(HttpStatus.BAD_REQUEST, "Invalid photo"),
    INS_001(HttpStatus.UNPROCESSABLE_ENTITY, "Not enough figures to draw"),
    INS_002(HttpStatus.TOO_MANY_REQUESTS, "Generation limit reached"),
    AI_001(HttpStatus.BAD_GATEWAY, "AI provider call failed"),
    STO_001(HttpStatus.INTERNAL_SERVER_ERROR, "File storage failed");

    private final HttpStatus status;
    private final String defaultMessage;

    ErrorCode(HttpStatus status, String defaultMessage) {
        this.status = status;
        this.defaultMessage = defaultMessage;
    }

    public HttpStatus status() {
        return status;
    }

    public String defaultMessage() {
        return defaultMessage;
    }
}
