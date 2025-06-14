import { createAccurateContext } from '@/hatiko-ui/utils/context/createAccurateContext';

export interface TextareaContextProps {
  id: string;
}

export const TextareaContext = createAccurateContext<TextareaContextProps>();