import * as React from 'react';

export interface BadgeShapeProps {
  className?: string;
}

export type BadgeShapeComponent = React.FC<BadgeShapeProps>

/**
 *
 */
export const BadgeShape: BadgeShapeComponent = (props) => {
  return (
    <g className={props.className}>
      {props.children}
    </g>
  );
};

BadgeShape.displayName = 'BadgeShape';

BadgeShape.defaultProps = {};