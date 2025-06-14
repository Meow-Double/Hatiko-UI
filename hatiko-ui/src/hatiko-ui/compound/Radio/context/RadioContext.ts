import { createAccurateContext } from '@/hatiko-ui/utils/context/createAccurateContext';

export interface RadioContextParams {
  id: string;
  name?: string;
}

export const RadioContext = createAccurateContext<RadioContextParams>();