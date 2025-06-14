import { useAccurateContext } from '@/hatiko-ui/utils/context/useAccurateContext';
import { PaginationContext } from './PaginationContext';

export const usePaginationContext = () => useAccurateContext(PaginationContext);