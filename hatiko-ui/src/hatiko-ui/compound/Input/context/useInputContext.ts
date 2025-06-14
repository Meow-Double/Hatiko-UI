

import { useAccurateContext } from '@/hatiko-ui/utils/context/useAccurateContext';
import { InputContext } from './InputContext';

export const useInputContext = () => useAccurateContext(InputContext);