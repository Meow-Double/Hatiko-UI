import { createAccurateContext } from '@/library/utils/context/createAccurateContext';

export interface ProgressbarContextParams {
  progress: number;
}

export const ProgressbarContext = createAccurateContext<ProgressbarContextParams>();