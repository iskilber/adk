import * as React from 'react';
import {
  SvgIcon,
  SvgIconProps
  } from '../../svg-icon.component';

export interface VideoFileIconProps extends SvgIconProps {
    viewType?: 'standard' | 'filled';
}

export const VideoFileIcon: React.FC<VideoFileIconProps> = ({ viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
        <path d="M 7 2 L 7 48 L 43 48 L 43 15.410156 L 29.183594 2 Z M 9 4 L 28 4 L 28 17 L 41 17 L 41 46 L 9 46 Z M 30 5.578125 L 39.707031 15 L 30 15 Z M 20.945313 22 C 20.414063 22.03125 20 22.46875 20 23 L 20 36 C 20 36.347656 20.183594 36.671875 20.480469 36.855469 C 20.78125 37.035156 21.152344 37.046875 21.460938 36.886719 L 33.015625 30.886719 C 33.339844 30.71875 33.542969 30.394531 33.554688 30.03125 C 33.566406 29.671875 33.382813 29.332031 33.074219 29.144531 L 21.515625 22.144531 C 21.34375 22.039063 21.144531 21.992188 20.945313 22 Z M 22 24.777344 L 30.515625 29.933594 L 22 34.355469 Z"/>
      }
      { viewType === 'filled' &&
        <path d="M 29.167969 2 L 7 2 L 7 48 L 43 48 L 43 15.433594 Z M 21 36 L 21 24 L 32 30 Z M 29 16 L 29 4 L 41 16 Z"/>
      }
    </SvgIcon>
  );
};

VideoFileIcon.displayName = 'VideoFileIcon';

VideoFileIcon.defaultProps = {
  viewType: 'standard',
};
