import { DATA_ICONS } from './data';
import { FILE_ICONS } from './files';
import { FlagIconComponent } from './flag/flag-icon.component';
import { HEALTHCARE_ICONS } from './healthcare';
import { MATH_ICONS } from './math';
import { MEDIA_ICONS } from './media';
import { MESSAGING_ICONS } from './messaging';
import { NETWORKING_ICONS } from './networking';
import { PROFILE_ICONS } from './profile';
import { SECURITY_ICONS } from './security';
import { SvgIconComponent } from './core';
import { USER_INTERFACE_ICONS } from './user-interface';

export const COMPONENTS = [
  ...PROFILE_ICONS,
  ...HEALTHCARE_ICONS,
  ...USER_INTERFACE_ICONS,
  ...MESSAGING_ICONS,
  ...DATA_ICONS,
  ...NETWORKING_ICONS,
  ...SECURITY_ICONS,
  ...MATH_ICONS,
  ...MEDIA_ICONS,
  ...FILE_ICONS,
  SvgIconComponent,
  FlagIconComponent
];
