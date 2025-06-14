import { useAccurateContext } from '@/hatiko-ui/utils/context/useAccurateContext';
import { DrawerContext } from './DrawerContext';

export const useDrawerContext = () => useAccurateContext(DrawerContext);