export interface IAirulusFileDropFilesEvent {
  files: File[];
  rejectedExceededSizeLimit: File[];
  rejectedInvalidMimeType: File[];
}