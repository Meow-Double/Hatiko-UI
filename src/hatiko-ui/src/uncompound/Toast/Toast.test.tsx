import { render } from '@testing-library/react';
import { vitest } from 'vitest';

import { Toast, TOAST_TEST_IDS, ToastProps, ToastVariants } from './Toast';

import styles from './Toast.module.css';

const toastProps = {
  toastList: [{ id: 1, description: 'Test describe for toast component', variant: 'success' }],
  clearToasts: vitest.fn()
} satisfies ToastProps;

const toastVariants: ToastVariants[] = ['success', 'danger', 'info', 'warning'];

describe('Toast variants', () => {
  toastVariants.forEach((variant) => {
    test(`should render ${variant} variant correctly`, () => {
      const toastObj = {
        ...toastProps.toastList[0],
        variant
      };

      const { getByTestId } = render(
        <Toast clearToasts={toastProps.clearToasts} toastList={[toastObj]} />
      );

      const toastElement = getByTestId(TOAST_TEST_IDS.ITEM);

      expect(toastElement).toHaveClass(styles[variant]);
    });
  });
});