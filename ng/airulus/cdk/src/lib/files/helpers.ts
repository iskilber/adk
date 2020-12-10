export function fromFileList(files: FileList): File[] {
  const fileArr = [];

  for (let i = 0; i < files.length; i++) {
    fileArr.push(files.item(i));
  }

  return fileArr;
}

export const FILE_FILTER_NOT = false;

export function filterFileByMimeTypes(
  mimeTypes: '*' | string[],
  accepted = true
) {
  const regPatterns = !mimeTypes ? [] :
      mimeTypes === '*' ? ['.*'] :
      mimeTypes.map((mimeType) => mimeType.replace('*', '.*'));

  return (file: File): boolean => {
    if (accepted) {
      return regPatterns.length === 0 ||
          regPatterns.some((pattern) => new RegExp(pattern).test(file.type));
    } else {
      return regPatterns.length > 0 &&
          !regPatterns.some((pattern) => new RegExp(pattern).test(file.type))
    }
  }
}

export function filterFileMaxBySize(maxSize: number, accepted = true) {
  return (file: File): boolean => accepted ? 
      !maxSize || file.size <= maxSize :
      maxSize && file.size > maxSize;
}