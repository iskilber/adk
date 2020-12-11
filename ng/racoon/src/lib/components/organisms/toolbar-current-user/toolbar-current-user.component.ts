import {
  Component,
  OnInit
  } from '@angular/core';
import { CurrentUserService } from '@auth/sso-client';

@Component({
  selector: 'rcn-toolbar-current-user',
  templateUrl: './toolbar-current-user.component.html',
  styleUrls: ['./toolbar-current-user.component.scss']
})
export class RacoonToolbarCurrentUserComponent implements OnInit {
  constructor(
    public currentUser: CurrentUserService
  ) { }

  ngOnInit(): void { }
}
