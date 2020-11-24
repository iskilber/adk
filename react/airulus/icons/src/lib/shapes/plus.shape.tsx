import * as React from 'react';

export declare namespace PlusBadgeShape {
  interface Props {
    viewType: 'standard' | 'filled';
    className?: string;
  }
  type Component = React.FunctionComponent<Props>;
}

export const PlusBadgeShape: PlusBadgeShape.Component = React.memo(({viewType, className}) => (
  <g className={className}>
    {viewType === 'filled' && <path d="M 40 30 C 34.5 30 30 34.5 30 40 C 30 45.5 34.5 50 40 50 C 45.5 50 50 45.5 50 40 C 50 34.5 45.5 30 40 30 Z M 44.898438 41 L 41 41 L 41 44.898438 C 41 45.5 40.601562 45.898438 40 45.898438 C 39.398438 45.898438 39 45.5 39 44.898438 L 39 41 L 35.101562 41 C 34.5 41 34.101562 40.601562 34.101562 40 C 34.101562 39.398438 34.5 39 35.101562 39 L 39 39 L 39 35 C 39 34.398438 39.398438 34 40 34 C 40.601562 34 41 34.398438 41 35 L 41 39 L 44.898438 39 C 45.5 39 45.898438 39.398438 45.898438 40 C 45.898438 40.601562 45.5 41 44.898438 41 Z M 44.898438 41 "/> }
    {viewType === 'standard' && <path d="M 45.898438 40 C 45.898438 40.601562 45.5 41 44.898438 41 L 41 41 L 41 44.898438 C 41 45.5 40.601562 45.898438 40 45.898438 C 39.398438 45.898438 39 45.5 39 44.898438 L 39 41 L 35.101562 41 C 34.5 41 34.101562 40.601562 34.101562 40 C 34.101562 39.398438 34.5 39 35.101562 39 L 39 39 L 39 35.101562 C 39 34.5 39.398438 34.101562 40 34.101562 C 40.601562 34.101562 41 34.5 41 35.101562 L 41 39 L 44.898438 39 C 45.5 39 45.898438 39.398438 45.898438 40 Z M 50 40 C 50 45.5 45.5 50 40 50 C 34.5 50 30 45.5 30 40 C 30 34.5 34.5 30 40 30 C 45.5 30 50 34.5 50 40 Z M 48 40 C 48 35.601562 44.398438 32 40 32 C 35.601562 32 32 35.601562 32 40 C 32 44.398438 35.601562 48 40 48 C 44.398438 48 48 44.398438 48 40 Z M 48 40 "/> }
  </g>
));

PlusBadgeShape.displayName = 'PlusBadgeShape';

PlusBadgeShape.defaultProps = {};