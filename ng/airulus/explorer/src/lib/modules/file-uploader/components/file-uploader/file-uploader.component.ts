import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef
  } from '@angular/core';
import { IAirulusExplorerFileUploaderOverviewContext } from '../../interfaces/files-overview-context.interface';
import { IAirulusFileDropFilesEvent } from '@adk/ng/airulus/forms';

@Component({
  selector: 'arl-explorer-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class AirulusExplorerFileUploaderComponent implements OnInit {

  public isDraggingFile = false;

  public filesToAccept: IAirulusFileDropFilesEvent;

  @Input()
  public filesOverviewTemplate: TemplateRef<IAirulusExplorerFileUploaderOverviewContext>;

  @Input()
  public accept: '*' | string[];

  @Output()
  public upload = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public triggerUploadWizard(files: IAirulusFileDropFilesEvent) {
    this.filesToAccept = files;
  }

  public get fileOverviewContext(): IAirulusExplorerFileUploaderOverviewContext {
    return {
      files: this.filesToAccept ? this.filesToAccept.files : [],
      onSubmit: this.handleSubmit,
      onReset: this.close
    }
  }

  public handleSubmit = (data: FormData) => {
    this.upload.next(data);
  }

  public close = () => {
    this.filesToAccept = null;
  }
}
