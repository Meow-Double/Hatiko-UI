import { ReactNode } from "react";

import { CheckboxContext, CheckboxContextParams } from "./CheckboxContext";

interface CheckboxProviderProps {
    children: ReactNode;
    values: CheckboxContextParams
}

export const CheckboxProvider = ({children, values}: CheckboxProviderProps) => {
    return <CheckboxContext.Provider value={values ?? null}>
      {children}
    </CheckboxContext.Provider>
};