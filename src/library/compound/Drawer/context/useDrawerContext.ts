import { useAccurateContext } from '@/library/utils/context/useAccurateContext';

import { DrawerContext } from './DrawerContext';

export const useDrawerContext = () => useAccurateContext(DrawerContext);