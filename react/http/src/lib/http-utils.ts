import { catchError } from 'rxjs/operators';
import { HttpResponseError } from './errors';
import {
  Observable,
  throwError
  } from 'rxjs';

export function catchHttpStatus(
  httpStatus: number | number[], 
  handler: (response: Response) => Observable<any>
) {
  const httpStatuses = Array.isArray(httpStatus) ? httpStatus : [httpStatus];

  return (response$: Observable<Response>) => response$.pipe(
    catchError((responseOrError: Response) => 
      responseOrError instanceof HttpResponseError && httpStatuses.includes(responseOrError.status) ?
          handler(responseOrError) :
          throwError(responseOrError))
  );
}