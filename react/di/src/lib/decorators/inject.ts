export function Inject(token: any) {
  return (target: Object, propertyKey: string, parameterIndex: number) => {
    if (!target[Symbol.for('adk:injectTokens')]) {
      target[Symbol.for('adk:injectTokens')] = [];
    }
    target[Symbol.for('adk:injectTokens')][parameterIndex] = token;
  }
}