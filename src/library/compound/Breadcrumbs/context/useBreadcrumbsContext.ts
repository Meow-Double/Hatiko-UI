import { useAccurateContext } from '@/library/utils/context/useAccurateContext';

import { BreadcrumbsContext } from './BreadcrumbsContext';

export const useBreadcrumbsContext = () => useAccurateContext(BreadcrumbsContext);