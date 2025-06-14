import { createAccurateContext } from '@/hatiko-ui/utils/context/createAccurateContext';

export interface InputContextprops {
  id: string;
}

export const InputContext = createAccurateContext<InputContextprops>()