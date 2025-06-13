import { createAccurateContext } from '@/library/utils/context/createAccurateContext';

export interface SelectContextParams {
  setActiveItem: (item: string) => void;
}


export const SelectContext = createAccurateContext<SelectContextParams>()