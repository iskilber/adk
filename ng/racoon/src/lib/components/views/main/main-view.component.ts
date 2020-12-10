import {
  AuthSsoClientComponent,
  CurrentOrganisationService
  } from '@adk/auth/sso-client';
import {
  Component,
  Input,
  OnInit,
  ViewChild
  } from '@angular/core';
import { IRacoonApplicationLink } from '../../../interfaces';
import {
  map,
  tap
  } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'rcn-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  @ViewChild(AuthSsoClientComponent, { static: true })
  public ssoClientRef: AuthSsoClientComponent;

  @Input()
  public themeListUrl: string;

  public applicationLinks$: Observable<IRacoonApplicationLink[]>;

  constructor(
    public currentOrganisation: CurrentOrganisationService
  ) { 
    this.applicationLinks$ = this.currentOrganisation.query.applications$.pipe(
      map((applications) => applications
        .filter((app) => app.adminUrl)
        .map((app) => ({
          name: app.name,
          code: app.code,
          applicationUrl: app.adminUrl,
          logoUrl: app.logoUrl
        }))));
  }

  public ngOnInit(): void { }

  public handleLogout() {
    sessionStorage.clear();
    setTimeout(() => {
      location.reload();
    }, 50);
  }

  public logout() {
    this.ssoClientRef.requestLogout();
  }
}
