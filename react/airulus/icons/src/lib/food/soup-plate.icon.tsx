import * as React from 'react';
import { SvgIcon } from '../svg-icon.component';

export declare namespace SoupPlateIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
  }
  type Component = React.FunctionComponent<Props>;
}

export const SoupPlateIcon: SoupPlateIcon.Component = ({ viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
          <path d="M 11.003906 3.9863281 A 1.0001 1.0001 0 0 0 10.048828 4.6894531 L 9.4101562 6.6503906 C 8.6545081 8.9644197 8.910072 11.627244 10.162109 13.546875 C 10.988072 14.813244 11.247852 17.014498 10.6875 18.730469 L 10.048828 20.689453 A 1.0005836 1.0005836 0 1 0 11.951172 21.310547 L 12.589844 19.349609 C 13.345492 17.03558 13.089928 14.372756 11.837891 12.453125 C 11.011928 11.186756 10.752148 8.9855023 11.3125 7.2695312 L 11.951172 5.3105469 A 1.0001 1.0001 0 0 0 11.003906 3.9863281 z M 18.003906 3.9863281 A 1.0001 1.0001 0 0 0 17.048828 4.6894531 L 16.410156 6.6503906 C 15.654508 8.9644197 15.910072 11.627244 17.162109 13.546875 C 17.988072 14.813244 18.247852 17.014498 17.6875 18.730469 L 17.048828 20.689453 A 1.0005836 1.0005836 0 1 0 18.951172 21.310547 L 19.589844 19.349609 C 20.345492 17.03558 20.089928 14.372756 18.837891 12.453125 C 18.011928 11.186756 17.752148 8.9855023 18.3125 7.2695312 L 18.951172 5.3105469 A 1.0001 1.0001 0 0 0 18.003906 3.9863281 z M 25.003906 3.9863281 A 1.0001 1.0001 0 0 0 24.048828 4.6894531 L 23.410156 6.6503906 C 22.654508 8.9644197 22.910072 11.627244 24.162109 13.546875 C 24.988072 14.813244 25.247852 17.014498 24.6875 18.730469 L 24.048828 20.689453 A 1.0005836 1.0005836 0 1 0 25.951172 21.310547 L 26.589844 19.349609 C 27.345492 17.03558 27.089928 14.372756 25.837891 12.453125 C 25.011928 11.186756 24.752148 8.9855023 25.3125 7.2695312 L 25.951172 5.3105469 A 1.0001 1.0001 0 0 0 25.003906 3.9863281 z M 43.605469 10.005859 C 43.37979 10.005295 43.15447 10.027258 42.933594 10.070312 C 42.050087 10.242532 41.233124 10.757554 40.710938 11.570312 L 40.792969 11.460938 L 28.357422 26 L 4 26 A 1.0001 1.0001 0 0 0 3 27 L 3 30 C 3 30.201563 3.069136 30.384586 3.078125 30.583984 A 1.0001 1.0001 0 0 0 3.21875 31.640625 C 3.7431756 35.806528 6.0600565 39.465497 9.1171875 42.128906 C 12.576847 45.143003 16.846465 47 20.5 47 L 29.5 47 C 33.153535 47 37.423153 45.143003 40.882812 42.128906 C 44.342472 39.114809 47 34.866667 47 30 L 47 27 A 1.0001 1.0001 0 0 0 46 26 L 35.9375 26 L 46.205078 15.597656 A 1.0001 1.0001 0 0 0 46.283203 15.509766 C 47.468538 13.983156 47.135249 11.742091 45.556641 10.626953 C 44.96483 10.208897 44.282504 10.007554 43.605469 10.005859 z M 43.587891 11.994141 C 43.866957 11.996292 44.151151 12.082289 44.402344 12.259766 C 45.066906 12.729216 45.196951 13.621237 44.707031 14.267578 L 33.126953 26 L 30.990234 26 L 42.3125 12.761719 A 1.0001 1.0001 0 0 0 42.392578 12.652344 C 42.614391 12.307102 42.949506 12.090312 43.3125 12.019531 C 43.403249 12.001836 43.494868 11.993424 43.587891 11.994141 z M 5 28 L 28.675781 28 A 1.0001 1.0001 0 0 0 28.955078 28 L 33.404297 28 A 1.0001 1.0001 0 0 0 33.669922 28 L 45 28 L 45 30 C 45 34.133333 42.7087 37.885191 39.568359 40.621094 C 36.428019 43.356997 32.446465 45 29.5 45 L 20.5 45 C 17.553535 45 13.571981 43.356997 10.431641 40.621094 C 7.8116502 38.338527 5.8700615 35.328419 5.2695312 32 L 41 32 A 1.0001 1.0001 0 1 0 41 30 L 5 30 L 5 28 z"/>}
      { viewType === 'filled' &&
          <path d="M 11.003906 3.9863281 A 1.0001 1.0001 0 0 0 10.048828 4.6894531 L 9.4101562 6.6503906 C 8.6545081 8.9644197 8.910072 11.627244 10.162109 13.546875 C 10.988072 14.813244 11.247852 17.014498 10.6875 18.730469 L 10.048828 20.689453 A 1.0005836 1.0005836 0 1 0 11.951172 21.310547 L 12.589844 19.349609 C 13.345492 17.03558 13.089928 14.372756 11.837891 12.453125 C 11.011928 11.186756 10.752148 8.9855023 11.3125 7.2695312 L 11.951172 5.3105469 A 1.0001 1.0001 0 0 0 11.003906 3.9863281 z M 18.003906 3.9863281 A 1.0001 1.0001 0 0 0 17.048828 4.6894531 L 16.410156 6.6503906 C 15.654508 8.9644197 15.910072 11.627244 17.162109 13.546875 C 17.988072 14.813244 18.247852 17.014498 17.6875 18.730469 L 17.048828 20.689453 A 1.0005836 1.0005836 0 1 0 18.951172 21.310547 L 19.589844 19.349609 C 20.345492 17.03558 20.089928 14.372756 18.837891 12.453125 C 18.011928 11.186756 17.752148 8.9855023 18.3125 7.2695312 L 18.951172 5.3105469 A 1.0001 1.0001 0 0 0 18.003906 3.9863281 z M 25.003906 3.9863281 A 1.0001 1.0001 0 0 0 24.048828 4.6894531 L 23.410156 6.6503906 C 22.654508 8.9644197 22.910072 11.627244 24.162109 13.546875 C 24.988072 14.813244 25.247852 17.014498 24.6875 18.730469 L 24.048828 20.689453 A 1.0005836 1.0005836 0 1 0 25.951172 21.310547 L 26.589844 19.349609 C 27.345492 17.03558 27.089928 14.372756 25.837891 12.453125 C 25.011928 11.186756 24.752148 8.9855023 25.3125 7.2695312 L 25.951172 5.3105469 A 1.0001 1.0001 0 0 0 25.003906 3.9863281 z M 43.947266 9.9980469 C 43.739953 9.9964219 43.529062 10.015391 43.320312 10.056641 C 42.504312 10.215641 41.80475 10.680141 41.34375 11.369141 L 30.871094 24 L 36.722656 24 L 46.253906 15.089844 C 46.288906 15.056844 46.321562 15.020422 46.351562 14.982422 C 46.873562 14.310422 47.091797 13.476766 46.966797 12.634766 C 46.841797 11.792766 46.388359 11.057406 45.693359 10.566406 C 45.172109 10.198156 44.569203 10.002922 43.947266 9.9980469 z M 4 26 C 3.448 26 3 26.448 3 27 L 3 30 C 3 39.7 13.616 47 20.5 47 L 29.5 47 C 36.384 47 47 39.7 47 30 L 47 27 C 47 26.448 46.552 26 46 26 L 4 26 z M 5 30 L 41 30 C 41.552 30 42 30.448 42 31 C 42 31.552 41.552 32 41 32 L 5.203125 32 C 5.084125 31.344 5 30.68 5 30 z"/>}
    </SvgIcon>
  );
};

SoupPlateIcon.displayName = 'SoupPlateIcon';

SoupPlateIcon.defaultProps = {
  viewType: 'standard',
};