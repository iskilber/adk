export interface IStoreState<S> {
  pending: boolean;
  error: any;
  state: S;
}
