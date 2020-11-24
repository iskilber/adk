import * as React from 'react';
import {
  SvgIcon,
  SvgIconProps
  } from '../../svg-icon.component';

export interface OpenFolderIconProps extends SvgIconProps {
    viewType?: 'standard' | 'filled';
}

export const OpenFolderIcon: React.FC<OpenFolderIconProps> = ({ viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
        <path d="M 3 4 C 1.355469 4 0 5.355469 0 7 L 0 43.90625 C -0.0625 44.136719 -0.0390625 44.378906 0.0625 44.59375 C 0.34375 45.957031 1.5625 47 3 47 L 42 47 C 43.492188 47 44.71875 45.875 44.9375 44.4375 C 44.945313 44.375 44.964844 44.3125 44.96875 44.25 C 44.96875 44.230469 44.96875 44.207031 44.96875 44.1875 L 45 44.03125 C 45 44.019531 45 44.011719 45 44 L 49.96875 17.1875 L 50 17.09375 L 50 17 C 50 15.355469 48.644531 14 47 14 L 47 11 C 47 9.355469 45.644531 8 44 8 L 18.03125 8 C 18.035156 8.003906 18.023438 8 18 8 C 17.96875 7.976563 17.878906 7.902344 17.71875 7.71875 C 17.472656 7.4375 17.1875 6.96875 16.875 6.46875 C 16.5625 5.96875 16.226563 5.4375 15.8125 4.96875 C 15.398438 4.5 14.820313 4 14 4 Z M 3 6 L 14 6 C 13.9375 6 14.066406 6 14.3125 6.28125 C 14.558594 6.5625 14.84375 7.03125 15.15625 7.53125 C 15.46875 8.03125 15.8125 8.5625 16.21875 9.03125 C 16.625 9.5 17.179688 10 18 10 L 44 10 C 44.5625 10 45 10.4375 45 11 L 45 14 L 8 14 C 6.425781 14 5.171875 15.265625 5.0625 16.8125 L 5.03125 16.8125 L 5 17 L 2 33.1875 L 2 7 C 2 6.4375 2.4375 6 3 6 Z M 8 16 L 47 16 C 47.5625 16 48 16.4375 48 17 L 43.09375 43.53125 L 43.0625 43.59375 C 43.050781 43.632813 43.039063 43.675781 43.03125 43.71875 C 43.019531 43.757813 43.007813 43.800781 43 43.84375 C 43 43.863281 43 43.886719 43 43.90625 C 43 43.917969 43 43.925781 43 43.9375 C 42.984375 43.988281 42.976563 44.039063 42.96875 44.09375 C 42.964844 44.125 42.972656 44.15625 42.96875 44.1875 C 42.964844 44.230469 42.964844 44.269531 42.96875 44.3125 C 42.84375 44.71875 42.457031 45 42 45 L 3 45 C 2.4375 45 2 44.5625 2 44 L 6.96875 17.1875 L 7 17.09375 L 7 17 C 7 16.4375 7.4375 16 8 16 Z"/>
      }
      { viewType === 'filled' &&
        <path d="M 3 4 C 1.347656 4 0 5.347656 0 7 L 0 33.09375 C 1.464844 25.296875 3.105469 16.550781 3.1875 16.125 C 3.695313 13.535156 5.648438 12 8.4375 12 L 47 12 L 47 11 C 47 9.347656 45.652344 8 44 8 L 18.03125 8 C 17.753906 7.898438 17.183594 6.992188 16.875 6.5 C 16.105469 5.273438 15.316406 4 14 4 Z M 8.4375 14 C 7.15625 14 5.5625 14.449219 5.15625 16.53125 C 5.027344 17.179688 1.132813 37.910156 0 43.9375 L 0 44 C 0 45.652344 1.347656 47 3 47 L 42 47 C 43.621094 47 44.945313 45.703125 45 44.09375 L 49.96875 17.1875 L 50 17 C 50 15.347656 48.652344 14 47 14 Z"/>
      }
    </SvgIcon>
  );
};

OpenFolderIcon.displayName = 'OpenFolderIcon';

OpenFolderIcon.defaultProps = {
  viewType: 'standard',
};
