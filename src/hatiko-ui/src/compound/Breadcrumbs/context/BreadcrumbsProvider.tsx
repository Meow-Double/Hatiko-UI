import { ReactNode } from 'react';

import { BreadcrumbsContext, BreadcrumbsContextParams } from './BreadcrumbsContext';

interface BreadcrumbsProviderProps {
  children: ReactNode;
  values?: BreadcrumbsContextParams;
}

export const BreadcrumbsProvider = ({ children, values }: BreadcrumbsProviderProps) => {
  return (
    <BreadcrumbsContext.Provider value={values ?? null}>{children}</BreadcrumbsContext.Provider>
  );
};