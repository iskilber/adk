import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RacoonHttpCacheInterceptor } from './http-cache.interceptor';
import { RacoonHttpCacheService } from './http-cache.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RacoonHttpCacheInterceptor,
      multi: true
    },
    RacoonHttpCacheService
  ]
  
})
export class RacoonHttpCacheModule {}
