import * as React from 'react';
import { SvgIcon } from '../svg-icon.component';

export declare namespace CloseIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
  }
  type Component = React.FunctionComponent<Props>;
}

export const CloseIcon: CloseIcon.Component = ({viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
          <path d="M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z"/>}
      { viewType === 'filled' &&
          <path d="M 15.125 12.28125 L 12.28125 15.125 L 22.21875 25 L 12.28125 34.875 L 15.125 37.71875 L 25.0625 27.84375 L 35 37.71875 L 37.8125 34.875 L 27.90625 25 L 37.8125 15.125 L 35 12.28125 L 25.0625 22.15625 Z"/>}
    </SvgIcon>
  );
};

CloseIcon.displayName = 'CloseIcon';

CloseIcon.defaultProps = {
  viewType: 'standard',
};
