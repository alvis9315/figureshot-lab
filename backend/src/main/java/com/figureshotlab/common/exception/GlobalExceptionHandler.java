package com.figureshotlab.common.exception;

import com.figureshotlab.common.response.ErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErrorResponse> handleBusiness(BusinessException e, HttpServletRequest request) {
        ErrorCode code = e.getErrorCode();
        return ResponseEntity.status(code.status())
                .body(ErrorResponse.of(code.status().value(), code.name(), e.getMessage(), request.getRequestURI()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException e, HttpServletRequest request) {
        List<ErrorResponse.FieldError> fieldErrors = e.getBindingResult().getFieldErrors().stream()
                .map(fe -> new ErrorResponse.FieldError(fe.getField(), fe.getDefaultMessage()))
                .toList();
        return ResponseEntity.badRequest()
                .body(ErrorResponse.of(HttpStatus.BAD_REQUEST.value(), ErrorCode.COM_001.name(),
                        ErrorCode.COM_001.defaultMessage(), request.getRequestURI(), fieldErrors));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleUnexpected(Exception e, HttpServletRequest request) {
        log.error("Unexpected error at {}", request.getRequestURI(), e);
        return ResponseEntity.internalServerError()
                .body(ErrorResponse.of(HttpStatus.INTERNAL_SERVER_ERROR.value(), ErrorCode.COM_002.name(),
                        ErrorCode.COM_002.defaultMessage(), request.getRequestURI()));
    }
}
