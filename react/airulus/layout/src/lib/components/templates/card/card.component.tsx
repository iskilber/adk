import * as React from 'react';
import { classnames } from '@adk/airulus/cdk';
import {
  View,
  ViewProps
  } from '../view/view.component';

const styles = require('./card.component.scss');

export interface CardProps extends ViewProps {
  
}

export type CardComponent = React.FC<CardProps>

/**
 *
 */
export const Card: CardComponent = ({className, ...props}) => {
  const elementClassName = classnames(styles.card, className);

  return (
    <View {...props} className={elementClassName}>
      {props.children}
    </View>
  );
};

Card.displayName = 'Card';

Card.defaultProps = {
  as: 'article'
};