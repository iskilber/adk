import * as React from 'react';
import { classnames } from '@adk/airulus/cdk';
import {
  View,
  ViewProps
  } from '../view/view.component';
const styles = require('./app-base-view.component.scss');

export interface AppBaseViewProps extends ViewProps {}

export type AppBaseViewComponent = React.FC<AppBaseViewProps>

/**
 *
 */
export const AppBaseView: AppBaseViewComponent = React.memo(
  React.forwardRef<HTMLDivElement, AppBaseViewProps>((
    { children, className, ...props }, ref
  ) => {
    const elementClassname = classnames(className, styles.appBaseView)
    return (
      <View className={elementClassname} {...props} ref={ref}>
        {children}
      </View>
    );
  }));

AppBaseView.displayName = 'AppBaseView';

AppBaseView.defaultProps = {
  as: 'div',
  contentHorizontalPosition: 'left',
  contentVerticalPosition: 'top'
};