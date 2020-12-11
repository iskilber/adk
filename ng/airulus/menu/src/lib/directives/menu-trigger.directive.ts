import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef
  } from '@angular/core';
import { AirulusMenuComponent } from '../components/molecules/menu/menu.component';
import { AirulusMenuState } from '../services';
import {
  AirulusOverlayRef,
  AirulusOverlayService
  } from '@airulus/cdk';
import { filter } from 'rxjs/operators';
import { ThemesService } from '@adk/ng/airulus/themes';

@Directive({
  selector: '[arlMenuTriggerFor]',
})
export class AirulusMenuTriggerDirective implements OnInit, AfterViewInit, OnDestroy {

  private state$ = new AirulusMenuState();

  private overlayRef: AirulusOverlayRef;

  @Input('arlMenuTriggerFor')
  public menuCmp: AirulusMenuComponent;

  @Output()
  public menuOpen = this.state$.open$.pipe(filter(Boolean));

  @Output()
  public menuClose = this.state$.open$.pipe(filter((open) => !open));
  
  constructor(
    private overlay: AirulusOverlayService,
    private injector: Injector,
    private elementRef: ElementRef<HTMLElement>,
    private themes: ThemesService
  ) {}

  @HostListener('click')
  public handleClick() {
    this.toggleMenu();
  }

  public ngAfterViewInit() {
    this.assertMenu();
  }

  public ngOnInit(
    
  ) {

  }

  public ngOnDestroy() {
    this.state$.ngOnDestroy();
  }

  public get isOpen(): boolean {
    return this.state$.open;
  }

  public toggleMenu() {
    return this.isOpen ? this.closeMenu() : this.openMenu();
  }

  public openMenu() {
    if (this.state$.open) { return; }

    this.assertMenu();

    this.state$.open = true;

    // We creates a layer with backdrop clicks and kyw store handlers, where
    // we are going to put our menu recorded in view container ref.
    // The overlay is responsible for creating and running angular app
    // in portal using IVY renderer.
    this.overlayRef = this.createOverlay();

    this.overlayRef.attach(this.menuCmp.menuRef, this.injector, {
      horizontal: 'bottom',
      vertical: 'left',
      anchor: this.elementRef.nativeElement.getBoundingClientRect()
    });
  }

  public closeMenu() {
    if (!this.state$.open) { return; }

    this.assertMenu();
    this.overlayRef.destroy();
    this.overlayRef = null;
  }

  private createOverlay(): AirulusOverlayRef {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        closeOnOutsideClick: true,
        backdrop: false,
        classNames: [this.themes.currentThemeClassName ]
      });
      this.overlayRef.destroy$.subscribe(() => {
        this.state$.open = false;
      });
    }
    return this.overlayRef;
  }

  
  /**
   * Check for available Menu component instance to be available.
   */
  private assertMenu() {
    if (!this.menuCmp || !(this.menuCmp instanceof AirulusMenuComponent)) {
      throw new Error('MenuRef has to be instance of ViewContainerRef')
    }
  }
}