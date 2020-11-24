import * as React from 'react';
import { GroupWithBadgeShape } from './group-with-badge.shape';
import { SvgBadgeIcon } from '../../svg-badge-icon.component';
import { SvgIcon } from '../../svg-icon.component';

export interface GroupIconProps extends SvgIcon.Props{
  viewType?: 'standard' | 'filled';
}

export interface GroupIconFactories {
  Add: React.FC<SvgBadgeIcon.Props>;
  Remove: React.FC<SvgBadgeIcon.Props>;
  Delete: React.FC<SvgBadgeIcon.Props>;
}

export type GroupIconComponent = React.FunctionComponent<GroupIconProps> & GroupIconFactories;

export const GroupIcon: GroupIconComponent = React.memo<GroupIconProps>(({viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
          <path d="M 19.875 4.40625 C 15.203125 4.492188 12.21875 6.378906 10.9375 9.3125 C 9.714844 12.105469 9.988281 15.632813 10.875 19.28125 C 10.398438 19.839844 10.019531 20.589844 10.15625 21.71875 C 10.304688 22.949219 10.644531 23.824219 11.125 24.4375 C 11.390625 24.773438 11.738281 24.804688 12.0625 24.96875 C 12.238281 26.015625 12.53125 27.0625 12.96875 27.9375 C 13.21875 28.441406 13.503906 28.90625 13.78125 29.28125 C 13.90625 29.449219 14.085938 29.546875 14.21875 29.6875 C 14.226563 30.921875 14.230469 31.949219 14.125 33.25 C 13.800781 34.035156 13.042969 34.667969 11.8125 35.28125 C 10.542969 35.914063 8.890625 36.5 7.21875 37.21875 C 5.546875 37.9375 3.828125 38.8125 2.46875 40.1875 C 1.109375 41.5625 0.148438 43.449219 0 45.9375 L -0.0625 47 L 40.0625 47 L 40 45.9375 C 39.894531 44.207031 39.40625 42.773438 38.65625 41.59375 L 50.0625 41.59375 L 50 40.53125 C 49.871094 38.402344 49.039063 36.746094 47.875 35.5625 C 46.710938 34.378906 45.253906 33.640625 43.84375 33.03125 C 42.433594 32.421875 41.050781 31.964844 40 31.4375 C 38.984375 30.929688 38.410156 30.417969 38.15625 29.8125 C 38.074219 28.761719 38.054688 27.90625 38.0625 26.90625 C 38.160156 26.796875 38.316406 26.71875 38.40625 26.59375 C 38.644531 26.265625 38.882813 25.867188 39.09375 25.4375 C 39.449219 24.707031 39.691406 23.84375 39.84375 22.96875 C 40.105469 22.824219 40.382813 22.800781 40.59375 22.53125 C 41.023438 21.984375 41.308594 21.242188 41.4375 20.1875 L 41.4375 20.15625 C 41.546875 19.242188 41.25 18.628906 40.875 18.125 C 41.289063 16.769531 41.796875 14.632813 41.625 12.40625 C 41.527344 11.179688 41.21875 9.941406 40.46875 8.90625 C 39.757813 7.921875 38.59375 7.199219 37.125 6.9375 C 36.171875 5.878906 34.667969 5.40625 32.90625 5.40625 C 30.480469 5.449219 28.597656 6.050781 27.21875 7.125 C 26.589844 6.734375 25.855469 6.449219 25.03125 6.28125 C 23.980469 4.917969 22.089844 4.40625 19.90625 4.40625 Z M 19.90625 6.40625 C 19.917969 6.40625 19.925781 6.40625 19.9375 6.40625 C 20.929688 6.410156 21.753906 6.558594 22.375 6.78125 C 22.382813 6.785156 22.398438 6.777344 22.40625 6.78125 C 22.507813 6.855469 22.625 6.902344 22.75 6.9375 C 22.769531 6.949219 22.792969 6.957031 22.8125 6.96875 C 23.203125 7.167969 23.484375 7.410156 23.625 7.65625 L 23.875 8.0625 L 24.34375 8.125 C 24.679688 8.171875 24.976563 8.257813 25.25 8.34375 C 25.097656 8.519531 25 8.75 25 9 C 25 9.550781 25.449219 10 26 10 C 26.398438 10 26.714844 9.746094 26.875 9.40625 C 26.949219 9.492188 27.027344 9.566406 27.09375 9.65625 C 27.65625 10.433594 27.96875 11.519531 28.0625 12.71875 C 28.25 15.117188 27.558594 17.910156 27.125 19.21875 L 26.875 20 L 27.5625 20.40625 C 27.519531 20.378906 27.945313 20.667969 27.84375 21.5 C 27.726563 22.480469 27.492188 22.988281 27.3125 23.21875 C 27.132813 23.449219 27.039063 23.4375 27.03125 23.4375 L 26.1875 23.5 L 26.09375 24.3125 C 26.035156 24.867188 25.84375 25.492188 25.625 26.09375 C 25.265625 26.246094 25 26.585938 25 27 C 25 27.128906 25.050781 27.230469 25.09375 27.34375 C 24.945313 27.621094 24.789063 27.910156 24.65625 28.09375 C 24.472656 28.347656 24.28125 28.488281 24.375 28.4375 L 23.84375 28.71875 L 23.84375 29.3125 C 23.84375 29.378906 23.84375 29.433594 23.84375 29.5 C 23.667969 29.207031 23.363281 29 23 29 C 22.449219 29 22 29.449219 22 30 C 22 30.550781 22.449219 31 23 31 C 23.363281 31 23.667969 30.792969 23.84375 30.5 C 23.835938 31.46875 23.828125 32.429688 23.9375 33.625 L 23.9375 33.75 L 24 33.875 C 24.570313 35.410156 25.890625 36.367188 27.34375 37.09375 C 28.507813 37.675781 29.816406 38.148438 31.09375 38.65625 C 31.050781 38.769531 31 38.871094 31 39 C 31 39.550781 31.449219 40 32 40 C 32.390625 40 32.710938 39.761719 32.875 39.4375 C 33.878906 39.929688 34.8125 40.484375 35.59375 41.15625 C 35.597656 41.160156 35.589844 41.183594 35.59375 41.1875 C 35.613281 41.210938 35.632813 41.230469 35.65625 41.25 C 35.480469 41.097656 35.25 41 35 41 C 34.449219 41 34 41.449219 34 42 C 34 42.550781 34.449219 43 35 43 C 35.550781 43 36 42.550781 36 42 C 36 41.738281 35.914063 41.492188 35.75 41.3125 C 35.8125 41.386719 35.886719 41.449219 35.96875 41.5 C 35.972656 41.503906 35.996094 41.496094 36 41.5 C 36.03125 41.53125 36.0625 41.5625 36.09375 41.59375 C 36.757813 42.269531 37.222656 43.132813 37.53125 44.15625 C 37.226563 44.328125 37 44.625 37 45 L 33 45 C 33 44.449219 32.550781 44 32 44 C 31.449219 44 31 44.449219 31 45 L 27 45 C 27 44.449219 26.550781 44 26 44 C 25.449219 44 25 44.449219 25 45 L 21 45 C 21 44.449219 20.550781 44 20 44 C 19.449219 44 19 44.449219 19 45 L 15 45 C 15 44.449219 14.550781 44 14 44 C 13.449219 44 13 44.449219 13 45 L 9 45 C 9 44.449219 8.550781 44 8 44 C 7.449219 44 7 44.449219 7 45 L 3 45 C 3 44.625 2.773438 44.328125 2.46875 44.15625 C 2.777344 43.132813 3.238281 42.269531 3.90625 41.59375 C 4.019531 41.480469 4.160156 41.390625 4.28125 41.28125 C 5.089844 40.5625 6.054688 39.953125 7.125 39.4375 C 7.289063 39.761719 7.609375 40 8 40 C 8.550781 40 9 39.550781 9 39 C 9 38.871094 8.949219 38.769531 8.90625 38.65625 C 10.195313 38.144531 11.511719 37.679688 12.6875 37.09375 C 14.144531 36.367188 15.492188 35.410156 16.0625 33.875 L 16.125 33.625 C 16.230469 32.46875 16.226563 31.53125 16.21875 30.59375 C 16.402344 30.835938 16.675781 31 17 31 C 17.550781 31 18 30.550781 18 30 C 18 29.449219 17.550781 29 17 29 C 16.675781 29 16.402344 29.164063 16.21875 29.40625 C 16.21875 29.375 16.21875 29.34375 16.21875 29.3125 L 16.21875 28.71875 L 15.6875 28.4375 C 15.777344 28.484375 15.5625 28.347656 15.375 28.09375 C 15.238281 27.910156 15.0625 27.652344 14.90625 27.375 C 14.957031 27.253906 15 27.136719 15 27 C 15 26.574219 14.71875 26.238281 14.34375 26.09375 C 14.128906 25.492188 13.964844 24.859375 13.90625 24.3125 L 13.8125 23.5 L 12.96875 23.4375 C 12.960938 23.4375 12.867188 23.449219 12.6875 23.21875 C 12.507813 22.988281 12.273438 22.480469 12.15625 21.5 C 12.058594 20.667969 12.480469 20.378906 12.4375 20.40625 L 13.09375 20 L 12.90625 19.28125 C 11.964844 15.65625 11.800781 12.363281 12.78125 10.125 C 12.882813 9.890625 12.996094 9.65625 13.125 9.4375 C 13.289063 9.761719 13.609375 10 14 10 C 14.550781 10 15 9.550781 15 9 C 15 8.5625 14.707031 8.199219 14.3125 8.0625 C 14.910156 7.5625 15.667969 7.152344 16.59375 6.875 C 16.722656 6.9375 16.847656 7 17 7 C 17.316406 7 17.597656 6.851563 17.78125 6.625 C 18.425781 6.515625 19.113281 6.421875 19.90625 6.40625 Z M 4.28125 41.28125 C 4.101563 41.460938 4 41.722656 4 42 C 4 42.550781 4.449219 43 5 43 C 5.550781 43 6 42.550781 6 42 C 6 41.449219 5.550781 41 5 41 C 4.722656 41 4.460938 41.101563 4.28125 41.28125 Z M 32.90625 7.40625 C 32.917969 7.40625 32.925781 7.40625 32.9375 7.40625 C 34.601563 7.414063 35.640625 7.90625 35.90625 8.375 L 36.15625 8.78125 L 36.625 8.875 C 37.761719 9.03125 38.394531 9.441406 38.84375 10.0625 C 39.292969 10.683594 39.546875 11.570313 39.625 12.5625 C 39.78125 14.546875 39.203125 16.910156 38.84375 18 L 38.59375 18.75 L 39.28125 19.15625 C 39.191406 19.101563 39.546875 19.292969 39.46875 19.9375 C 39.371094 20.746094 39.160156 21.148438 39.03125 21.3125 C 38.902344 21.476563 38.871094 21.441406 38.90625 21.4375 L 38.0625 21.5 L 38 22.3125 C 37.925781 23.015625 37.613281 23.878906 37.28125 24.5625 C 37.113281 24.902344 36.960938 25.203125 36.8125 25.40625 C 36.722656 25.527344 36.660156 25.617188 36.625 25.65625 L 36.59375 25.65625 C 36.589844 25.660156 36.59375 25.6875 36.59375 25.6875 L 36.0625 25.9375 L 36.0625 26.53125 C 36.0625 27.746094 36.027344 28.765625 36.15625 30.1875 L 36.15625 30.3125 L 36.21875 30.4375 C 36.722656 31.785156 37.886719 32.597656 39.125 33.21875 C 40.363281 33.839844 41.75 34.308594 43.0625 34.875 C 44.375 35.441406 45.566406 36.085938 46.4375 36.96875 C 47.09375 37.636719 47.503906 38.523438 47.75 39.59375 L 36.875 39.59375 C 35.644531 38.550781 34.222656 37.828125 32.8125 37.21875 C 31.148438 36.5 29.515625 35.914063 28.25 35.28125 C 27.035156 34.671875 26.269531 34.054688 25.9375 33.28125 C 25.828125 31.964844 25.835938 30.933594 25.84375 29.6875 C 25.976563 29.542969 26.15625 29.449219 26.28125 29.28125 C 26.554688 28.902344 26.816406 28.4375 27.0625 27.9375 C 27.488281 27.0625 27.796875 26.011719 27.96875 24.96875 C 28.28125 24.804688 28.617188 24.765625 28.875 24.4375 C 29.355469 23.824219 29.695313 22.949219 29.84375 21.71875 C 29.976563 20.625 29.609375 19.902344 29.15625 19.34375 C 29.644531 17.757813 30.269531 15.195313 30.0625 12.5625 C 29.949219 11.125 29.582031 9.691406 28.71875 8.5 C 28.714844 8.492188 28.722656 8.476563 28.71875 8.46875 C 29.660156 7.84375 31 7.445313 32.90625 7.40625 Z M 20 8 C 19.449219 8 19 8.449219 19 9 C 19 9.550781 19.449219 10 20 10 C 20.550781 10 21 9.550781 21 9 C 21 8.449219 20.550781 8 20 8 Z M 17 11 C 16.449219 11 16 11.449219 16 12 C 16 12.550781 16.449219 13 17 13 C 17.550781 13 18 12.550781 18 12 C 18 11.449219 17.550781 11 17 11 Z M 23 11 C 22.449219 11 22 11.449219 22 12 C 22 12.550781 22.449219 13 23 13 C 23.550781 13 24 12.550781 24 12 C 24 11.449219 23.550781 11 23 11 Z M 14 14 C 13.449219 14 13 14.449219 13 15 C 13 15.550781 13.449219 16 14 16 C 14.550781 16 15 15.550781 15 15 C 15 14.449219 14.550781 14 14 14 Z M 20 14 C 19.449219 14 19 14.449219 19 15 C 19 15.550781 19.449219 16 20 16 C 20.550781 16 21 15.550781 21 15 C 21 14.449219 20.550781 14 20 14 Z M 26 14 C 25.449219 14 25 14.449219 25 15 C 25 15.550781 25.449219 16 26 16 C 26.550781 16 27 15.550781 27 15 C 27 14.449219 26.550781 14 26 14 Z M 17 17 C 16.449219 17 16 17.449219 16 18 C 16 18.550781 16.449219 19 17 19 C 17.550781 19 18 18.550781 18 18 C 18 17.449219 17.550781 17 17 17 Z M 23 17 C 22.449219 17 22 17.449219 22 18 C 22 18.550781 22.449219 19 23 19 C 23.550781 19 24 18.550781 24 18 C 24 17.449219 23.550781 17 23 17 Z M 14 20 C 13.449219 20 13 20.449219 13 21 C 13 21.550781 13.449219 22 14 22 C 14.550781 22 15 21.550781 15 21 C 15 20.449219 14.550781 20 14 20 Z M 20 20 C 19.449219 20 19 20.449219 19 21 C 19 21.550781 19.449219 22 20 22 C 20.550781 22 21 21.550781 21 21 C 21 20.449219 20.550781 20 20 20 Z M 26 20 C 25.449219 20 25 20.449219 25 21 C 25 21.550781 25.449219 22 26 22 C 26.550781 22 27 21.550781 27 21 C 27 20.449219 26.550781 20 26 20 Z M 17 23 C 16.449219 23 16 23.449219 16 24 C 16 24.550781 16.449219 25 17 25 C 17.550781 25 18 24.550781 18 24 C 18 23.449219 17.550781 23 17 23 Z M 23 23 C 22.449219 23 22 23.449219 22 24 C 22 24.550781 22.449219 25 23 25 C 23.550781 25 24 24.550781 24 24 C 24 23.449219 23.550781 23 23 23 Z M 20 26 C 19.449219 26 19 26.449219 19 27 C 19 27.550781 19.449219 28 20 28 C 20.550781 28 21 27.550781 21 27 C 21 26.449219 20.550781 26 20 26 Z M 20 32 C 19.449219 32 19 32.449219 19 33 C 19 33.550781 19.449219 34 20 34 C 20.550781 34 21 33.550781 21 33 C 21 32.449219 20.550781 32 20 32 Z M 17 35 C 16.449219 35 16 35.449219 16 36 C 16 36.550781 16.449219 37 17 37 C 17.550781 37 18 36.550781 18 36 C 18 35.449219 17.550781 35 17 35 Z M 23 35 C 22.449219 35 22 35.449219 22 36 C 22 36.550781 22.449219 37 23 37 C 23.550781 37 24 36.550781 24 36 C 24 35.449219 23.550781 35 23 35 Z M 14 38 C 13.449219 38 13 38.449219 13 39 C 13 39.550781 13.449219 40 14 40 C 14.550781 40 15 39.550781 15 39 C 15 38.449219 14.550781 38 14 38 Z M 20 38 C 19.449219 38 19 38.449219 19 39 C 19 39.550781 19.449219 40 20 40 C 20.550781 40 21 39.550781 21 39 C 21 38.449219 20.550781 38 20 38 Z M 26 38 C 25.449219 38 25 38.449219 25 39 C 25 39.550781 25.449219 40 26 40 C 26.550781 40 27 39.550781 27 39 C 27 38.449219 26.550781 38 26 38 Z M 11 41 C 10.449219 41 10 41.449219 10 42 C 10 42.550781 10.449219 43 11 43 C 11.550781 43 12 42.550781 12 42 C 12 41.449219 11.550781 41 11 41 Z M 17 41 C 16.449219 41 16 41.449219 16 42 C 16 42.550781 16.449219 43 17 43 C 17.550781 43 18 42.550781 18 42 C 18 41.449219 17.550781 41 17 41 Z M 23 41 C 22.449219 41 22 41.449219 22 42 C 22 42.550781 22.449219 43 23 43 C 23.550781 43 24 42.550781 24 42 C 24 41.449219 23.550781 41 23 41 Z M 29 41 C 28.449219 41 28 41.449219 28 42 C 28 42.550781 28.449219 43 29 43 C 29.550781 43 30 42.550781 30 42 C 30 41.449219 29.550781 41 29 41 Z"/>}
      { viewType === 'filled' &&
          <path d="M 19.875 4.40625 C 16.195313 4.472656 13.507813 5.570313 11.875 7.71875 C 9.941406 10.265625 9.589844 14.144531 10.8125 19.21875 C 10.363281 19.769531 10.023438 20.605469 10.15625 21.71875 C 10.421875 23.921875 11.277344 24.828125 12 25.1875 C 12.34375 26.917969 13.300781 28.863281 14.21875 29.78125 L 14.21875 30.25 C 14.226563 31.265625 14.222656 32.144531 14.125 33.28125 C 13.511719 34.6875 11.472656 35.511719 9.125 36.4375 C 5.21875 37.972656 0.363281 39.871094 0 45.9375 L -0.0625 47 L 40.0625 47 L 40 45.9375 C 39.894531 44.167969 39.390625 42.75 38.65625 41.59375 L 50.0625 41.59375 L 50 40.53125 C 49.871094 38.402344 49.039063 36.746094 47.875 35.5625 C 46.710938 34.378906 45.253906 33.640625 43.84375 33.03125 C 42.433594 32.421875 41.050781 31.964844 40 31.4375 C 38.984375 30.929688 38.410156 30.417969 38.15625 29.8125 C 38.074219 28.761719 38.054688 27.90625 38.0625 26.90625 C 38.160156 26.796875 38.316406 26.71875 38.40625 26.59375 C 38.644531 26.265625 38.882813 25.867188 39.09375 25.4375 C 39.449219 24.707031 39.691406 23.84375 39.84375 22.96875 C 40.105469 22.824219 40.382813 22.800781 40.59375 22.53125 C 41.023438 21.984375 41.308594 21.242188 41.4375 20.1875 L 41.4375 20.15625 C 41.546875 19.242188 41.25 18.628906 40.875 18.125 C 41.289063 16.769531 41.796875 14.632813 41.625 12.40625 C 41.527344 11.179688 41.21875 9.941406 40.46875 8.90625 C 39.757813 7.921875 38.59375 7.199219 37.125 6.9375 C 36.171875 5.878906 34.667969 5.40625 32.90625 5.40625 C 30.5 5.449219 28.625 6.035156 27.25 7.09375 C 26.621094 6.6875 25.882813 6.382813 25.0625 6.21875 C 24.117188 5.027344 22.304688 4.40625 19.875 4.40625 Z M 32.90625 7.40625 C 32.917969 7.40625 32.925781 7.40625 32.9375 7.40625 C 34.601563 7.414063 35.640625 7.90625 35.90625 8.375 L 36.15625 8.78125 L 36.625 8.875 C 37.761719 9.03125 38.394531 9.441406 38.84375 10.0625 C 39.292969 10.683594 39.546875 11.570313 39.625 12.5625 C 39.78125 14.546875 39.203125 16.910156 38.84375 18 L 38.59375 18.75 L 39.28125 19.15625 C 39.191406 19.101563 39.546875 19.292969 39.46875 19.9375 C 39.371094 20.746094 39.160156 21.148438 39.03125 21.3125 C 38.902344 21.476563 38.871094 21.441406 38.90625 21.4375 L 38.0625 21.5 L 38 22.3125 C 37.925781 23.015625 37.613281 23.878906 37.28125 24.5625 C 37.113281 24.902344 36.960938 25.203125 36.8125 25.40625 C 36.722656 25.527344 36.660156 25.617188 36.625 25.65625 L 36.59375 25.65625 C 36.589844 25.660156 36.59375 25.6875 36.59375 25.6875 L 36.0625 25.9375 L 36.0625 26.53125 C 36.0625 27.746094 36.027344 28.765625 36.15625 30.1875 L 36.15625 30.3125 L 36.21875 30.4375 C 36.722656 31.785156 37.886719 32.597656 39.125 33.21875 C 40.363281 33.839844 41.75 34.308594 43.0625 34.875 C 44.375 35.441406 45.566406 36.085938 46.4375 36.96875 C 47.09375 37.636719 47.503906 38.523438 47.75 39.59375 L 36.90625 39.59375 C 35.140625 38.097656 32.902344 37.226563 30.90625 36.4375 C 28.566406 35.511719 26.519531 34.6875 25.90625 33.28125 C 25.808594 32.148438 25.835938 31.261719 25.84375 30.25 L 25.84375 29.78125 C 26.738281 28.867188 27.660156 26.917969 28 25.1875 C 28.722656 24.828125 29.578125 23.921875 29.84375 21.71875 C 29.976563 20.628906 29.65625 19.800781 29.21875 19.25 C 29.800781 17.269531 30.988281 12.113281 28.9375 8.8125 C 28.863281 8.695313 28.769531 8.613281 28.6875 8.5 C 29.632813 7.859375 30.976563 7.445313 32.90625 7.40625 Z"/>}
    </SvgIcon>
  );
}) as any as GroupIconComponent;

