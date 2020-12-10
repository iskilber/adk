import { BehaviorSubject } from 'rxjs';
import {
  distinctUntilChanged,
  pluck
  } from 'rxjs/operators';
import { IAirulusMenuState } from '../interfaces';
import {
  Injectable,
  OnDestroy
  } from '@angular/core';

@Injectable()
export class AirulusMenuState extends BehaviorSubject<IAirulusMenuState> {

  public open$ = this.pipe(
    pluck('open'),
    distinctUntilChanged())

  constructor() {
    super({
      open: false
    })
  }

  public get open() {
    return this.getValue().open;
  }

  public set open(open: boolean) {
    this.next({
      ...this.getValue(),
      open
    });
  }

  public ngOnDestroy() {
    this.complete();
  }
}
