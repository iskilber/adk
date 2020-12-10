export class InvalidFileSizeError extends Error {
  constructor(
    public readonly files: File[],
    public readonly expectedSize: number
  ) {
    super(
      `Files "${files.map((f) => f.name).join(', ')}" are exceeding limitted file size!`
    );
  }
}