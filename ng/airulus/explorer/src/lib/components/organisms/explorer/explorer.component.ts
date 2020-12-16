import { AirulusExplorerFileUploaderComponent } from '../../../modules/file-uploader/components/file-uploader/file-uploader.component';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
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

  @Input()
  public pending: boolean;

  @Input()
  public path: string;

  @Output()
  public navigateToParent = new EventEmitter();

  @Output()
  public selectRecord = new EventEmitter<IExplorerDirectoryRecord>();

  @Output()
  public upload = new EventEmitter<FormData>();

  @Output()
  public navigateToHome = new EventEmitter<void>();

  @Output()
  public navigateToPath = new EventEmitter<string>();

  @ViewChild(AirulusExplorerFileUploaderComponent)
  public uploader: AirulusExplorerFileUploaderComponent;

  constructor() { }

  ngOnInit(): void { }

  public handleSelectRecord(record) {
    this.selectRecord.next(record);
  }

  public closeUploader() {
    this.uploader.close();
  }
}
