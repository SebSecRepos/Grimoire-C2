import path from "path";

function getSafeUploadPath(userDir, BASE_UPLOAD_DIR='') {
  const sanitized = userDir.replace(/[^a-zA-Z0-9_\-/]/g, '');
  const targetPath = path.join(BASE_UPLOAD_DIR, sanitized);
  const normalized = path.normalize(targetPath);

  
  if (!normalized.startsWith(path.normalize(BASE_UPLOAD_DIR))) {
    throw new Error('Invalid destination path');
  }

  return normalized;
}

const sanitizeFilename = (input) => {
  return input.replace(/[^a-zA-Z0-9._-]/g, '').substring(0, 100);
};


export { getSafeUploadPath, sanitizeFilename }