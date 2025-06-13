import { createAccurateContext } from '@/library/utils/context/createAccurateContext';

export interface AccordionContextProps {
  activeGroup?: string;
  accrodionSwitch: (value: string) => void;
}

export const AccordionContext = createAccurateContext<AccordionContextProps>();