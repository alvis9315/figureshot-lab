package com.figureshotlab.common.response;

import java.time.OffsetDateTime;
import java.util.List;

/**
 * 統一錯誤格式,見 docs/error-code-spec.md。
 */
public record ErrorResponse(
        OffsetDateTime timestamp,
        int status,
        String code,
        String message,
        String path,
        List<FieldError> fieldErrors
) {
    public record FieldError(String field, String message) {
    }

    public static ErrorResponse of(int status, String code, String message, String path) {
        return new ErrorResponse(OffsetDateTime.now(), status, code, message, path, null);
    }

    public static ErrorResponse of(int status, String code, String message, String path, List<FieldError> fieldErrors) {
        return new ErrorResponse(OffsetDateTime.now(), status, code, message, path, fieldErrors);
    }
}
