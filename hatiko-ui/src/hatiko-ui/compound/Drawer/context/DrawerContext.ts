import { createAccurateContext } from '@/hatiko-ui/utils/context/createAccurateContext';

export interface DrawerContextParams {
  closeDrawer: () => void;
}

export const DrawerContext = createAccurateContext<DrawerContextParams>();