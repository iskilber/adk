import * as React from 'react';
import { SvgIcon } from '../svg-icon.component';

export declare namespace CheckboxIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
    state?: 'checked' | 'unchecked' | 'indeterminated'
  }
  type Component = React.FunctionComponent<Props>;
}

export const CheckboxIcon: CheckboxIcon.Component = ({ viewType, state, ...props }) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' && state === 'indeterminated' &&
          <path d="M 11 4 C 7.15625 4 4 7.15625 4 11 L 4 39 C 4 42.84375 7.15625 46 11 46 L 39 46 C 42.84375 46 46 42.84375 46 39 L 46 11 C 46 7.15625 42.84375 4 39 4 Z M 11 6 L 39 6 C 41.753906 6 44 8.246094 44 11 L 44 39 C 44 41.753906 41.753906 44 39 44 L 11 44 C 8.246094 44 6 41.753906 6 39 L 6 11 C 6 8.246094 8.246094 6 11 6 Z M 12 22 L 12 28 L 38 28 L 38 22 Z M 14 24 L 36 24 L 36 26 L 14 26 Z"/>}
      { viewType === 'filled' && state === 'indeterminated' &&
          <path d="M 39 4 L 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 11 C 46 7.101563 42.898438 4 39 4 Z M 37 27 L 13 27 L 13 23 L 37 23 Z"/>}
      { viewType === 'standard' && state === 'checked' &&
          <path d="M 11 4 C 7.144531 4 4 7.144531 4 11 L 4 39 C 4 42.855469 7.144531 46 11 46 L 39 46 C 42.855469 46 46 42.855469 46 39 L 46 11 C 46 7.144531 42.855469 4 39 4 Z M 11 6 L 39 6 C 41.773438 6 44 8.226563 44 11 L 44 39 C 44 41.773438 41.773438 44 39 44 L 11 44 C 8.226563 44 6 41.773438 6 39 L 6 11 C 6 8.226563 8.226563 6 11 6 Z M 36.234375 15.832031 L 22.914063 31.554688 L 14.78125 23.96875 L 13.417969 25.433594 L 23.082031 34.449219 L 37.765625 17.125 Z"/>}
      { viewType === 'filled' && state === 'checked' &&
          <path d="M 39 4 L 11 4 C 7.140625 4 4 7.140625 4 11 L 4 39 C 4 42.859375 7.140625 46 11 46 L 39 46 C 42.859375 46 46 42.859375 46 39 L 46 11 C 46 7.140625 42.859375 4 39 4 Z M 23.085938 34.445313 L 13.417969 25.433594 L 14.78125 23.96875 L 22.914063 31.554688 L 36.238281 15.832031 L 37.761719 17.125 Z"/>}
      { viewType === 'standard' && state === 'unchecked' &&
          <path d="M 11 4 C 7.144531 4 4 7.144531 4 11 L 4 39 C 4 42.855469 7.144531 46 11 46 L 39 46 C 42.855469 46 46 42.855469 46 39 L 46 11 C 46 7.144531 42.855469 4 39 4 Z M 11 6 L 39 6 C 41.773438 6 44 8.226563 44 11 L 44 39 C 44 41.773438 41.773438 44 39 44 L 11 44 C 8.226563 44 6 41.773438 6 39 L 6 11 C 6 8.226563 8.226563 6 11 6 Z"/>}
      { viewType === 'filled' && state === 'unchecked' &&
          <path d="M 39 4 L 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 11 C 46 7.101563 42.898438 4 39 4 Z M 42 39 C 42 40.699219 40.699219 42 39 42 L 11 42 C 9.300781 42 8 40.699219 8 39 L 8 11 C 8 9.300781 9.300781 8 11 8 L 39 8 C 40.699219 8 42 9.300781 42 11 Z"/>}
    </SvgIcon>
  );
};

CheckboxIcon.displayName = 'CheckboxIcon';

CheckboxIcon.defaultProps = {
  viewType: 'standard',
};
