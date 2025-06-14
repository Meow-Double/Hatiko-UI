import { createAccurateContext } from '@/hatiko-ui/utils/context/createAccurateContext';

export interface ModalContextProps {
  closeModal: () => void;
}

export const ModalContext = createAccurateContext<ModalContextProps>();