import * as React from 'react';
import {
  MinusBadgeShape,
  PlusBadgeShape,
  XBadgeShape
  } from './shapes';
import { SvgIcon } from './svg-icon.component';

export declare namespace SvgBadgeIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
    badgeViewType?: 'standard' | 'filled';
    badgeClassName?: string;
    badge?: React.FC<{ className?: string, viewType?: 'standard' | 'filled'}>;
  }

  type Component = React.FunctionComponent<Props> & {
    Add: React.FC<Props>,
    Remove: React.FC<Props>,
    Delete: React.FC<Props>
  };
}

export const SvgBadgeIcon: SvgBadgeIcon.Component = React.memo<SvgBadgeIcon.Props>((
  { viewType, badgeClassName, badgeViewType, badge, ...props }
) => {
  const BadgeComponent = badge;
  return (
    <SvgIcon {...props}>
      {props.children}
      <BadgeComponent className={badgeClassName} viewType={badgeViewType || viewType} />
    </SvgIcon>
  );
}) as any as SvgBadgeIcon.Component;

SvgBadgeIcon.displayName = 'SvgBadgeIcon';

SvgBadgeIcon.defaultProps = {
  viewType: 'standard',
};

SvgBadgeIcon.Add = React.memo(
  (props) => (<SvgBadgeIcon {...props} badge={PlusBadgeShape}/>));

SvgBadgeIcon.Remove = React.memo(
  (props) => (<SvgBadgeIcon {...props} badge={MinusBadgeShape}/>));

SvgBadgeIcon.Delete = React.memo(
  (props) => (<SvgBadgeIcon {...props} badge={XBadgeShape}/>));