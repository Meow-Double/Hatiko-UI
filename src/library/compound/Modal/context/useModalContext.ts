
import { useAccurateContext } from '@/library/utils/context/useAccurateContext';

import { ModalContext } from './ModalContext';

export const useModalContext = () => useAccurateContext(ModalContext)