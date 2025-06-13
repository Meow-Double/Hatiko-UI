import { ReactNode } from 'react';

import { createAccurateContext } from '@/library/utils/context/createAccurateContext';

export interface BreadcrumbsContextParams {
  sign?: ReactNode;
}

export const BreadcrumbsContext = createAccurateContext<BreadcrumbsContextParams>();