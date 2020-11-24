import * as React from 'react';
import {
  View,
  ViewProps
  } from '../view/view.component';

const styles = require('./card-section.component.scss');

export interface CardSectionProps extends ViewProps {

}

export type CardSectionComponent = React.FC<CardSectionProps>;

/**
 *
 */
export const CardSection: CardSectionComponent = ({ className, children, ...props}) => {
  return (
    <View as="section" className={styles.cardSection} {...props}>
      {children}
    </View>
  );
};

CardSection.displayName = 'CardSection';

CardSection.defaultProps = {};