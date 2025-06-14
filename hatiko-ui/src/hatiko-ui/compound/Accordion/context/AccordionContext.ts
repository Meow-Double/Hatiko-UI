import { createAccurateContext } from '@/hatiko-ui/utils/context/createAccurateContext';

export interface AccordionContextProps {
  activeGroup?: string;
  accrodionSwitch: (value: string) => void;
}

export const AccordionContext = createAccurateContext<AccordionContextProps>();