import {
  AfterViewInit,
  Directive,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  Renderer2
  } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl
  } from '@angular/forms';

/**
 * Inspired by https://github.com/TinkoffCreditSystems/angular-contenteditable-accessor/blob/master/projects/angular-contenteditable-accessor/src/lib/contenteditable-value-accessor.ts
 */

@Directive({
  selector: '[contenteditable][formControlName], [contenteditable][formControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AirulusFormsContentEditableValueAccessorDirective),
      multi: true
    }
  ]
})
export class AirulusFormsContentEditableValueAccessorDirective 
  implements ControlValueAccessor {

    @Input()
    public placeholder: string;

    private value: string = null;

    constructor(
      private readonly elementRef: ElementRef,
      private readonly renderer: Renderer2
    ) {}

    /*
     * onTouch callback that marks control as touched and allows FormHooks use
     */
    private onTouched = () => {};

    /*
     * onChange callback that writes value to control and allows FormHooks use
     */
    private onChange: (value: string) => void = () => {};

    @HostListener('input')
    public onInput() {
      const nextValue = this.processValue(this.elementRef.nativeElement.innerHTML);
      this.onChange(nextValue);
      this.value = nextValue;
    }

    @HostListener('blur')
    public onBlur() {
      this.onTouched();
    }

    @HostListener('focus')
    public onFocus() {
      if (!this.value) {
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerHTML',
          this.processValue(''));
      }
    }

    /*
     * Reacts to external change
     *
     * @see {@link ControlValueAccessor#writeValue}
     */
    writeValue(value: string | null) {
      this.value = value;
      const nextValue = value || this.placeholder;

      this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerHTML',
          this.processValue(nextValue),
      );
    }

    /*
     * Registers onChange callback
     *
     * @see {@link ControlValueAccessor#registerOnChange}
     */
    registerOnChange(onChange: (value: string) => void) {
      this.onChange = onChange;
    }

    /*
     * Registers onTouch callback
     *
     * @see {@link ControlValueAccessor#registerOnTouched}
     */
    registerOnTouched(onTouched: () => void) {
        this.onTouched = onTouched;
    }

    /*
    * Sets disabled state by setting contenteditable attribute to true/false
    *
    * @see {@link ControlValueAccessor#setDisabledState}
    */
    setDisabledState(disabled: boolean) {
        this.renderer.setAttribute(
            this.elementRef.nativeElement,
            'contenteditable',
            String(!disabled),
        );
    }

    /*
     * null and other falsy control values are treated as empty string to
     * prevent IE11 outputting 'null', also single <br> is replaced with empty
     * string when passed to the control
     */
    private processValue(value: string | null): string {
      const processed = value || '';

      return processed.trim() === '<br>' ? '' : processed;
    }
  }