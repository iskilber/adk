import {
  BehaviorSubject,
  Subject
  } from 'rxjs';
import {
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnInit
  } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl
  } from '@angular/forms';

@Component({
  selector: 'adk-text-input-field',
  templateUrl: './text-input-field.component.html',
  styleUrls: ['./text-input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputFieldComponent),
      multi: true
    }
  ]
})
export class TextInputFieldComponent implements OnInit, ControlValueAccessor {

  @Input()
  public label: string

  @Input()
  public required?: boolean;

  @Input()
  public disabled?: boolean;

  public onChange: any;

  public onFocus: any;

  public value: string;

  public disabled$ = new BehaviorSubject<boolean>(false);

  constructor(
    public injector: Injector
  ) {}

  public get control() {
    return this.injector.get(NgControl);
  }

  ngOnInit(): void { }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onFocus = fn;
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled$.next(isDisabled);
  }

  public handleChange(value: any) {
    this.onChange(value);
    this.value = value;
  }
}
