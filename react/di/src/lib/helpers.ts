export function getInjectionTypeName(type: any) {
  if (type === null) {
    return 'null';
  } else if (type === undefined) {
    return 'undefined';
  } else if (typeof type === 'function') {
    if (type.name) {
      return type.name;
    } else if (type.constructor) {
      return type.constructor.name;
    } else {
      return type;
    }
  } else if (typeof type === 'object') {
    if (type.constructor) {
      return `InstanceOf(${type.constructor.name})`;
    } else {
      return "Object";
    }
  } else if (typeof type === 'symbol') {
    return type.toString();
  } else {
    return type;
  }
}

export function setToArray(set: Set<any>) {
  const retVal: any[] = [];

  for (let i of set) {
    retVal.push(i);
  }

  return retVal;
}
