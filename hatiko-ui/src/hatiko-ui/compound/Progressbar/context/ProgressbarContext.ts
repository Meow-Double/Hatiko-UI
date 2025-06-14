import { createAccurateContext } from '@/hatiko-ui/utils/context/createAccurateContext';

export interface ProgressbarContextParams {
  progress: number;
}

export const ProgressbarContext = createAccurateContext<ProgressbarContextParams>();