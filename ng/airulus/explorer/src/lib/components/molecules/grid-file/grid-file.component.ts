import {
  Component,
  Input,
  OnInit
  } from '@angular/core';
import { IExplorerDirectoryRecord } from '../../../interfaces';

@Component({
  selector: 'arl-explorer-grid-file',
  templateUrl: './grid-file.component.html',
  styleUrls: ['./grid-file.component.scss']
})
export class AirulusExplorerGridFileComponent implements OnInit {

  @Input()
  public record: IExplorerDirectoryRecord;

  constructor() { }

  ngOnInit(): void { }
}
