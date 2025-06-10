import { createAccurateContext } from '@/library/utils/context/createAccurateContext';

export interface RadioContextParams {
  id: string;
  name?: string;
}

export const RadioContext = createAccurateContext<RadioContextParams>();