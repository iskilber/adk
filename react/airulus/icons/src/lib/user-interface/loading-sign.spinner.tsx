import * as React from 'react';
import { classnames } from '@adk/airulus/cdk';
import { LoadingSignIcon } from './loading-sign.icon';
import { useSpinnerClassName } from '../icons.hooks';

export interface LoadingSignSpinnerProps extends LoadingSignIcon.Props {

}

export type LoadingSignSpinnerComponent = React.FC<LoadingSignSpinnerProps>

/**
 *
 */
export const LoadingSignSpinner: LoadingSignSpinnerComponent = (props) => {
  const spinnerClassName = useSpinnerClassName();
  const classNames = classnames(spinnerClassName, props.className);
  return (
    <LoadingSignIcon {...props} className={classNames}/>
  );
};

LoadingSignSpinner.displayName = 'LoadingSignSpinner';

LoadingSignSpinner.defaultProps = {};