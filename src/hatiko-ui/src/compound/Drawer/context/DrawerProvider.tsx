import { ReactNode } from 'react';

import { DrawerContext, DrawerContextParams } from './DrawerContext';

interface DrawerProviderProps {
  children: ReactNode;
  values: DrawerContextParams;
}

export const DrawerProvider = ({ children, values }: DrawerProviderProps) => {
  return <DrawerContext.Provider value={values}>{children}</DrawerContext.Provider>;
};