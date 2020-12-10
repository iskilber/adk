export interface IAirulusExplorerFileUploaderOverviewContext {
  files: File[];
  onSubmit: (files: FormData) => void;
}