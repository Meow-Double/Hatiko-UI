import { ReactNode } from 'react';

import { RangeContext, RangeContextParams } from './RangeContext';

interface RangeProviderProps {
  children: ReactNode;
  values?: RangeContextParams;
}

export const RangeProvider = ({ children, values }: RangeProviderProps) => {
  return <RangeContext.Provider value={values ?? null}>{children}</RangeContext.Provider>;
};