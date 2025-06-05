import { useAccurateContext } from '@/library/utils/context/useAccurateContext';

import { InputContext } from './InputContext';

export const useInputContext = () => useAccurateContext(InputContext);