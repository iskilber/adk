import * as React from 'react';
import { SvgIcon } from '../svg-icon.component';

export interface RoundedSquareIconProps extends SvgIcon.Props {
  viewType?: 'standard' | 'filled';
  extraPath?: string;
}

export interface RoundedSquareIconFactories {
  Add: React.FC<RoundedSquareIconProps>;
}

export type RoundedSquareIconComponent = 
    React.FC<RoundedSquareIconProps> &
    RoundedSquareIconFactories;


export const RoundedSquareIcon: RoundedSquareIconComponent = React.memo<RoundedSquareIconProps>(({viewType, extraPath, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
          <path d={`M 9 4 C 6.2545455 4 4 6.2545455 4 9 L 4 41 C 4 43.745455 6.2545455 46 9 46 L 41 46 C 43.745455 46 46 43.745455 46 41 L 46 9 C 46 6.2545455 43.745455 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.654545 6 44 7.3454545 44 9 L 44 41 C 44 42.654545 42.654545 44 41 44 L 9 44 C 7.3454545 44 6 42.654545 6 41 L 6 9 C 6 7.3454545 7.3454545 6 9 6 z ${extraPath}`}/>}
      { viewType === 'filled' &&
          <path d={`M38,46H12c-4.411,0-8-3.589-8-8V12c0-4.411,3.589-8,8-8h26c4.411,0,8,3.589,8,8v26C46,42.411,42.411,46,38,46z ${extraPath}`}/>}
      {props.children}
    </SvgIcon>
  );
}) as any as RoundedSquareIconComponent;

RoundedSquareIcon.displayName = 'RoundedSquareIcon';

RoundedSquareIcon.defaultProps = {
  viewType: 'standard',
};

RoundedSquareIcon.Add = ({ children, ...props}) => (
  <RoundedSquareIcon {...props} extraPath={
    props.viewType === 'standard' ? 
        'M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z' :
        'M 37 26 H 26 v 11 h -2 V 26 H 13 v -2 h 11 V 13 h 2 v 11 h 11 V 26 Z'

  }/>
)
