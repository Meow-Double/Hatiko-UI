

import { useAccurateContext } from '@/hatiko-ui/utils/context/useAccurateContext';
import { ModalContext } from './ModalContext';

export const useModalContext = () => useAccurateContext(ModalContext)