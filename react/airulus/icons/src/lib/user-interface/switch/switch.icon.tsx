import * as React from 'react';
import {
  SvgIcon,
  SvgIconProps
  } from '../../svg-icon.component';

const styles = require('./switch.icon.scss');

export interface SwitchIconProps extends SvgIconProps {
  viewType?: 'standard' | 'filled';
  /**
   * Switch Icon state
   */
  state?: 'on' | 'off';
}

export const SwitchIcon: React.FC<SwitchIconProps> = ({viewType, state, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
          <g>
            <path d={`
            M 3 11 C 1.355469 11 0 12.355469 0 14 L 0 36 C 0 37.644531 1.355469 39 3 39 L 47 39 C 48.644531 39 50 37.644531 50 36 L 50 14 C 50 12.355469 48.644531 11 47 11 Z 
            M 3 13 L 47 13 C 47.566406 13 48 13.433594 48 14 L 48 36 C 48 36.566406 47.566406 37 47 37 L 3 37 C 2.433594 37 2 36.566406 2 36 L 2 14 C 2 13.433594 2.433594 13 3 13 Z 
            `
          }/>
          <path d={`
            M 2 15 C 2 15.550781 2.449219 16 3 16 C 3.550781 16 4 15.550781 4 15 C 4 14.449219 3.550781 14 3 14 C 2.449219 14 2 14.449219 2 15 Z 
            M 2 21 C 2 21.550781 2.449219 22 3 22 C 3.550781 22 4 21.550781 4 21 C 4 20.449219 3.550781 20 3 20 C 2.449219 20 2 20.449219 2 21 Z 
            M 2 27 C 2 27.550781 2.449219 28 3 28 C 3.550781 28 4 27.550781 4 27 C 4 26.449219 3.550781 26 3 26 C 2.449219 26 2 26.449219 2 27 Z 
            M 2 33 C 2 33.550781 2.449219 34 3 34 C 3.550781 34 4 33.550781 4 33 C 4 32.449219 3.550781 32 3 32 C 2.449219 32 2 32.449219 2 33 Z 
            M 6 37 C 6.550781 37 7 36.550781 7 36 C 7 35.449219 6.550781 35 6 35 C 5.449219 35 5 35.449219 5 36 C 5 36.550781 5.449219 37 6 37 Z 
            M 12 37 C 12.550781 37 13 36.550781 13 36 C 13 35.449219 12.550781 35 12 35 C 11.449219 35 11 35.449219 11 36 C 11 36.550781 11.449219 37 12 37 Z 
            M 18 37 C 18.550781 37 19 36.550781 19 36 C 19 35.449219 18.550781 35 18 35 C 17.449219 35 17 35.449219 17 36 C 17 36.550781 17.449219 37 18 37 Z 
            M 9 14 C 8.449219 14 8 14.449219 8 15 C 8 15.550781 8.449219 16 9 16 C 9.550781 16 10 15.550781 10 15 C 10 14.449219 9.550781 14 9 14 Z 
            M 15 14 C 14.449219 14 14 14.449219 14 15 C 14 15.550781 14.449219 16 15 16 C 15.550781 16 16 15.550781 16 15 C 16 14.449219 15.550781 14 15 14 Z 
            M 21 14 C 20.449219 14 20 14.449219 20 15 C 20 15.550781 20.449219 16 21 16 C 21.550781 16 22 15.550781 22 15 C 22 14.449219 21.550781 14 21 14 Z 
            M 6 17 C 5.449219 17 5 17.449219 5 18 C 5 18.550781 5.449219 19 6 19 C 6.550781 19 7 18.550781 7 18 C 7 17.449219 6.550781 17 6 17 Z 
            M 12 17 C 11.449219 17 11 17.449219 11 18 C 11 18.550781 11.449219 19 12 19 C 12.550781 19 13 18.550781 13 18 C 13 17.449219 12.550781 17 12 17 Z 
            M 18 17 C 17.449219 17 17 17.449219 17 18 C 17 18.550781 17.449219 19 18 19 C 18.550781 19 19 18.550781 19 18 C 19 17.449219 18.550781 17 18 17 Z 
            M 9 20 C 8.449219 20 8 20.449219 8 21 C 8 21.550781 8.449219 22 9 22 C 9.550781 22 10 21.550781 10 21 C 10 20.449219 9.550781 20 9 20 Z 
            M 15 20 C 14.449219 20 14 20.449219 14 21 C 14 21.550781 14.449219 22 15 22 C 15.550781 22 16 21.550781 16 21 C 16 20.449219 15.550781 20 15 20 Z 
            M 21 20 C 20.449219 20 20 20.449219 20 21 C 20 21.550781 20.449219 22 21 22 C 21.550781 22 22 21.550781 22 21 C 22 20.449219 21.550781 20 21 20 Z 
            M 6 23 C 5.449219 23 5 23.449219 5 24 C 5 24.550781 5.449219 25 6 25 C 6.550781 25 7 24.550781 7 24 C 7 23.449219 6.550781 23 6 23 Z 
            M 12 23 C 11.449219 23 11 23.449219 11 24 C 11 24.550781 11.449219 25 12 25 C 12.550781 25 13 24.550781 13 24 C 13 23.449219 12.550781 23 12 23 Z 
            M 18 23 C 17.449219 23 17 23.449219 17 24 C 17 24.550781 17.449219 25 18 25 C 18.550781 25 19 24.550781 19 24 C 19 23.449219 18.550781 23 18 23 Z 
            M 9 26 C 8.449219 26 8 26.449219 8 27 C 8 27.550781 8.449219 28 9 28 C 9.550781 28 10 27.550781 10 27 C 10 26.449219 9.550781 26 9 26 Z 
            M 15 26 C 14.449219 26 14 26.449219 14 27 C 14 27.550781 14.449219 28 15 28 C 15.550781 28 16 27.550781 16 27 C 16 26.449219 15.550781 26 15 26 Z 
            M 6 29 C 5.449219 29 5 29.449219 5 30 C 5 30.550781 5.449219 31 6 31 C 6.550781 31 7 30.550781 7 30 C 7 29.449219 6.550781 29 6 29 Z 
            M 12 29 C 11.449219 29 11 29.449219 11 30 C 11 30.550781 11.449219 31 12 31 C 12.550781 31 13 30.550781 13 30 C 13 29.449219 12.550781 29 12 29 Z 
            M 18 29 C 17.449219 29 17 29.449219 17 30 C 17 30.550781 17.449219 31 18 31 C 18.550781 31 19 30.550781 19 30 C 19 29.449219 18.550781 29 18 29 Z 
            M 9 32 C 8.449219 32 8 32.449219 8 33 C 8 33.550781 8.449219 34 9 34 C 9.550781 34 10 33.550781 10 33 C 10 32.449219 9.550781 32 9 32 Z 
            M 15 32 C 14.449219 32 14 32.449219 14 33 C 14 33.550781 14.449219 34 15 34 C 15.550781 34 16 33.550781 16 33 C 16 32.449219 15.550781 32 15 32 Z 
            
            M 21 26 C 20.449219 26 20 26.449219 20 27 C 20 27.550781 20.449219 28 21 28 C 21.550781 28 22 27.550781 22 27 C 22 26.449219 21.550781 26 21 26 Z 
            M 21 32 C 20.449219 32 20 32.449219 20 33 C 20 33.550781 20.449219 34 21 34 C 21.550781 34 22 33.550781 22 33 C 22 32.449219 21.550781 32 21 32 Z
          `} 
            transform={state === 'off' ? 'translate(-23 0)' : undefined}
            className={styles.transition}
          />
          <path d={`
              M 26 11 C 24.355469 11 23 12.355469 23 14 L 23 36 C 23 37.644531 24.355469 39 26 39 L 47 39 C 48.644531 39 50 37.644531 50 36 L 50 14 C 50 12.355469 48.644531 11 47 11 Z
            `} 
            className={styles.transition}
            transform={state === 'off' ? 'translate(-23 0)' : undefined} 
          />
          </g>}
      { viewType === 'filled' &&
          <path d="M25,2C12.317,2,2,12.318,2,25s10.317,23,23,23s23-10.318,23-23S37.683,2,25,2z M25,12c7.168,0,13,5.832,13,13 s-5.832,13-13,13s-13-5.832-13-13S17.832,12,25,12z M25,45C13.972,45,5,36.028,5,25h4c0,8.822,7.178,16,16,16s16-7.178,16-16 S33.822,9,25,9V5c11.028,0,20,8.972,20,20S36.028,45,25,45z"/>}
    </SvgIcon>
  );
};

SwitchIcon.displayName = 'SwitchIcon';

SwitchIcon.defaultProps = {
  viewType: 'standard',
  state: 'off'
};

//              M 26 13 L 47 13 C 47.566406 13 48 13.433594 48 14 L 48 36 C 48 36.566406 47.566406 37 47 37 L 26 37 C 25.433594 37 25 36.566406 25 36 L 25 14 C 25 13.433594 25.433594 13 26 13 Z 