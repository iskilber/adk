import * as React from 'react';
import { classnames } from '@adk/airulus/cdk';

const styles = require('./card-header.component.scss');

export interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  
}

export type CardHeaderComponent = React.FC<CardHeaderProps>

/**
 *
 */
export const CardHeader: CardHeaderComponent = ({className, children, ...props}) => {
  const elementClassName = classnames(className, styles.cardHeader);
  return (<header className={elementClassName} {...props}>{children}</header>);
};

CardHeader.displayName = 'CardHeader';

CardHeader.defaultProps = {};