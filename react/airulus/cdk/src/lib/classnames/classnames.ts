export interface Classnames {
  [className: string]: boolean;
}

/**
 * Join class names together. Valid inputs are:
 * 
 *  - `classnames('a', 'b', 'c')`
 *  - `classnames({'a': true, 'b': true, 'c': false})`
 *  - `classnames({'a': true, 'b': true, 'c': false}, 'd')`
 */
export function classnames(...names: Array< string | number | Classnames>) {
  const length = names.length;
  let out: string = '';
  for (let ix = 0; ix < length; ix++) {
    const name = names[ix];
    if ((typeof name) === 'object') {
      for (let i in (name as Classnames)) {
        if (Reflect.has((name as Classnames), i) && name[i]) {
          out += (out && !!i ? " " : '') + (i || '');
        }
      }
    } else {
      out += (out && !!name ? " " : '') + (name || '');
    }
  }

  return out;
}
