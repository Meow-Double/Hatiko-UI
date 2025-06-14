import { createAccurateContext } from '@/hatiko-ui/utils/context/createAccurateContext';

export interface CheckboxContextParams {
  id: string;
}

export const CheckboxContext = createAccurateContext<CheckboxContextParams>();