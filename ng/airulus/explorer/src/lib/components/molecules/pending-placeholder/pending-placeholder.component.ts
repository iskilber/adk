import {
  Component,
  OnInit
  } from '@angular/core';
import { IExplorerDirectoryRecord } from '../../../interfaces';

@Component({
  selector: 'arl-explorer-pending-placeholder',
  templateUrl: './pending-placeholder.component.html',
  styleUrls: ['./pending-placeholder.component.scss']
})
export class AirulusExplorerPendingPlaceholderComponent implements OnInit {

  public placeholders: IExplorerDirectoryRecord[] = Array(9).fill(0).map(() => ({
    contentType: 'placeholder',
    type: 'file',
    name: 'Loading...',
    fileRef: null,
    path: null,
    pathname: null
  }));

  constructor() { }

  ngOnInit() {
  }

}
