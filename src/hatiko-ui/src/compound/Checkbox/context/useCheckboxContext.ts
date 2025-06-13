import { useAccurateContext } from '@/library/utils/context/useAccurateContext';

import { CheckboxContext } from './CheckboxContext';

export const useCheckboxContext = () => useAccurateContext(CheckboxContext);