import { useAccurateContext } from '@/library/utils/context/useAccurateContext';

import { AccordionContext } from './AccordionContext';

export const useAccordionContext = () => useAccurateContext(AccordionContext);