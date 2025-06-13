import { ReactNode } from 'react';

import { PaginationContext, PaginationContextParams } from './PaginationContext';

interface PaginationProviderProps {
  children: ReactNode;
  values?: PaginationContextParams;
}

export const PaginationProvider = ({ children, values }: PaginationProviderProps) => {
  return <PaginationContext.Provider value={values ?? null}>{children}</PaginationContext.Provider>;
};