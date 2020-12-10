import { IAirulusFileUploaderResizeConfig } from '../interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class AirulusFileUploaderImageResizeService {

  public resize(photo: File, config: IAirulusFileUploaderResizeConfig) {
    return this.readPhoto(photo).then((canvas) => {
      if (canvas.width > config.maxWidth) {
        canvas = this.scaleCanvas(canvas, config.maxWidth / canvas.width);
      }

      return new Promise((resolve) => {
        canvas.toBlob(resolve, photo.type, config.quality);
      })
    });
  }

  public readPhoto(photo: File): Promise<HTMLCanvasElement> {
    return this.createImage(photo).then((img: HTMLImageElement) => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

      return canvas;
    });
  }

  public scaleCanvas(canvas: HTMLCanvasElement, scale: number) {
    const scaledCanvas: HTMLCanvasElement = document.createElement('canvas');
    scaledCanvas.width = canvas.width * scale;
    scaledCanvas.height = canvas.height * scale;

    scaledCanvas
        .getContext('2d')
        .drawImage(canvas, 0, 0, scaledCanvas.width, scaledCanvas.height);

    return scaledCanvas;
  }

  public createImage(photo: File) {
    const img: HTMLImageElement = document.createElement('img') as HTMLImageElement;
    
    return this.readFile(photo).then((src: string) => {
      return new Promise((resolve) => {
        img.onload = () => resolve(img);
        img.onerror = (event) => console.error(event);
        img.src = src;
      })
    });
  }

  public readFile(photo: File): Promise<string | ArrayBuffer> {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.onload = (event: ProgressEvent<FileReader>) => 
          resolve(event.target.result);
      fileReader.readAsDataURL(photo);
    });
  }
}