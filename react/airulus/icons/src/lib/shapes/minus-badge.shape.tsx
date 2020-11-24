import * as React from 'react';

export declare namespace MinusBadgeShape {
  interface Props {
    viewType: 'standard' | 'filled'
    className?: string;
  }
  type Component = React.FunctionComponent<Props>;
}

export const MinusBadgeShape: MinusBadgeShape.Component = React.memo((props) => {
  switch (props.viewType) {
    case 'filled':
      return (<path d="M 40 30 C 34.5 30 30 34.5 30 40 C 30 45.5 34.5 50 40 50 C 45.5 50 50 45.5 50 40 C 50 34.5 45.5 30 40 30 Z M 44.898438 41 L 35.101562 41 C 34.5 41 34.101562 40.601562 34.101562 40 C 34.101562 39.398438 34.5 39 35.101562 39 L 45 39 C 45.601562 39 46 39.398438 46 40 C 46 40.601562 45.5 41 44.898438 41 Z M 44.898438 41 "/>)
    case 'standard':
    default:
      return (<path d="M 45.898438 40 C 45.898438 40.601562 45.5 41 44.898438 41 L 35.101562 41 C 34.5 41 34.101562 40.601562 34.101562 40 C 34.101562 39.398438 34.5 39 35.101562 39 L 45 39 C 45.5 39 45.898438 39.398438 45.898438 40 Z M 50 40 C 50 45.5 45.5 50 40 50 C 34.5 50 30 45.5 30 40 C 30 34.5 34.5 30 40 30 C 45.5 30 50 34.5 50 40 Z M 48 40 C 48 35.601562 44.398438 32 40 32 C 35.601562 32 32 35.601562 32 40 C 32 44.398438 35.601562 48 40 48 C 44.398438 48 48 44.398438 48 40 Z M 48 40 "/>);
  }
});

MinusBadgeShape.displayName = 'MinusBadgeShape';

MinusBadgeShape.defaultProps = {};
