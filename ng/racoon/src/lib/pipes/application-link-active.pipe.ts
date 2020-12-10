import { IRacoonApplicationLink } from '../interfaces';
import { Location } from '@angular/common';
import {
  Pipe,
  PipeTransform
  } from '@angular/core';

@Pipe({name: 'rcnIsApplicationLinkActive' })
export class RacoonIsApplicationLinkActivePipe implements PipeTransform {

  constructor() {}

  public transform(value: IRacoonApplicationLink | null): boolean {
    const currentHost = `${location.protocol}//${location.host}`;

    return value && currentHost === value.applicationUrl;
  }
}