import { useAccurateContext } from '@/library/utils/context/useAccurateContext';

import { RangeContext } from './RangeContext';

export const useRangeContext = () => useAccurateContext(RangeContext);