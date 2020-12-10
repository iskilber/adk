import {
  AirulusOverlayRef,
  AirulusOverlayService,
  IComponentType
  } from '@airulus/cdk';
import {
  ComponentFactoryResolver,
  Injectable,
  Injector,
  TemplateRef
  } from '@angular/core';
import { IAirulusDialogConfigInterface } from '../interfaces';
import { ThemesService } from '@adk/ng/airulus/themes';

@Injectable()
export class AirulusDialogRefService {

  private overlayRef: AirulusOverlayRef;

  constructor(
    private overlay: AirulusOverlayService,
    private themes: ThemesService,
    private defaultInjector: Injector
  ) {}

  public open<T>(
    componentOrTemplate: IComponentType<T> | TemplateRef<T>, 
    config: IAirulusDialogConfigInterface = {}
  ): this {
    if (this.overlayRef) { return; }
    const injector = config.injector || this.defaultInjector;

    this.overlayRef = this.createOverlay(config);

    this.overlayRef.attach(componentOrTemplate, injector, {
      horizontal: 'center',
      vertical: 'center'
    });

    return this;
  }

  public close() {
    this.overlayRef.destroy();
    this.overlayRef = null;
  }

  private createOverlay(
    config: IAirulusDialogConfigInterface
  ): AirulusOverlayRef {
    return this.overlay.create({
      backdrop: config.backdrop,
      classNames: [this.themes.currentThemeClassName],
      closeOnOutsideClick: true
    });
  }
}