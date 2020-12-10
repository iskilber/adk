import { ICurrentOrganisation } from '@adk/auth/sso-client';

export class CurrentOrganisationChangedEvent {
  constructor(public readonly currentOrganisation: ICurrentOrganisation) {}
}