import { ReactNode } from 'react';

import { AccordionContext, AccordionContextProps } from './AccordionContext';

interface AccordionProviderProps {
  children: ReactNode;
  values?: AccordionContextProps;
}

export const AccordionProvider = ({ children, values }: AccordionProviderProps) => {
  return <AccordionContext.Provider value={values ?? null}>{children}</AccordionContext.Provider>;
};