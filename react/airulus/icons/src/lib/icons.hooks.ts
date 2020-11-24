const spinnerStyles = require('./spinner.hook.scss');

export function useSpinnerClassName() {
  return spinnerStyles.host;
}