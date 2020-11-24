import * as React from 'react';
import { SvgIcon } from '../svg-icon.component';

export declare namespace MoonIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
  }
  type Component = React.FunctionComponent<Props>;
}

export const MoonIcon: MoonIcon.Component = ({viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      {viewType === 'standard' &&
          <path d="M 31 4 C 19.414063 4 10 13.414063 10 25 C 10 36.585938 19.414063 46 31 46 C 33.988281 46 36.828125 45.367188 39.402344 44.242188 C 39.765625 44.082031 40 43.722656 40 43.324219 C 40 42.925781 39.765625 42.566406 39.402344 42.40625 C 32.695313 39.476563 28 32.796875 28 25 C 28 17.203125 32.695313 10.523438 39.402344 7.59375 C 39.765625 7.433594 40 7.074219 40 6.675781 C 40 6.277344 39.765625 5.917969 39.402344 5.757813 C 36.828125 4.632813 33.988281 4 31 4 Z M 31 6 C 32.984375 6 34.855469 6.398438 36.65625 6.96875 C 30.355469 10.59375 26 17.21875 26 25 C 26 32.78125 30.355469 39.40625 36.65625 43.03125 C 34.855469 43.601563 32.984375 44 31 44 C 20.496094 44 12 35.503906 12 25 C 12 14.496094 20.496094 6 31 6 Z"/>}
      {viewType === 'filled' &&
          <path d="M 31 3 C 18.875 3 9 12.875 9 25 C 9 37.125 18.875 47 31 47 C 34.128906 47 37.109375 46.335938 39.800781 45.15625 C 40.53125 44.839844 41 44.121094 41 43.324219 C 41 42.53125 40.53125 41.808594 39.800781 41.492188 C 33.449219 38.714844 29 32.394531 29 25 C 29 17.605469 33.449219 11.285156 39.800781 8.507812 C 40.53125 8.191406 41 7.46875 41 6.675781 C 41 5.878906 40.53125 5.160156 39.800781 4.84375 C 37.109375 3.664062 34.128906 3 31 3 Z M 31 7 C 32.09375 7 33.148438 7.148438 34.1875 7.335938 C 28.679688 11.335938 25 17.6875 25 25 C 25 32.3125 28.679688 38.664062 34.1875 42.664062 C 33.148438 42.851562 32.09375 43 31 43 C 21.035156 43 13 34.964844 13 25 C 13 15.035156 21.035156 7 31 7 Z M 31 7 "/>}
    </SvgIcon>
  );
};

MoonIcon.displayName = 'MoonIcon';

MoonIcon.defaultProps = {
  viewType: 'standard'
};
