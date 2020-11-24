export function useRotation(propsRotate) {
  const rotate = propsRotate ?
      propsRotate === 'top' ? 'rotate(-90 25 25)' :
      propsRotate === 'left' ? 'rotate(-180 25 25)' :
      propsRotate === 'bottom' ? 'rotate(90 25 25)' :
      typeof propsRotate === 'number' ? `rotate(${propsRotate})` :
      null : null;

  const transform = rotate ? `transform="${rotate}"` : '';

  return transform;
}