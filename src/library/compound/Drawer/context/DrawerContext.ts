import { createAccurateContext } from '@/library/utils/context/createAccurateContext';

export interface DrawerContextParams {
  closeDrawer: () => void;
}

export const DrawerContext = createAccurateContext<DrawerContextParams>();