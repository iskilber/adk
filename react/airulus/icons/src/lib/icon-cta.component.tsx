import * as React from 'react';
import { classnames } from '@adk/airulus/cdk';
// import { useTypographyCtaStyles } from '@iskil/web/react/ui/typography';

const styles = require('./icon-cta.component.scss');

export class CtaIconClickEvent extends Event {
  constructor(public readonly origEvent: React.MouseEvent) {
    super('cta.icon.click');
  }
}

export declare namespace CtaIcon {
  interface Props {
    className?: string;
    disabled?: boolean;
    onClick?: (event: CtaIconClickEvent) => void;
    ref?: Ref;
  }
  type Ref = React.Ref<HTMLDivElement>;
  type Component = React.FunctionComponent<Props>;
}

export const CtaIcon: CtaIcon.Component = React.forwardRef((
  { children, className, disabled, onClick, ...props },
  ref: any
) => {
  const typographyStyles = '' //useTypographyCtaStyles();
  const classNames = classnames(typographyStyles, styles.cta, className);
  const handleClick = React.useCallback((event: React.MouseEvent) => {
    if (disabled) {
      event.stopPropagation();
      return;
    } else if (!onClick) {
      return;
    } else {
      onClick(new CtaIconClickEvent(event));
    }
  }, [disabled]);

  return (<div
    {...props}
    ref={ref}
    className={classNames}
    onClick={handleClick}>{children}</div>);
});

CtaIcon.displayName = 'CtaIcon';

CtaIcon.defaultProps = {};
