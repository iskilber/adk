import {
  HttpEvent,
  HttpResponse
  } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RacoonHttpCacheEntry {
  ttl: number;
  createdAt: number;
  item: HttpResponse<any> | Observable<HttpEvent<any>>;
}

export class RacoonHttpCacheService {

  private cacheData = new Map<string, RacoonHttpCacheEntry>();

  public has(cacheKey): boolean {
    const entry = this.cacheData.get(cacheKey);
    const isExpired = entry && (entry.createdAt + entry.ttl) > Date.now();

    if (isExpired) {
      this.cacheData.delete(cacheKey);
    }

    return isExpired;
  }

  public get<T>(cacheKey): HttpResponse<T> | Observable<HttpEvent<any>> | null {
    const entry = this.cacheData.get(cacheKey);
    const isExpired = entry && (entry.createdAt + entry.ttl) < Date.now();

    if (isExpired && entry) {
      this.cacheData.delete(cacheKey);
    }
    
    return !isExpired && entry ? entry.item : null;
  }

  public set(
    cacheKey: string, 
    ttl: number, 
    response: HttpResponse<any> | Observable<HttpEvent<any>>
  ): void {
    this.cacheData.set(cacheKey, {
      ttl,
      createdAt: Date.now(),
      item: response
    });
  }

  public clear(): void {
    this.cacheData.clear();
  }

  public delete(cacheKey: string): boolean {
    return this.cacheData.delete(cacheKey);
  }
}
