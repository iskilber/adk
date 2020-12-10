import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
  } from '@nestjs/common';
import {
  filter,
  map
  } from 'rxjs/operators';
import { Observable } from 'rxjs';


export class ResponseMappingInterceptor implements NestInterceptor {
  constructor(
    private rootKey: string,
    private schema: any
  ) {}

  public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => {
      return {
        [this.rootKey]: this.parseData(data, this.schema)
      }
    }));
  }

  private parseData(data: any, schema: any) {
    if (typeof schema === 'function') {
      return schema(data);
    } else {
      return Reflect.ownKeys(schema)
      .filter((propKey: string) => data[propKey] !== undefined)
      .reduce((response, propKey) => {

        console.log(propKey);
        const mapper = schema[propKey];
        let value;
        if (typeof mapper === 'function') {
          console.log(mapper, propKey);
          value = mapper(data[propKey]);
        } else if (Array.isArray(mapper)) {
          value = data[propKey].map((item) => this.parseData(item, mapper[0]));
        } else if (typeof mapper === 'object') {
          value = this.parseData(data[propKey], mapper);
        }
        return {
          ...response,
          [propKey]: value
        }
      }, {});
    }
  }
}