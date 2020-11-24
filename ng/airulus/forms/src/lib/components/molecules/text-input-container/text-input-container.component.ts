import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'adk-text-input-container',
  templateUrl: './text-input-container.component.html',
  styleUrls: ['./text-input-container.component.scss']
})
export class TextInputContainerComponent implements OnInit {

  @Input()
  public disabled?: boolean;

  @Input()
  public value: string;

  @Output()
  public inputReset = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
