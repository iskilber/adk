import * as React from 'react';
import { SvgIcon } from '../svg-icon.component';

export declare namespace CopyIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
  }
  type Component = React.FunctionComponent<Props>;
}

export const CopyIcon: CopyIcon.Component = ({viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
          <path d="M 19 0 L 19 6 L 21 8 L 21 2 L 36 2 L 36 14 L 48 14 L 48 40 L 33 40 L 33 42 L 50 42 L 50 12.59375 L 37.40625 0 Z M 38 3.40625 L 46.59375 12 L 38 12 Z M 0 8 L 0 50 L 31 50 L 31 20.59375 L 30.71875 20.28125 L 18.71875 8.28125 L 18.40625 8 Z M 2 10 L 17 10 L 17 22 L 29 22 L 29 48 L 2 48 Z M 19 11.4375 L 27.5625 20 L 19 20 Z"/>}
      { viewType === 'filled' &&
          <path d="M 19 0 L 19 6 L 33 20 L 33 42 L 50 42 L 50 14 L 36 14 L 36 0 Z M 38 0.59375 L 38 12 L 49.40625 12 Z M 0 8 L 0 50 L 31 50 L 31 22 L 17 22 L 17 8 Z M 19 8.59375 L 19 20 L 30.40625 20 Z"/>}
    </SvgIcon>
  );
};

CopyIcon.displayName = 'CopyIcon';

CopyIcon.defaultProps = {
  viewType: 'standard',
};
