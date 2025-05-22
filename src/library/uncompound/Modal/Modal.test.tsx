import {  render } from '@testing-library/react';
import { vitest } from 'vitest';

import { Modal, MODAL_TEST_IDS, ModalProps } from './Modal';


const modalProps = {
  children: 'Modal content',
  isOpen: false,
  closeModal: vitest.fn()
} satisfies ModalProps;

describe('Modal', () => {
  test('should render modal when provided children', () => {
    const { getByTestId } = render(<Modal {...modalProps} />);

    const modal = getByTestId(MODAL_TEST_IDS.OVERLAY);

    expect(modal).toHaveTextContent(modalProps.children);
  });

  // test('should has active class when modal opened', () => {
  //   const { getByTestId } = render(<Modal {...modalProps} />);

  //   const overlay = getByTestId(MODAL_TEST_IDS.OVERLAY);

  //   expect(overlay).not.toHaveClass(styles['active']);

  //   fireEvent.click(overlay);

  //   expect(overlay).not.toHaveClass(styles['active']);
  // });

  test('should has className for overlay when provided', () => {
    const { getByTestId } = render(<Modal {...modalProps} classNameOverlay='overlay_class' />);

    const overlay = getByTestId(MODAL_TEST_IDS.OVERLAY);

    expect(overlay).toHaveClass('overlay_class');
  });

  test('should has className for body when provided', () => {
    const { getByTestId } = render(<Modal {...modalProps} classNameBody='body_class' />);

    const modal = getByTestId(MODAL_TEST_IDS.BODY);

    expect(modal).toHaveClass('body_class');
  });
});

describe('Modal close button', () => {
  test('should display close button when provided', () => {
    const { getByTestId } = render(<Modal {...modalProps} closeBtn />);

    const closeButton = getByTestId(MODAL_TEST_IDS.CLOSE_BUTTON);

    expect(closeButton).toBeInTheDocument();
  });

  test('should not display close button when provided', () => {
    const { queryByTestId } = render(<Modal {...modalProps} closeBtn={false} />);

    const closeButton = queryByTestId(MODAL_TEST_IDS.CLOSE_BUTTON);

    expect(closeButton).not.toBeInTheDocument();
  });

  // test("should hasn't active class when close button clicked", () => {
  //   const { getByTestId } = render(<Modal {...modalProps} closeBtn isOpen />);

  //   let overlay = getByTestId(MODAL_TEST_IDS.OVERLAY);
  //   let closeButton = getByTestId(MODAL_TEST_IDS.CLOSE_BUTTON);

  //   expect(overlay).toHaveClass(styles['active']);

  //   fireEvent.click(closeButton);

  //   overlay = getByTestId(MODAL_TEST_IDS.OVERLAY);
  //   expect(overlay).not.toHaveClass(styles['active']);
  //   });
});

describe('Modal title', () => {
  test('should display title when provided', () => {
    const { getByTestId } = render(<Modal {...modalProps} title='modal title' />);

    const modalTitle = getByTestId(MODAL_TEST_IDS.TITLE);

    expect(modalTitle).toBeInTheDocument();
  });

  test('should not display title when provided', () => {
    const { queryByTestId } = render(<Modal {...modalProps} />);

    const modalTitle = queryByTestId(MODAL_TEST_IDS.TITLE);

    expect(modalTitle).not.toBeInTheDocument();
  });
});

describe('Modal lazy', () => {
  test('should not render modal when provided lazy', () => {
    const { queryByTestId } = render(<Modal {...modalProps} lazy />);

    const overlay = queryByTestId(MODAL_TEST_IDS.OVERLAY);

    expect(overlay).not.toBeInTheDocument();
  });
});