import * as React from 'react';
import { classnames } from '@adk/airulus/cdk';
import {
  SvgIcon,
  SvgIconProps
  } from '../../svg-icon.component';
import { WiredConnectedPath } from './wired-connected-path.component';
import { WiredDisconnectedPath } from './wired-disconnected-path.component';

const styles = require('./wired-connection.icon.scss');

export enum WiredConnectionIconState {
  ON, OFF, CONNECING
}

export interface WiredConnectionIconProps extends SvgIconProps {
  viewType?: 'standard' | 'filled';
  /**
   * Switch Icon state
   */
  state?: WiredConnectionIconState;
}

export const WiredConnectionIcon: React.FC<WiredConnectionIconProps> = ({viewType, state, ...props}) => {
  const [connected] = React.useState(state === WiredConnectionIconState.ON);
  const isOff = state === WiredConnectionIconState.OFF || state === WiredConnectionIconState.CONNECING;
  const isOn = state === WiredConnectionIconState.ON || state === WiredConnectionIconState.CONNECING;
  const classNameDicsconnected = classnames({ [styles.fadeInOutPhaseOne]: state === WiredConnectionIconState.CONNECING });
  const classNameConnected = classnames({ [styles.fadeInOutPhaseTwo]: state === WiredConnectionIconState.CONNECING });

  return (
    <SvgIcon {...props}>
      { isOff && <WiredDisconnectedPath viewType={viewType} className={classNameDicsconnected} />}
      { isOn && <WiredConnectedPath viewType={viewType} className={classNameConnected} />}
    </SvgIcon>
  );
};

WiredConnectionIcon.displayName = 'WiredConnectionIcon';

WiredConnectionIcon.defaultProps = {
  viewType: 'standard',
  state: WiredConnectionIconState.OFF
};
