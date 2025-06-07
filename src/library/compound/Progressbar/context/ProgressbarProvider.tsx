import { ReactNode } from 'react';

import { ProgressbarContext, ProgressbarContextParams } from './ProgressbarContext';

interface ProgressbarProviderProps {
  children: ReactNode;
  values?: ProgressbarContextParams;
}

export const ProgressbarProvider = ({ children, values }: ProgressbarProviderProps) => {
  return (
    <ProgressbarContext.Provider value={values ?? null}>{children}</ProgressbarContext.Provider>
  );
};