import { createAccurateContext } from '@/hatiko-ui/utils/context/createAccurateContext';
import { ReactNode } from 'react';

export interface BreadcrumbsContextParams {
  sign?: ReactNode;
}

export const BreadcrumbsContext = createAccurateContext<BreadcrumbsContextParams>();