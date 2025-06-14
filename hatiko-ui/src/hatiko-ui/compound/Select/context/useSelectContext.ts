

import { useAccurateContext } from '@/hatiko-ui/utils/context/useAccurateContext';
import { SelectContext } from './SelectContext';

export const useSelectContext = () => useAccurateContext(SelectContext);