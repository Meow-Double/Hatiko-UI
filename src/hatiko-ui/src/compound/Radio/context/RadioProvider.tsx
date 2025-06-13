import { ReactNode } from 'react';

import { RadioContext, RadioContextParams } from './RadioContext';

interface RadioProviderProps {
  children: ReactNode;
  values: RadioContextParams;
}

export const RadioProvider = ({ children, values }: RadioProviderProps) => {
  return <RadioContext.Provider value={values ?? null}>{children}</RadioContext.Provider>;
};