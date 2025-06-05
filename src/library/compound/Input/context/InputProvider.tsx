import { ReactNode } from 'react';

import { InputContext, InputContextprops } from './InputContext';

interface InputProviderProps {
  children: ReactNode;
  values: InputContextprops;
}

export const InputProvider = ({ children, values }: InputProviderProps) => {
  return <InputContext.Provider value={values ?? null}>{children}</InputContext.Provider>;
};