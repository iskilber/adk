import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef
  } from '@angular/core';
import {
  IExplorerDirectory,
  IExplorerDirectoryRecord
  } from '../../../interfaces';

@Component({
  selector: 'arl-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class AirulusExplorerComponent implements OnInit {

  public view = 'grid';

  public isDraggingFile = false;

  @Input()
  public uploaderFilesOverviewTemplate: TemplateRef<any>;

  @Input()
  public fileUploaderAccept: '*' | string[];

  @Input()
  public directory: IExplorerDirectory;

  @Output()
  public selectRecord = new EventEmitter<IExplorerDirectoryRecord>();

  @Output()
  public upload = new EventEmitter<FormData>();

  constructor() { }

  ngOnInit(): void { }

  public handleSelectRecord(record) {
    this.selectRecord.next(record);
  }
}
