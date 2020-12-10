export class InvalidFileMimeTypesError extends Error {
  constructor(
    public readonly files: File[],
    public readonly expectedMimeTypes: '*' | string[]
  ) {
    super(
      `Files "${files.map((f) => f.name).join(', ')}" have invalid mime types.`
    );
  }
}