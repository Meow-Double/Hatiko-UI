import { useAccurateContext } from '@/library/utils/context/useAccurateContext';

import { ProgressbarContext } from './ProgressbarContext';

export const useProgressbarContext = () => useAccurateContext(ProgressbarContext);