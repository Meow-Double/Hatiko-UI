import { createAccurateContext } from '@/library/utils/context/createAccurateContext';

export interface TextareaContextProps {
  id: string;
}

export const TextareaContext = createAccurateContext<TextareaContextProps>();