import { useAccurateContext } from '@/library/utils/context/useAccurateContext';

import { SelectContext } from './SelectContext';

export const useSelectContext = () => useAccurateContext(SelectContext);