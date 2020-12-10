import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
  } from '@angular/core';
import {
  IExplorerDirectory,
  IExplorerDirectoryRecord
  } from '../../../interfaces';

@Component({
  selector: 'arl-explorer-grid-view',
  templateUrl: './explorer-grid-view.component.html',
  styleUrls: ['./explorer-grid-view.component.scss']
})
export class AirulusExplorerGridViewComponent implements OnInit {

  @ViewChild('fileDropTrigger')
  public fileDropTrigger: ElementRef<HTMLElement>;

  @Input()
  public directory: IExplorerDirectory;

  @Output()
  public selectRecord = new EventEmitter<IExplorerDirectoryRecord>();
  
  public dragOver: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  public handleDragEnter(event: Event) {
    console.log('ENTER', this.fileDropTrigger.nativeElement);
    if (event.target === this.fileDropTrigger.nativeElement) {
      console.log('ENTER', event.target);
    }
  }

  public handleDragLeave(event: Event) {
    if (event.target === this.fileDropTrigger.nativeElement) {
      console.log('LEAVE', event.target);
    }
  }

  public handleSelectRecord(record) {
    this.selectRecord.next(record)
  }
}
