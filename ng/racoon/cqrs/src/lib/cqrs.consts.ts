import { InjectionToken } from '@angular/core';

export const RACOON_CQRS_COMMANDS = new InjectionToken('RACOON_CQRS_COMMANDS');

export const RACOON_CQRS_EVENTS = new InjectionToken('RACOON_CQRS_EVENTS');

export const RACOON_CQRS_QUERIES = new InjectionToken('RACOON_CQRS_QUERIES');

export const RACOON_COMMAND_HANDLER_METADATA = '__racoon.commandHandler__';

export const RACOON_QUERY_HANDLER_METADATA = '__racoon.queryHandler__';

export const RACOON_EVENTS_HANDLER_METADATA = '__racoon.eventsHandler';

export const RACOON_SAGA_METADATA = '__racoon.saga__';