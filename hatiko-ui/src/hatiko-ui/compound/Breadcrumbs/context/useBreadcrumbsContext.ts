import { useAccurateContext } from '@/hatiko-ui/utils/context/useAccurateContext';
import { BreadcrumbsContext } from './BreadcrumbsContext';

export const useBreadcrumbsContext = () => useAccurateContext(BreadcrumbsContext);