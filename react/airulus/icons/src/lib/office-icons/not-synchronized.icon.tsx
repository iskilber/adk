import * as React from 'react';
import { SvgIcon } from '../svg-icon.component';

export declare namespace NotSyncrhonizedIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
  }
  type Component = React.FunctionComponent<Props>;
}

export const NotSyncrhonizedIcon: NotSyncrhonizedIcon.Component = ({ viewType, ...props }) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
          <path d="M 0.99023438 -0.009765625 A 1.0001 1.0001 0 0 0 0.29296875 1.7070312 L 48.292969 49.707031 A 1.0001 1.0001 0 1 0 49.707031 48.292969 L 41.941406 40.527344 C 45.698839 36.432757 48 30.982501 48 25 C 48 24.447 47.552 24 47 24 C 46.448 24 46 24.447 46 25 C 46 30.430501 43.91192 35.370722 40.513672 39.099609 L 10.900391 9.4863281 C 14.629111 6.0880802 19.568612 4 25 4 C 31.48538 4 37.512297 6.9622914 41.482422 12 L 34 12 A 1.0001 1.0001 0 1 0 34 14 L 45 14 L 45 3 A 1.0001 1.0001 0 0 0 43.984375 1.9863281 A 1.0001 1.0001 0 0 0 43 3 L 43 10.697266 C 38.651266 5.2199738 32.074743 2 25 2 C 19.017499 2 13.567243 4.3011607 9.4726562 8.0585938 L 1.7070312 0.29296875 A 1.0001 1.0001 0 0 0 0.99023438 -0.009765625 z M 6.8085938 10.951172 C 3.7975937 14.840172 2 19.712 2 25 C 2 25.553 2.448 26 3 26 C 3.552 26 4 25.553 4 25 C 4 20.265 5.5940469 15.906625 8.2480469 12.390625 L 6.8085938 10.951172 z M 5 36 L 5 47 A 1.0001 1.0001 0 1 0 7 47 L 7 39.302734 C 11.348734 44.780026 17.925257 48 25 48 C 30.288 48 35.159828 46.202406 39.048828 43.191406 L 37.609375 41.751953 C 34.093375 44.405953 29.735 46 25 46 C 18.51462 46 12.487703 43.037709 8.5175781 38 L 16 38 A 1.0001 1.0001 0 1 0 16 36 L 5 36 z"/>}
      { viewType === 'filled' &&
          <path d="M 0.99023438 -0.009765625 A 1.0001 1.0001 0 0 0 0.29296875 1.7070312 L 48.292969 49.707031 A 1.0001 1.0001 0 1 0 49.707031 48.292969 L 41.941406 40.527344 C 45.698119 36.432757 48 30.982501 48 25 C 48 23.896 47.104 23 46 23 C 44.896 23 44 23.896 44 25 C 44 29.879959 42.140601 34.324383 39.103516 37.689453 L 12.310547 10.896484 C 15.675617 7.8593988 20.120041 6 25 6 C 29.776304 6 34.353565 7.8259888 37.828125 11 L 34 11 A 2.0002 2.0002 0 1 0 34 15 L 45 15 L 45 4 A 2.0002 2.0002 0 0 0 42.970703 1.9726562 A 2.0002 2.0002 0 0 0 41 4 L 41 8.4863281 C 36.742936 4.3741804 30.998832 2 25 2 C 19.017499 2 13.567243 4.3018807 9.4726562 8.0585938 L 1.7070312 0.29296875 A 1.0001 1.0001 0 0 0 0.99023438 -0.009765625 z M 6.8085938 10.949219 C 3.7975937 14.838219 2 19.712 2 25 C 2 26.104 2.896 27 4 27 C 5.104 27 6 26.104 6 25 C 6 20.817 7.3748281 16.958406 9.6738281 13.816406 L 6.8085938 10.949219 z M 5 35 L 5 46 A 2.0002 2.0002 0 1 0 9 46 L 9 41.513672 C 13.257064 45.62582 19.001168 48 25 48 C 30.288 48 35.161781 46.202406 39.050781 43.191406 L 36.183594 40.326172 C 33.041594 42.625172 29.183 44 25 44 C 20.223696 44 15.646435 42.174011 12.171875 39 L 16 39 A 2.0002 2.0002 0 1 0 16 35 L 5 35 z"/>}
    </SvgIcon>
  );
};

NotSyncrhonizedIcon.displayName = 'NotSyncrhonizedIcon';

NotSyncrhonizedIcon.defaultProps = {
  viewType: 'standard',
};
