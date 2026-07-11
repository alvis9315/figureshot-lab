package com.figureshotlab.storage;

import com.figureshotlab.common.exception.BusinessException;
import com.figureshotlab.common.exception.ErrorCode;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class LocalStorageService implements StorageService {

    private final Path baseDir;

    public LocalStorageService(@Value("${app.storage.local-dir}") String localDir) {
        this.baseDir = Path.of(localDir).toAbsolutePath().normalize();
    }

    @Override
    public String store(InputStream content, String originalFilename, String contentType) {
        String extension = originalFilename != null && originalFilename.contains(".")
                ? originalFilename.substring(originalFilename.lastIndexOf('.'))
                : "";
        String filename = UUID.randomUUID() + extension;
        try {
            Files.createDirectories(baseDir);
            Path target = baseDir.resolve(filename).normalize();
            if (!target.startsWith(baseDir)) {
                throw new BusinessException(ErrorCode.FIG_002, "Invalid filename");
            }
            Files.copy(content, target, StandardCopyOption.REPLACE_EXISTING);
            return filename;
        } catch (IOException e) {
            throw new BusinessException(ErrorCode.STO_001, "Failed to store file");
        }
    }

    @Override
    public void delete(String storedPath) {
        try {
            Path target = baseDir.resolve(storedPath).normalize();
            if (target.startsWith(baseDir)) {
                Files.deleteIfExists(target);
            }
        } catch (IOException e) {
            throw new BusinessException(ErrorCode.STO_001, "Failed to delete file");
        }
    }
}
