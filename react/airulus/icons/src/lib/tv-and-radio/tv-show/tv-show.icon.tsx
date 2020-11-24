import * as React from 'react';
import { SvgIcon } from '../../svg-icon.component';

export declare namespace TvShowIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
  }
  type Component = React.FunctionComponent<Props>;
}

export const TvShowIcon: TvShowIcon.Component = ({ viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
        <path d="M 0 7 L 0 39 L 50 39 L 50 7 Z M 2 9 L 48 9 L 48 37 L 2 37 Z M 20.625 16.59375 C 20.515625 16.59375 20.410156 16.632813 20.3125 16.6875 C 20.113281 16.800781 20 17.023438 20 17.25 L 20 29.96875 C 20 30.195313 20.117188 30.417969 20.3125 30.53125 C 20.410156 30.589844 20.515625 30.59375 20.625 30.59375 C 20.734375 30.59375 20.871094 30.589844 20.96875 30.53125 L 31.96875 24.15625 C 32.164063 24.042969 32.28125 23.820313 32.28125 23.59375 C 32.28125 23.367188 32.164063 23.175781 31.96875 23.0625 L 20.96875 16.6875 C 20.871094 16.632813 20.734375 16.59375 20.625 16.59375 Z M 10.8125 41 C 10.261719 41.050781 9.855469 41.542969 9.90625 42.09375 C 9.957031 42.644531 10.449219 43.050781 11 43 L 39 43 C 39.359375 43.003906 39.695313 42.816406 39.878906 42.503906 C 40.058594 42.191406 40.058594 41.808594 39.878906 41.496094 C 39.695313 41.183594 39.359375 40.996094 39 41 L 11 41 C 10.96875 41 10.9375 41 10.90625 41 C 10.875 41 10.84375 41 10.8125 41 Z"/>
      }
      { viewType === 'filled' &&
        <path d="M 0 7 L 0 39 L 50 39 L 50 7 Z M 20.625 16.59375 C 20.734375 16.59375 20.871094 16.632813 20.96875 16.6875 L 31.96875 23.0625 C 32.164063 23.175781 32.28125 23.367188 32.28125 23.59375 C 32.28125 23.820313 32.164063 24.042969 31.96875 24.15625 L 20.96875 30.53125 C 20.871094 30.589844 20.734375 30.59375 20.625 30.59375 C 20.515625 30.59375 20.410156 30.589844 20.3125 30.53125 C 20.117188 30.417969 20 30.195313 20 29.96875 L 20 17.25 C 20 17.023438 20.113281 16.800781 20.3125 16.6875 C 20.410156 16.632813 20.515625 16.59375 20.625 16.59375 Z M 11 41 C 10.449219 41 10 41.445313 10 42 C 10 42.554688 10.449219 43 11 43 L 39 43 C 39.554688 43 40 42.554688 40 42 C 40 41.445313 39.554688 41 39 41 Z"/>
      }
    </SvgIcon>
  );
};

TvShowIcon.displayName = 'TvShowIcon';

TvShowIcon.defaultProps = {
  viewType: 'standard',
};
