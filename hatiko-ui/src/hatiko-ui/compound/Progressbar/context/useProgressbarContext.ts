
import { useAccurateContext } from '@/hatiko-ui/utils/context/useAccurateContext';
import { ProgressbarContext } from './ProgressbarContext';

export const useProgressbarContext = () => useAccurateContext(ProgressbarContext);