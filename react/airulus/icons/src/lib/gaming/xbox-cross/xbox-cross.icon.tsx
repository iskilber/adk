import * as React from 'react';
import { SvgIcon } from '../../svg-icon.component';

export declare namespace XBoxCrossIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
  }
  type Component = React.FunctionComponent<Props>;
}

export const XBoxCrossIcon: XBoxCrossIcon.Component = ({ viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
        <path d="M 18.8125 3 C 18.335938 3.089844 17.992188 3.511719 18 4 L 18 18 L 4 18 C 3.449219 18 3 18.449219 3 19 L 3 31 C 3 31.550781 3.449219 32 4 32 L 18 32 L 18 46 C 18 46.550781 18.449219 47 19 47 L 31 47 C 31.550781 47 32 46.550781 32 46 L 32 32 L 46 32 C 46.550781 32 47 31.550781 47 31 L 47 19 C 47 18.449219 46.550781 18 46 18 L 32 18 L 32 4 C 32 3.449219 31.550781 3 31 3 L 19 3 C 18.96875 3 18.9375 3 18.90625 3 C 18.875 3 18.84375 3 18.8125 3 Z M 20 5 L 30 5 L 30 19 C 30 19.550781 30.449219 20 31 20 L 45 20 L 45 30 L 31 30 C 30.449219 30 30 30.449219 30 31 L 30 45 L 20 45 L 20 31 C 20 30.449219 19.550781 30 19 30 L 5 30 L 5 20 L 19 20 C 19.550781 20 20 19.550781 20 19 Z"/>
      }
      { viewType === 'filled' &&
        <path d="M 31 47 L 19 47 C 18.449219 47 18 46.554688 18 46 L 18 32 L 4 32 C 3.449219 32 3 31.554688 3 31 L 3 19 C 3 18.449219 3.449219 18 4 18 L 18 18 L 18 4 C 18 3.449219 18.449219 3 19 3 L 31 3 C 31.554688 3 32 3.449219 32 4 L 32 18 L 46 18 C 46.554688 18 47 18.449219 47 19 L 47 31 C 47 31.554688 46.554688 32 46 32 L 32 32 L 32 46 C 32 46.554688 31.554688 47 31 47 Z"/>
      }
    </SvgIcon>
  );
};

XBoxCrossIcon.displayName = 'XBoxCrossIcon';

XBoxCrossIcon.defaultProps = {
  viewType: 'standard',
};
