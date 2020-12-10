import { Observable } from 'rxjs';
import {
  Pipe,
  PipeTransform
  } from '@angular/core';

@Pipe({name: 'arlFileToImage'})
export class AirulusFilesFileToImagePipe implements PipeTransform {
  transform(file: File): any {
    return new Observable((subscriber) => {
      const fr = new FileReader();
      fr.onload = function () {
        subscriber.next(fr.result);
      }
      fr.readAsDataURL(file);
    });
  }
}