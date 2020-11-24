import * as React from 'react';
import { SvgIcon } from '../../svg-icon.component';

export declare namespace ExpandArrowIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
    rotate?: number | 'top' | 'left' | 'right' | 'bottom'
  }
  type Component = React.FunctionComponent<Props>;
}

export const ExpandArrowIcon: ExpandArrowIcon.Component = ({viewType, rotate, ...props}) => {
  const _rotate = rotate ?
      rotate === 'top' ? 'rotate(-180 25 25)' :
      rotate === 'left' ? 'rotate(90 25 25)' :
      rotate === 'right' ? 'rotate(-90 25 25)' :
      typeof rotate === 'number' ? `rotate(${rotate})` :
      null : null;
  const transform = _rotate ? _rotate : undefined;

  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
          <path
            transform={transform}
            d="M 4.84375 12.90625 L 2.75 15 L 25 37.25 L 47.25 15 L 45.15625 12.90625 L 25 33.0625 Z"/>}
      { viewType === 'filled' &&
          <path
            transform={transform}
            d="M 44.984375 12.96875 C 44.453125 12.984375 43.953125 13.203125 43.585938 13.585938 L 25 32.171875 L 6.414063 13.585938 C 6.035156 13.199219 5.519531 12.980469 4.976563 12.980469 C 4.164063 12.980469 3.433594 13.476563 3.128906 14.230469 C 2.820313 14.984375 3.003906 15.847656 3.585938 16.414063 L 23.585938 36.414063 C 24.367188 37.195313 25.632813 37.195313 26.414063 36.414063 L 46.414063 16.414063 C 47.007813 15.84375 47.195313 14.964844 46.875 14.203125 C 46.558594 13.441406 45.808594 12.953125 44.984375 12.96875 Z"/>}
    </SvgIcon>
  );
};

ExpandArrowIcon.displayName = 'ExpandArrow';

ExpandArrowIcon.defaultProps = {
  viewType: 'standard',
};
