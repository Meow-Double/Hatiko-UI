import { ReactNode } from 'react';

import { SelectContext, SelectContextParams } from './SelectContext';

interface SelectProviderProps {
  children: ReactNode;
  values: SelectContextParams;
}

export const SelectProvider = ({ children, values }: SelectProviderProps) => {
  return <SelectContext.Provider value={values}>{children}</SelectContext.Provider>;
};