import * as React from 'react';

const styles = require('./intl-error.component.scss');

export interface AirulusIntlErrorProps {
  error?: Error;
}

export type AirulusIntlErrorComponent = React.FC<AirulusIntlErrorProps>

/**
 *
 */
export const AirulusIntlError: AirulusIntlErrorComponent = (props) => {
  if (!props.error) {
    return null;
  } else {
    return (<div className={styles.errorMessage}>{props.error.message}</div>);
  }
};

AirulusIntlError.displayName = 'AirulusIntlError';

AirulusIntlError.defaultProps = {};