GroupIcon.displayName = 'GroupIcon';

GroupIcon.defaultProps = {
  viewType: 'standard',
};

GroupIcon.Add = React.memo<SvgBadgeIcon.Props>((props) => (
  <SvgBadgeIcon.Add {...props}>
    <GroupWithBadgeShape viewType={props.viewType} />
  </SvgBadgeIcon.Add>));

GroupIcon.Add.defaultProps = {
  viewType: 'standard',
};

GroupIcon.Add.displayName = 'GroupIcon.Add';


GroupIcon.Remove = React.memo<SvgBadgeIcon.Props>((props) => (
  <SvgBadgeIcon.Remove {...props}>
    <GroupWithBadgeShape viewType={props.viewType} />
  </SvgBadgeIcon.Remove>));

GroupIcon.Remove.defaultProps = {
  viewType: 'standard',
};

GroupIcon.Remove.displayName = 'GroupIcon.Add';

GroupIcon.Delete = React.memo<SvgBadgeIcon.Props>((props) => (
  <SvgBadgeIcon.Delete {...props}>
    <GroupWithBadgeShape viewType={props.viewType} />
  </SvgBadgeIcon.Delete>));

GroupIcon.Delete.defaultProps = {
  viewType: 'standard',
};

GroupIcon.Delete.displayName = 'GroupIcon.Delete';