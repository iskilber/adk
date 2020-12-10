export interface IDocument {
  uuid: string;
  version: number;
  createdAt: Date;
  updatedAt?: Date;
}
