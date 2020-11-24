import * as React from 'react';

// const styles = require('./svg-icon.component.scss');

export interface SvgIconProps extends React.SVGAttributes<SVGElement> {
  as?: string;
  color?: string;
  title?: string;
  viewBox?: string;
 }

export declare namespace SvgIcon {
  interface Props extends React.SVGAttributes<SVGElement> {
   as?: string;
   color?: string;
   title?: string;
   viewBox?: string;
  }
  type Component = React.FunctionComponent<Props>;
}

export const SvgIcon: React.FC<SvgIconProps> = React.forwardRef(({
  as,
  color,
  children,
  title,
  ...props
}, ref) => {
  const Component: any = as;

  return (
    <Component
      color={color}
      ref={ref}
      {...props}
    >
      {children}
      {title && <title>{title}</title> }
    </Component>
  );
});

SvgIcon.displayName = 'SvgIcon';

SvgIcon.defaultProps = {
  as: 'svg',
  viewBox: '0 0 50 50'
};
