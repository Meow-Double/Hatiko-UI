import { ReactNode } from 'react';

import { TextareaContext, TextareaContextProps } from './TextareaContext';

interface TextareaProviderParams {
  children: ReactNode;
  values?: TextareaContextProps;
}

export const TextareaProvider = ({ children, values }: TextareaProviderParams) => {
  return <TextareaContext.Provider value={values ?? null}>{children}</TextareaContext.Provider>;
};