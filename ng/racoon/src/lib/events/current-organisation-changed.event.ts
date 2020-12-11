import { ICurrentOrganisation } from '@auth/sso-client';

export class CurrentOrganisationChangedEvent {
  constructor(public readonly currentOrganisation: ICurrentOrganisation) {}
}