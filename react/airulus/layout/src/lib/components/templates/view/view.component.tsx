import * as React from 'react';
import { classnames } from '@adk/airulus/cdk';
const styles = require('./view.component.scss');

export interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof React.ReactHTML;
  contentVerticalPosition?: 'top' | 'centered' | 'bottom';
  contentHorizontalPosition?: 'left' | 'centered' | 'right';
  ref?: any;
}

export type ViewComponent = React.FC<ViewProps>

/**
 *
 */
export const View: ViewComponent = React.memo(
  React.forwardRef<HTMLDivElement, ViewProps>(({ 
    children, 
    as, 
    className, 
    contentVerticalPosition,
    contentHorizontalPosition,
    ...props 
  }, ref) => {
    const elementClassNames = classnames(className, styles.view, {
      [styles.horizontalCentered]: contentHorizontalPosition === 'centered',
      [styles.horizontalRight]: contentHorizontalPosition === 'right',
      [styles.verticalCentered]: contentVerticalPosition === 'centered',
      [styles.verticalBottom]: contentVerticalPosition === 'bottom',
    });
    const HtmlTag: any = as;
    return (
      <HtmlTag 
        ref={ref} 
        className={elementClassNames} 
        {...props}
      >{children}</HtmlTag>
    );
  }));

View.displayName = 'View';

View.defaultProps = {
  as: 'div',
  contentHorizontalPosition: 'left',
  contentVerticalPosition: 'top'
};