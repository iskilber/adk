import * as React from 'react';
import {
  SvgIcon,
  SvgIconProps
  } from '../../svg-icon.component';

export interface DocumentIconProps extends SvgIconProps {
    viewType?: 'standard' | 'filled';
}

export const DocumentIcon: React.FC<DocumentIconProps> = ({ viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
        <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"/>
      }
      { viewType === 'filled' &&
        <path d="M 30.398438 2 L 7 2 L 7 48 L 43 48 L 43 14.601563 Z M 15 28 L 31 28 L 31 30 L 15 30 Z M 35 36 L 15 36 L 15 34 L 35 34 Z M 35 24 L 15 24 L 15 22 L 35 22 Z M 30 15 L 30 4.398438 L 40.601563 15 Z"/>
      }
    </SvgIcon>
  );
};

DocumentIcon.displayName = 'DocumentIcon';

DocumentIcon.defaultProps = {
  viewType: 'standard',
};
