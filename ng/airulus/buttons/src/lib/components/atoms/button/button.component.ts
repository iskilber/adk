import {
  Component,
  HostBinding,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: `button[adk-button], button[adk-primary-button]`,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input()
  public pending: boolean;

  @Input()
  public disabled;

  @HostBinding('class.disabled')
  public get isDisabled() {
    return this.disabled;
  }

  constructor() { }

  ngOnInit(): void { 
    console.log('CREATE BUTTON')
  }
}
