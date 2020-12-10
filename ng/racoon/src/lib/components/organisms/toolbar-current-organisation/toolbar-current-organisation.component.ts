import { AirulusMenuTriggerDirective } from '@adk/ng/airulus/menu';
import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef
  } from '@angular/core';
import { CurrentOrganisationChangedEvent } from '../../../events';
import {
  CurrentOrganisationService,
  CurrentUserService
  } from '@adk/auth/sso-client';
import { RacoonEventBus } from '@racoon/cqrs';

@Component({
  selector: 'rcn-toolbar-current-organisation',
  templateUrl: './toolbar-current-organisation.component.html',
  styleUrls: ['./toolbar-current-organisation.component.scss']
})
export class RacoonToolbarCurrentOrganisationComponent implements OnInit {

  @ViewChild(AirulusMenuTriggerDirective)
  public menuTrigger: AirulusMenuTriggerDirective;

  constructor(
    public currentUser: CurrentUserService,
    public currentOrganisation: CurrentOrganisationService,
    public eventBus: RacoonEventBus
  ) { }

  ngOnInit(): void { 
    this.currentOrganisation.load();
  }

  public handleSelect(option) {
    console.log(option);
    this.menuTrigger.closeMenu();
    this.currentOrganisation.organisation = option;
    this.eventBus.dipatch(new CurrentOrganisationChangedEvent(option));
  }
}
