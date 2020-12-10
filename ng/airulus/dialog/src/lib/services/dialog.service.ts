import { AirulusDialogRefService } from './dialog-ref.service';
import { AirulusOverlayService } from '@airulus/cdk';
import {
  ComponentFactoryResolver,
  Injectable,
  Injector
  } from '@angular/core';
import { ThemesService } from '@adk/ng/airulus/themes';

@Injectable()
export class AirulusDialogService {
  constructor(
    private injector: Injector,
    private overlay: AirulusOverlayService,
    private theme: ThemesService,
    private resolver: ComponentFactoryResolver
  ) {}

  public create(): AirulusDialogRefService {
    return new AirulusDialogRefService(
      this.overlay,
      this.theme,
      this.injector
    );
  }
}