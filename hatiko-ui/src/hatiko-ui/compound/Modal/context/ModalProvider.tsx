import { ReactNode } from 'react';

import { ModalContext, ModalContextProps } from './ModalContext';

interface ModalProviderParams {
  children: ReactNode;
  values?: ModalContextProps;
}

export const ModalProvider = ({ children, values }: ModalProviderParams) => {
  return <ModalContext.Provider value={values ?? null}>{children}</ModalContext.Provider>;
};