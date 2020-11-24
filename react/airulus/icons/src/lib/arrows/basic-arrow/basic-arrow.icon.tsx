import * as React from 'react';
import {
  SvgIcon,
  SvgIconProps
  } from '../../svg-icon.component';

export interface BasicArrowIconProps extends SvgIconProps {
    viewType?: 'standard' | 'filled';
    rotate?: number | 'top' | 'left' | 'right' | 'bottom';
}

export const BasicArrowIcon: React.FC<BasicArrowIconProps> = ({ viewType, rotate, ...props}) => {
  const _rotate = rotate ?
    rotate === 'left' ? 'rotate(-180 25 25)' :
    rotate === 'bottom' ? 'rotate(90 25 25)' :
    rotate === 'top' ? 'rotate(-90 25 25)' :
    typeof rotate === 'number' ? `rotate(${rotate})` :
    null : null;

  const transform = _rotate ? _rotate : undefined;

  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
        <path 
          transform={transform}
          d="M 27.84375 11 C 27.351563 11.078125 26.992188 11.503906 27 12 L 27 20 L 5 20 C 4.449219 20 4 20.449219 4 21 L 4 29 C 4 29.550781 4.449219 30 5 30 L 27 30 L 27 38 C 27.007813 38.375 27.222656 38.710938 27.558594 38.875 C 27.894531 39.039063 28.292969 39.003906 28.59375 38.78125 L 45.59375 25.78125 C 45.832031 25.589844 45.96875 25.304688 45.96875 25 C 45.96875 24.695313 45.832031 24.410156 45.59375 24.21875 L 28.59375 11.21875 C 28.382813 11.046875 28.113281 10.96875 27.84375 11 Z M 29 14 L 43.375 25 L 29 36 L 29 29 C 29 28.449219 28.550781 28 28 28 L 6 28 L 6 22 L 28 22 C 28.550781 22 29 21.550781 29 21 Z"/>
      }
      { viewType === 'filled' &&
        <path 
          transform={transform}
          d="M 28 39 C 27.847656 39 27.695313 38.964844 27.558594 38.894531 C 27.214844 38.726563 27 38.382813 27 38 L 27 30 L 5 30 C 4.449219 30 4 29.554688 4 29 L 4 21 C 4 20.449219 4.449219 20 5 20 L 27 20 L 27 12 C 27 11.621094 27.214844 11.273438 27.558594 11.105469 C 27.898438 10.9375 28.304688 10.976563 28.609375 11.207031 L 45.609375 24.207031 C 45.855469 24.394531 46 24.6875 46 25 C 46 25.3125 45.855469 25.605469 45.605469 25.792969 L 28.605469 38.792969 C 28.429688 38.929688 28.214844 39 28 39 Z"/>
      }
    </SvgIcon>
  );
};

BasicArrowIcon.displayName = 'BasicArrowIcon';

BasicArrowIcon.defaultProps = {
  viewType: 'standard',
};
