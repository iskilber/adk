import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import {
  InvalidFileMimeTypesError,
  InvalidFileSizeError
  } from '@airulus/cdk';

@Component({
  selector: 'arl-file-drop-container',
  templateUrl: './file-drop-container.component.html',
  styleUrls: ['./file-drop-container.component.scss']
})
export class AirulusFileDropContainerComponent implements OnInit {

  @Input()
  public invalidMimeTypesMessage = 'Invalid mime types!';

  @Input()
  public invalidFileSizeMessage = 'Invalid file size!';

  @Output()
  public fileDropError = new EventEmitter();

  public isDraggingFile = false;

  public dragError: any;

  constructor() { }

  ngOnInit(): void { }

  public handleDragError(error: any) {
    this.fileDropError.next(error);
    this.dragError = error;
  }

  public get message(): string {
    if (this.dragError instanceof InvalidFileMimeTypesError) {
      return this.invalidMimeTypesMessage;
    } else if (this.dragError instanceof InvalidFileSizeError) {
      return this.invalidFileSizeMessage;
    }
  }
}
