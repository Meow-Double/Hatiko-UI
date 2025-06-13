import { useAccurateContext } from '@/library/utils/context/useAccurateContext';

import { RadioContext } from './RadioContext';

export const useRadioContext = () => useAccurateContext(RadioContext);