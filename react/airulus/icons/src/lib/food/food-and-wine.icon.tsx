import * as React from 'react';
import { SvgIcon } from '../svg-icon.component';

export declare namespace FoodAndWineIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
  }
  type Component = React.FunctionComponent<Props>;
}

export const FoodAndWineIcon: FoodAndWineIcon.Component = ({ viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
          <path d="M 22.179688 2 L 22.019531 2.804688 C 22.019531 2.804688 20 12.734375 20 18 L 20 19 C 20 25.617188 25.382813 31 32 31 L 33 31 L 33 38.199219 L 29.875 38.890625 L 19.398438 29 L 4.125 29 C 4.070313 28.992188 4.015625 28.988281 3.960938 28.988281 C 3.921875 28.992188 3.886719 28.996094 3.851563 29 L 3.273438 29 L 3.101563 29.535156 C 3.042969 29.644531 3.007813 29.765625 2.996094 29.890625 C 2.851563 30.378906 2 33.480469 2 39 C 2 43.667969 3.304688 47.332031 3.304688 47.332031 L 3.542969 48 L 22 48 C 22.015625 48 22.027344 48 22.042969 48 L 39.515625 48 L 37.6875 46.273438 L 35.28125 44 L 44 44 L 44 43 C 44 41.367188 42.855469 39.945313 41.265625 39.589844 L 35 38.199219 L 35 31 L 36 31 C 42.617188 31 48 25.617188 48 19 L 48 18 C 48 12.773438 45.980469 2.804688 45.980469 2.804688 L 45.820313 2 Z M 23.839844 4 L 44.160156 4 C 44.328125 4.863281 45.117188 9.046875 45.605469 13 L 22.390625 13 C 22.882813 9.039063 23.671875 4.863281 23.839844 4 Z M 22.175781 15 L 45.824219 15 C 45.925781 16.09375 46 17.136719 46 18 L 46 19 C 46 24.535156 41.535156 29 36 29 L 34.15625 29 C 34.097656 28.992188 34.042969 28.984375 33.984375 28.984375 C 33.9375 28.988281 33.886719 28.992188 33.839844 29 L 32 29 C 26.464844 29 22 24.535156 22 19 L 22 18 C 22 17.132813 22.074219 16.089844 22.175781 15 Z M 6.515625 31 L 18.601563 31 L 34.484375 46 L 22.398438 46 Z M 4.578125 31.921875 L 19.484375 46 L 5.015625 46 C 4.753906 45.1875 4 42.652344 4 39 C 4 35.378906 4.324219 33.148438 4.578125 31.921875 Z M 13.363281 32.433594 C 13.300781 32.433594 13.242188 32.441406 13.1875 32.457031 C 12.757813 32.597656 12.847656 33.257813 13.390625 33.933594 C 13.933594 34.609375 14.722656 35.046875 15.15625 34.910156 C 15.585938 34.773438 15.496094 34.113281 14.953125 33.4375 C 14.476563 32.84375 13.8125 32.433594 13.363281 32.433594 Z M 20.917969 36.03125 C 20.828125 36.027344 20.746094 36.039063 20.671875 36.0625 C 20.074219 36.253906 20.199219 37.167969 20.953125 38.105469 C 21.703125 39.042969 22.796875 39.648438 23.390625 39.457031 C 23.988281 39.265625 23.863281 38.355469 23.109375 37.417969 C 22.453125 36.597656 21.535156 36.03125 20.917969 36.03125 Z M 34 40.023438 L 40.828125 41.542969 C 41.132813 41.609375 41.371094 41.789063 41.570313 42 L 33.160156 42 L 31.625 40.550781 Z M 22.582031 41.015625 C 22.519531 41.015625 22.457031 41.027344 22.40625 41.042969 C 21.972656 41.179688 22.0625 41.839844 22.609375 42.515625 C 23.152344 43.195313 23.941406 43.632813 24.371094 43.496094 C 24.800781 43.355469 24.710938 42.695313 24.167969 42.019531 C 23.691406 41.425781 23.03125 41.019531 22.582031 41.015625 Z"/>}
      { viewType === 'filled' &&
          <path d="M 22.179688 2 L 22.019531 2.804688 C 22.019531 2.804688 20 12.734375 20 18 L 20 19 C 20 25.617188 25.382813 31 32 31 L 33 31 L 33 38.199219 L 29.875 38.890625 L 19.398438 29 L 4.125 29 C 4.070313 28.992188 4.015625 28.988281 3.960938 28.988281 C 3.921875 28.992188 3.886719 28.996094 3.851563 29 L 3.273438 29 L 3.101563 29.535156 C 3.042969 29.644531 3.007813 29.765625 2.996094 29.890625 C 2.851563 30.378906 2 33.480469 2 39 C 2 43.667969 3.304688 47.332031 3.304688 47.332031 L 3.542969 48 L 22 48 C 22.015625 48 22.027344 48 22.042969 48 L 39.515625 48 L 37.6875 46.273438 L 35.28125 44 L 44 44 L 44 43 C 44 41.367188 42.855469 39.945313 41.265625 39.589844 L 35 38.199219 L 35 31 L 36 31 C 42.617188 31 48 25.617188 48 19 L 48 18 C 48 12.773438 45.980469 2.804688 45.980469 2.804688 L 45.820313 2 Z M 23.839844 4 L 44.160156 4 C 44.328125 4.863281 45.117188 9.046875 45.605469 13 L 22.390625 13 C 22.882813 9.039063 23.671875 4.863281 23.839844 4 Z M 6.515625 31 L 18.601563 31 L 34.484375 46 L 22.398438 46 Z M 13.363281 32.433594 C 13.300781 32.433594 13.242188 32.441406 13.1875 32.457031 C 12.757813 32.597656 12.847656 33.257813 13.390625 33.933594 C 13.933594 34.609375 14.722656 35.046875 15.15625 34.910156 C 15.585938 34.773438 15.496094 34.113281 14.953125 33.4375 C 14.476563 32.84375 13.8125 32.433594 13.363281 32.433594 Z M 20.917969 36.03125 C 20.828125 36.027344 20.746094 36.039063 20.671875 36.0625 C 20.074219 36.253906 20.199219 37.167969 20.953125 38.105469 C 21.703125 39.042969 22.796875 39.648438 23.390625 39.457031 C 23.988281 39.265625 23.863281 38.355469 23.109375 37.417969 C 22.453125 36.597656 21.535156 36.03125 20.917969 36.03125 Z M 22.582031 41.015625 C 22.519531 41.015625 22.457031 41.027344 22.40625 41.042969 C 21.972656 41.179688 22.0625 41.839844 22.609375 42.515625 C 23.152344 43.195313 23.941406 43.632813 24.371094 43.496094 C 24.800781 43.355469 24.710938 42.695313 24.167969 42.019531 C 23.691406 41.425781 23.03125 41.019531 22.582031 41.015625 Z"/>}
    </SvgIcon>
  );
};

FoodAndWineIcon.displayName = 'FoodAndWineIcon';

FoodAndWineIcon.defaultProps = {
  viewType: 'standard',
};
