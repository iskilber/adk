import { HttpClient } from '../http-client';
import { useInject } from '@adk/react/di';

export function useHttpClient(): HttpClient {
  return useInject(HttpClient);
}

export function useSearchParams<P = any>(...keys: string[]): P {
  const searchParams = new URLSearchParams(location.search);

  return keys.reduce((acc, key) =>
      ({
        ...acc,
        [key]: searchParams.get(key)}),
      {}) as P;
}
