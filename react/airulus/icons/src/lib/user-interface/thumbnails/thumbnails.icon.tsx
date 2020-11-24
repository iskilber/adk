import * as React from 'react';
import { SvgIcon } from '../../svg-icon.component';

export declare namespace ThumbnailsIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
  }
  type Component = React.FunctionComponent<Props>;
}

export const ThumbnailsIcon: ThumbnailsIcon.Component = ({ viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
        <path d="M 6 7 C 5.476563 7 4.941406 7.183594 4.5625 7.5625 C 4.183594 7.941406 4 8.476563 4 9 L 4 15 C 4 15.523438 4.183594 16.058594 4.5625 16.4375 C 4.941406 16.816406 5.476563 17 6 17 L 14 17 C 14.523438 17 15.058594 16.816406 15.4375 16.4375 C 15.816406 16.058594 16 15.523438 16 15 L 16 9 C 16 8.476563 15.816406 7.941406 15.4375 7.5625 C 15.058594 7.183594 14.523438 7 14 7 Z M 21 7 C 20.476563 7 19.941406 7.183594 19.5625 7.5625 C 19.183594 7.941406 19 8.476563 19 9 L 19 15 C 19 15.523438 19.183594 16.058594 19.5625 16.4375 C 19.941406 16.816406 20.476563 17 21 17 L 29 17 C 29.523438 17 30.058594 16.816406 30.4375 16.4375 C 30.816406 16.058594 31 15.523438 31 15 L 31 9 C 31 8.476563 30.816406 7.941406 30.4375 7.5625 C 30.058594 7.183594 29.523438 7 29 7 Z M 36 7 C 35.476563 7 34.941406 7.183594 34.5625 7.5625 C 34.183594 7.941406 34 8.476563 34 9 L 34 15 C 34 15.523438 34.183594 16.058594 34.5625 16.4375 C 34.941406 16.816406 35.476563 17 36 17 L 44 17 C 44.523438 17 45.058594 16.816406 45.4375 16.4375 C 45.816406 16.058594 46 15.523438 46 15 L 46 9 C 46 8.476563 45.816406 7.941406 45.4375 7.5625 C 45.058594 7.183594 44.523438 7 44 7 Z M 6 9 L 14 9 L 14 15 L 6 15 Z M 21 9 L 29 9 L 29 15 L 21 15 Z M 36 9 L 44 9 L 44 15 L 36 15 Z M 6 20 C 5.476563 20 4.941406 20.183594 4.5625 20.5625 C 4.183594 20.941406 4 21.476563 4 22 L 4 28 C 4 28.523438 4.183594 29.058594 4.5625 29.4375 C 4.941406 29.816406 5.476563 30 6 30 L 14 30 C 14.523438 30 15.058594 29.816406 15.4375 29.4375 C 15.816406 29.058594 16 28.523438 16 28 L 16 22 C 16 21.476563 15.816406 20.941406 15.4375 20.5625 C 15.058594 20.183594 14.523438 20 14 20 Z M 21 20 C 20.476563 20 19.941406 20.183594 19.5625 20.5625 C 19.183594 20.941406 19 21.476563 19 22 L 19 28 C 19 28.523438 19.183594 29.058594 19.5625 29.4375 C 19.941406 29.816406 20.476563 30 21 30 L 29 30 C 29.523438 30 30.058594 29.816406 30.4375 29.4375 C 30.816406 29.058594 31 28.523438 31 28 L 31 22 C 31 21.476563 30.816406 20.941406 30.4375 20.5625 C 30.058594 20.183594 29.523438 20 29 20 Z M 36 20 C 35.476563 20 34.941406 20.183594 34.5625 20.5625 C 34.183594 20.941406 34 21.476563 34 22 L 34 28 C 34 28.523438 34.183594 29.058594 34.5625 29.4375 C 34.941406 29.816406 35.476563 30 36 30 L 44 30 C 44.523438 30 45.058594 29.816406 45.4375 29.4375 C 45.816406 29.058594 46 28.523438 46 28 L 46 22 C 46 21.476563 45.816406 20.941406 45.4375 20.5625 C 45.058594 20.183594 44.523438 20 44 20 Z M 6 22 L 14 22 L 14 28 L 6 28 Z M 21 22 L 29 22 L 29 28 L 21 28 Z M 36 22 L 44 22 L 44 28 L 36 28 Z M 6 33 C 5.476563 33 4.941406 33.183594 4.5625 33.5625 C 4.183594 33.941406 4 34.476563 4 35 L 4 41 C 4 41.523438 4.183594 42.058594 4.5625 42.4375 C 4.941406 42.816406 5.476563 43 6 43 L 14 43 C 14.523438 43 15.058594 42.816406 15.4375 42.4375 C 15.816406 42.058594 16 41.523438 16 41 L 16 35 C 16 34.476563 15.816406 33.941406 15.4375 33.5625 C 15.058594 33.183594 14.523438 33 14 33 Z M 21 33 C 20.476563 33 19.941406 33.183594 19.5625 33.5625 C 19.183594 33.941406 19 34.476563 19 35 L 19 41 C 19 41.523438 19.183594 42.058594 19.5625 42.4375 C 19.941406 42.816406 20.476563 43 21 43 L 29 43 C 29.523438 43 30.058594 42.816406 30.4375 42.4375 C 30.816406 42.058594 31 41.523438 31 41 L 31 35 C 31 34.476563 30.816406 33.941406 30.4375 33.5625 C 30.058594 33.183594 29.523438 33 29 33 Z M 36 33 C 35.476563 33 34.941406 33.183594 34.5625 33.5625 C 34.183594 33.941406 34 34.476563 34 35 L 34 41 C 34 41.523438 34.183594 42.058594 34.5625 42.4375 C 34.941406 42.816406 35.476563 43 36 43 L 44 43 C 44.523438 43 45.058594 42.816406 45.4375 42.4375 C 45.816406 42.058594 46 41.523438 46 41 L 46 35 C 46 34.476563 45.816406 33.941406 45.4375 33.5625 C 45.058594 33.183594 44.523438 33 44 33 Z M 6 35 L 14 35 L 14 41 L 6 41 Z M 21 35 L 29 35 L 29 41 L 21 41 Z M 36 35 L 44 35 L 44 41 L 36 41 Z"/>
      }
      { viewType === 'filled' &&
        <path d="M 6 7 C 4.800781 7 4 7.800781 4 9 L 4 15 C 4 16.199219 4.800781 17 6 17 L 14 17 C 15.199219 17 16 16.199219 16 15 L 16 9 C 16 7.800781 15.199219 7 14 7 Z M 21 7 C 19.800781 7 19 7.800781 19 9 L 19 15 C 19 16.199219 19.800781 17 21 17 L 29 17 C 30.199219 17 31 16.199219 31 15 L 31 9 C 31 7.800781 30.199219 7 29 7 Z M 36 7 C 34.800781 7 34 7.800781 34 9 L 34 15 C 34 16.199219 34.800781 17 36 17 L 44 17 C 45.199219 17 46 16.199219 46 15 L 46 9 C 46 7.800781 45.199219 7 44 7 Z M 6 20 C 4.800781 20 4 20.800781 4 22 L 4 28 C 4 29.199219 4.800781 30 6 30 L 14 30 C 15.199219 30 16 29.199219 16 28 L 16 22 C 16 20.800781 15.199219 20 14 20 Z M 21 20 C 19.800781 20 19 20.800781 19 22 L 19 28 C 19 29.199219 19.800781 30 21 30 L 29 30 C 30.199219 30 31 29.199219 31 28 L 31 22 C 31 20.800781 30.199219 20 29 20 Z M 36 20 C 34.800781 20 34 20.800781 34 22 L 34 28 C 34 29.199219 34.800781 30 36 30 L 44 30 C 45.199219 30 46 29.199219 46 28 L 46 22 C 46 20.800781 45.199219 20 44 20 Z M 6 33 C 4.800781 33 4 33.800781 4 35 L 4 41 C 4 42.199219 4.800781 43 6 43 L 14 43 C 15.199219 43 16 42.199219 16 41 L 16 35 C 16 33.800781 15.199219 33 14 33 Z M 21 33 C 19.800781 33 19 33.800781 19 35 L 19 41 C 19 42.199219 19.800781 43 21 43 L 29 43 C 30.199219 43 31 42.199219 31 41 L 31 35 C 31 33.800781 30.199219 33 29 33 Z M 36 33 C 34.800781 33 34 33.800781 34 35 L 34 41 C 34 42.199219 34.800781 43 36 43 L 44 43 C 45.199219 43 46 42.199219 46 41 L 46 35 C 46 33.800781 45.199219 33 44 33 Z"/>
      }
    </SvgIcon>
  );
};

ThumbnailsIcon.displayName = 'ThumbnailsIcon';

ThumbnailsIcon.defaultProps = {
  viewType: 'standard',
};
