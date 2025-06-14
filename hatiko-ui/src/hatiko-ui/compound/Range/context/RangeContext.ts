import { createAccurateContext } from '@/hatiko-ui/utils/context/createAccurateContext';

export interface RangeContextParams {
  min: number;
  max: number;
  step: number;
}


export const RangeContext = createAccurateContext<RangeContextParams>()