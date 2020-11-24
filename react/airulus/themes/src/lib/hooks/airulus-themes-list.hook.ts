import { AirulusThemeListState } from '../state';
import { useInject } from '@adk/react/di';

export function useAirulusThemesList() {
  return useInject<AirulusThemeListState>(AirulusThemeListState);
}