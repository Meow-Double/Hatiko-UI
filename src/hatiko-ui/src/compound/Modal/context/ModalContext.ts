import { createAccurateContext } from '@/library/utils/context/createAccurateContext';

export interface ModalContextProps {
  closeModal: () => void;
}

export const ModalContext = createAccurateContext<ModalContextProps>();