export function checkFileType(mimeTypes: Array<string>, file?: File) {
  if (!file) return;
  return mimeTypes.some((item) => item === file.type);
}
