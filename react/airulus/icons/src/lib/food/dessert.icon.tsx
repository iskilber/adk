import * as React from 'react';
import { SvgIcon } from '../svg-icon.component';

export declare namespace DessertIcon {
  interface Props extends SvgIcon.Props {
    viewType?: 'standard' | 'filled';
  }
  type Component = React.FunctionComponent<Props>;
}

export const DessertIcon: DessertIcon.Component = ({ viewType, ...props}) => {
  return (
    <SvgIcon {...props}>
      { viewType === 'standard' &&
          <path d="M 16.996094 1.9980469 C 16.823844 1.9985469 16.652047 2.0452656 16.498047 2.1347656 C 16.189047 2.3147656 16 2.644 16 3 C 16 3.014 15.982734 4.3904688 14.552734 5.1054688 L 14.068359 5.3457031 C 11.435359 6.6457031 7.5466875 8.5681094 7.0546875 13.037109 C 2.7376875 13.374109 -5.9211895e-16 16.031 0 20 C 0 21.760208 0.94239497 23.576353 3.1835938 24.917969 L 4.8183594 32.082031 C 5.1723594 32.034031 5.5314375 32 5.8984375 32 L 6.8515625 32 L 5.4726562 25.957031 C 7.2353241 26.547379 9.4751682 26.925671 12.271484 26.982422 C 12.421484 26.370422 12.643266 25.699047 12.947266 24.998047 C 6.2952656 24.987047 2 23.029 2 20 C 2 15.487 6.196 15 8 15 C 8.553 15 9 14.552 9 14 C 9 10.08 12.163125 8.518625 14.953125 7.140625 L 15.447266 6.8945312 C 16.675266 6.2805313 17.311578 5.3680781 17.642578 4.5800781 C 19.774578 6.0090781 23 8.673 23 11 C 23 11.504 23.376953 11.930188 23.876953 11.992188 C 27.794953 12.482188 30.037219 13.692578 31.324219 15.017578 C 31.631219 15.010578 31.934 15 32.25 15 C 32.816 15 33.364391 15.015062 33.900391 15.039062 C 32.672391 13.000063 30.128062 10.929187 24.914062 10.117188 C 24.130063 6.0331875 18.213094 2.5408594 17.496094 2.1308594 C 17.341094 2.0423594 17.168344 1.9975469 16.996094 1.9980469 z M 32.25 17 C 17.353 17 14 25.851172 14 28.951172 C 14 30.182172 14.501609 31.34 14.849609 32 L 15.011719 32 L 16.980469 32 L 17.5 32 C 18.11 31.536 19.023 31 20 31 C 21.104 31 22.118891 31.675016 22.712891 32.166016 C 23.358891 32.301016 23.972781 32.521688 24.550781 32.804688 C 24.617781 32.761688 24.689141 32.728969 24.744141 32.667969 C 24.759141 32.650969 26.286 31 28 31 C 29.724 31 31.242859 32.653969 31.255859 32.667969 C 31.624859 33.080969 32.257969 33.112141 32.667969 32.744141 L 32.744141 32.667969 C 32.759141 32.650969 34.286 31 36 31 C 37.724 31 39.242859 32.653969 39.255859 32.667969 C 39.634859 33.091969 40.365141 33.091969 40.744141 32.667969 C 40.759141 32.650969 42.286 31 44 31 C 45.171557 31 46.20893 31.745992 46.783203 32.240234 L 40.363281 46 L 38.308594 46 L 40.964844 36.263672 A 1.0001 1.0001 0 0 0 39.955078 34.988281 A 1.0001 1.0001 0 0 0 39.035156 35.736328 L 36.236328 46 L 33 46 L 33 36 A 1.0001 1.0001 0 0 0 31.984375 34.986328 A 1.0001 1.0001 0 0 0 31 36 L 31 46 L 27.962891 46 C 27.532891 46.754 26.980937 47.427 26.335938 48 L 31.832031 48 A 1.0001 1.0001 0 0 0 32.158203 48 L 41 48 C 41.389 48 41.74225 47.775828 41.90625 47.423828 L 48.886719 32.464844 C 49.101471 32.135648 50 30.667399 50 29 C 50 25.662 46.812 17 32.25 17 z M 32.25 19 C 45.171 19 48 26.219 48 29 C 48 29.493091 47.849559 29.976944 47.683594 30.396484 C 46.823489 29.746787 45.51887 29 44 29 C 42.291 29 40.834 29.946766 40 30.634766 C 39.166 29.946766 37.709 29 36 29 C 34.283 29 32.831 29.951625 32 30.640625 C 31.169 29.951625 29.717 29 28 29 C 26.291 29 24.834 29.946766 24 30.634766 C 23.166 29.946766 21.709 29 20 29 C 18.486161 29 17.184512 29.740483 16.324219 30.388672 C 16.15414 29.954611 16 29.453404 16 28.951172 C 16 26.849172 18.758 19 32.25 19 z M 5.8984375 34 C 2.6521566 34 0 36.652157 0 39.898438 L 0 40.832031 A 1.0001 1.0001 0 0 0 0 41.158203 L 0 42.101562 C 0 45.347843 2.6521566 48 5.8984375 48 L 21.101562 48 C 24.347843 48 27 45.347844 27 42.101562 L 27 41.167969 A 1.0001 1.0001 0 0 0 27 40.841797 L 27 39.898438 C 27 36.652157 24.347843 34 21.101562 34 L 5.8984375 34 z M 5.8984375 36 L 21.101562 36 C 23.267283 36 25 37.732717 25 39.898438 L 25 40 L 2 40 L 2 39.898438 C 2 37.732717 3.7327184 36 5.8984375 36 z M 2 42 L 25 42 L 25 42.101562 C 25 44.267283 23.267282 46 21.101562 46 L 5.8984375 46 C 3.7327184 46 2 44.267283 2 42.101562 L 2 42 z"/>}
      { viewType === 'filled' &&
          <path d="M 16.996094 2 C 16.823844 2.0005 16.652547 2.0452656 16.498047 2.1347656 C 16.190047 2.3137656 16 2.644 16 3 C 16 3.014 15.982734 4.3914687 14.552734 5.1054688 L 14.068359 5.3457031 C 11.435359 6.6467031 7.5466875 8.5691094 7.0546875 13.037109 C 2.7376875 13.375109 -5.9211895e-16 16.031 0 20 C 0 23.384 3.415 27 13 27 C 13.535 27 14.037203 26.983844 14.533203 26.964844 C 16.030203 22.494844 20.983 17 33 17 C 33.601 17 34.178141 17.017922 34.744141 17.044922 C 34.095141 14.542922 31.891062 11.204187 24.914062 10.117188 C 24.130063 6.0331875 18.213094 2.5418125 17.496094 2.1328125 C 17.341594 2.0443125 17.168344 1.9995 16.996094 2 z M 33 19 C 19 19 16.040953 26.8465 16.001953 29.9375 C 16.730953 29.1835 18.304 28 21 28 C 22.559 28 23.924 28.5395 25 29.1875 C 26.076 28.5395 27.441 28 29 28 C 30.559 28 31.924 28.5395 33 29.1875 C 34.076 28.5395 35.441 28 37 28 C 38.559 28 39.924 28.5395 41 29.1875 C 42.076 28.5395 43.441 28 45 28 C 47.696 28 49.269047 29.1835 49.998047 29.9375 C 49.959047 26.8465 47 19 33 19 z M 3.7597656 27.445312 L 5.265625 34.039062 C 5.507625 34.014063 5.752 34 6 34 L 15.535156 34 C 15.535156 34 14.190766 30.791531 14.134766 30.644531 C 14.046766 30.414531 13.998953 30.168109 14.001953 29.912109 C 14.005953 29.616109 14.027359 29.302562 14.068359 28.976562 C 13.714359 28.985563 13.373 29 13 29 C 9.059 29 6.0367656 28.402312 3.7597656 27.445312 z M 21 30 C 18.375 30 17.341859 31.439156 17.255859 31.535156 C 16.988859 31.833156 16.92375 32.262 17.09375 32.625 L 17.650391 34 L 21 34 C 24.866 34 28 37.134 28 41 L 28 43 C 28 44.96 27.192531 46.729 25.894531 48 L 32 48 L 32 36 C 32 35.447 32.448 35 33 35 C 33.552 35 34 35.447 34 36 L 34 48 L 36.691406 48 L 40.035156 35.736328 C 40.181156 35.203328 40.729672 34.887156 41.263672 35.035156 C 41.796672 35.181156 42.109844 35.730672 41.964844 36.263672 L 38.763672 48 L 42 48 C 42.389 48 42.74225 47.775828 42.90625 47.423828 L 48.90625 32.625 C 49.07625 32.262 49.011141 31.833156 48.744141 31.535156 C 48.658141 31.439156 47.625 30 45 30 C 43.292 30 41.833 30.947719 41 31.636719 C 40.167 30.947719 38.708 30 37 30 C 35.292 30 33.833 30.947719 33 31.636719 C 32.167 30.947719 30.708 30 29 30 C 27.292 30 25.833 30.947719 25 31.636719 C 24.167 30.947719 22.708 30 21 30 z M 5.8984375 36 C 3.1924375 36 1 38.192437 1 40.898438 L 1 41 L 26 41 L 26 40.898438 C 26 38.192437 23.807562 36 21.101562 36 L 5.8984375 36 z M 1 43 L 1 43.101562 C 1 45.807563 3.1924375 48 5.8984375 48 L 21.101562 48 C 23.807562 48 26 45.807563 26 43.101562 L 26 43 L 1 43 z"/>}
    </SvgIcon>
  );
};

DessertIcon.displayName = 'DessertIcon';

DessertIcon.defaultProps = {
  viewType: 'standard',
};