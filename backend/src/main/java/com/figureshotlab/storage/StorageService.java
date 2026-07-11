package com.figureshotlab.storage;

import java.io.InputStream;

/**
 * 檔案儲存抽象;MVP 用本機實作,正式換 R2/S3 時只加實作不動呼叫端(ADR-0002)。
 */
public interface StorageService {

    /**
     * @return 可存入 DB 的檔案存取路徑(photo_url)
     */
    String store(InputStream content, String originalFilename, String contentType);

    void delete(String storedPath);
}
