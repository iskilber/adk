import {
  Component,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'arl-explorer-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class AirulusExplorerFilePreviewComponent implements OnInit {

  @Input()
  public mimeType: string;

  @Input()
  public thumbnailLogoUrl: string;

  constructor() { }

  ngOnInit(): void { }
}

