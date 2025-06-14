import { useAccurateContext } from '@/hatiko-ui/utils/context/useAccurateContext';
import { CheckboxContext } from './CheckboxContext';

export const useCheckboxContext = () => useAccurateContext(CheckboxContext);