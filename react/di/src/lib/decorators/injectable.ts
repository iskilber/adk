import 'reflect-metadata';

export function Injectable() {
  return (target: any) => {
    target[Symbol.for('adk:dependencies')] =  
        Reflect.getMetadata('design:paramtypes', target);
    if (target[Symbol.for('adk:injectTokens')]) {
      target[Symbol.for('adk:injectTokens')].forEach((token, index) => {
        if (token !== undefined) {
          target[Symbol.for('adk:dependencies')][index] = token;
        }
      })
    }

    return target;
  }
}
