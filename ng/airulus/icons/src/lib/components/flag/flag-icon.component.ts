import {
  Component,
  Input
  } from '@angular/core';

@Component({
  selector: 'adk-flag-icon',
  templateUrl: './flag-icon.component.html',
  styleUrls: ['./flag-icon.component.scss']
})
export class FlagIconComponent {

  @Input()
  public title?: string;

  @Input()
  public code?: string;

  @Input()
  public size?: 'sm' | 'md' | 'lg' | 'xl' = 'sm'
}