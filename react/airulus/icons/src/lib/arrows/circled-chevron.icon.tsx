import * as React from 'react';
import { SvgIcon } from '../svg-icon.component';

export declare namespace CircledChevronIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
    rotate?: number | 'top' | 'left' | 'right' | 'bottom'
  }
  type Component = React.FunctionComponent<Props>;
}

export const CircledChevronIcon: CircledChevronIcon.Component = (props) => {
  const rotate = props.rotate ?
      props.rotate === 'top' ? 'rotate(-90 25 25)' :
      props.rotate === 'left' ? 'rotate(-180 25 25)' :
      props.rotate === 'bottom' ? 'rotate(90 25 25)' :
      typeof props.rotate === 'number' ? `rotate(${props.rotate})` :
      null : null;
  const transform = rotate ? `transform="${rotate}"` : '';

  return (
    <SvgIcon {...props}>
      { props.viewType === 'standard' &&
          <path
            transform={transform}
            d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 21.90625 13.96875 C 21.863281 13.976563 21.820313 13.988281 21.78125 14 C 21.40625 14.066406 21.105469 14.339844 21 14.703125 C 20.894531 15.070313 21.003906 15.460938 21.28125 15.71875 L 30.5625 25 L 21.28125 34.28125 C 20.882813 34.679688 20.882813 35.320313 21.28125 35.71875 C 21.679688 36.117188 22.320313 36.117188 22.71875 35.71875 L 32.71875 25.71875 C 32.914063 25.53125 33.023438 25.269531 33.023438 25 C 33.023438 24.730469 32.914063 24.46875 32.71875 24.28125 L 22.71875 14.28125 C 22.511719 14.058594 22.210938 13.945313 21.90625 13.96875 Z"/>}
      { props.viewType === 'filled' &&
          <path
            transform={transform}
            d="M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 32.707031 25.707031 L 22.707031 35.707031 C 22.511719 35.902344 22.257813 36 22 36 C 21.742188 36 21.488281 35.902344 21.292969 35.707031 C 20.902344 35.316406 20.902344 34.683594 21.292969 34.292969 L 30.585938 25 L 21.292969 15.707031 C 20.902344 15.316406 20.902344 14.683594 21.292969 14.292969 C 21.683594 13.902344 22.316406 13.902344 22.707031 14.292969 L 32.707031 24.292969 C 33.097656 24.683594 33.097656 25.316406 32.707031 25.707031 Z"/>}
    </SvgIcon>
  );
};

CircledChevronIcon.displayName = 'CircledChevron';

CircledChevronIcon.defaultProps = {
  viewType: 'standard',
};
