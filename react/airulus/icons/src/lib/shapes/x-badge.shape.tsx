import * as React from 'react';

export declare namespace XBadgeShape {
  interface Props {
    viewType: 'standard' | 'filled';
    className?: string;
  }
  type Component = React.FunctionComponent<Props>;
}

export const XBadgeShape: XBadgeShape.Component = React.memo(({viewType, className}) => (
  <g className={className}>
    {viewType === 'standard' && <path d="M 44.199219 37.199219 L 41.398438 40 L 44.199219 42.800781 C 44.601562 43.199219 44.601562 43.800781 44.199219 44.199219 C 44 44.398438 43.699219 44.5 43.5 44.5 C 43.300781 44.5 43 44.398438 42.800781 44.199219 L 40 41.398438 L 37.199219 44.199219 C 37 44.398438 36.699219 44.5 36.5 44.5 C 36.300781 44.5 36 44.398438 35.800781 44.199219 C 35.398438 43.800781 35.398438 43.199219 35.800781 42.800781 L 38.601562 40 L 35.800781 37.199219 C 35.398438 36.800781 35.398438 36.199219 35.800781 35.800781 C 36.199219 35.398438 36.800781 35.398438 37.199219 35.800781 L 40 38.601562 L 42.800781 35.800781 C 43.199219 35.398438 43.800781 35.398438 44.199219 35.800781 C 44.601562 36.199219 44.601562 36.800781 44.199219 37.199219 Z M 50 40 C 50 45.5 45.5 50 40 50 C 34.5 50 30 45.5 30 40 C 30 34.5 34.5 30 40 30 C 45.5 30 50 34.5 50 40 Z M 48 40 C 48 35.601562 44.398438 32 40 32 C 35.601562 32 32 35.601562 32 40 C 32 44.398438 35.601562 48 40 48 C 44.398438 48 48 44.398438 48 40 Z M 48 40 "/> }
    {viewType === 'filled' && <path d="M 40 30 C 34.5 30 30 34.5 30 40 C 30 45.5 34.5 50 40 50 C 45.5 50 50 45.5 50 40 C 50 34.5 45.5 30 40 30 Z M 44.199219 42.800781 C 44.601562 43.199219 44.601562 43.800781 44.199219 44.199219 C 44 44.398438 43.699219 44.5 43.5 44.5 C 43.300781 44.5 43 44.398438 42.800781 44.199219 L 40 41.398438 L 37.199219 44.199219 C 37 44.398438 36.699219 44.5 36.5 44.5 C 36.300781 44.5 36 44.398438 35.800781 44.199219 C 35.398438 43.800781 35.398438 43.199219 35.800781 42.800781 L 38.601562 40 L 35.800781 37.199219 C 35.398438 36.800781 35.398438 36.199219 35.800781 35.800781 C 36.199219 35.398438 36.800781 35.398438 37.199219 35.800781 L 40 38.601562 L 42.800781 35.800781 C 43.199219 35.398438 43.800781 35.398438 44.199219 35.800781 C 44.601562 36.199219 44.601562 36.800781 44.199219 37.199219 L 41.398438 40 Z M 44.199219 42.800781 "/> }
  </g>

));

XBadgeShape.displayName = 'XBadgeShape';

XBadgeShape.defaultProps = {};
