import { createAccurateContext } from '@/library/utils/context/createAccurateContext';

export interface CheckboxContextParams {
  id: string;
}

export const CheckboxContext = createAccurateContext<CheckboxContextParams>();