import {
  Pipe,
  PipeTransform
  } from '@angular/core';

@Pipe({ name: 'arlIconDirection' })
export class IconDirectionPipe implements PipeTransform {
  transform(rotate: 'right' | 'left' | 'bottom' | 'up'): string {
    const _rotate = rotate ?
      rotate === 'up' ? 'rotate(-180 25 25)' :
      rotate === 'left' ? 'rotate(90 25 25)' :
      rotate === 'right' ? 'rotate(-90 25 25)' :
      typeof rotate === 'number' ? `rotate(${rotate})` :
      null : null;

    const transform = _rotate ? _rotate : undefined;

    return transform;
  }
}