import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RacoonCommandBus,
  RacoonEventBus,
  RacoonQueryBus
  } from './services';

@NgModule({
  imports: [ CommonModule ],
  providers: [
    RacoonCommandBus,
    RacoonQueryBus,
    RacoonEventBus
  ],
  exports: [

  ]
})
export class RacoonCqrsModule {
  constructor(
    private commands: RacoonCommandBus
  ) {
    console.log(commands);
    console.log('START RACOON CQRS!!!');
  }
}
