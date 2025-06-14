import { render } from '@testing-library/react';
import { vitest } from 'vitest';

import { Drawer, DRAWER_TEST_IDS, DrawerProps } from './Drawer';

const drawerProps = {
  children: 'Drawer content',
  isOpen: false,
  closeDrawer: vitest.fn()
} satisfies DrawerProps;

describe('Drawer', () => {
  test('should render drawer when provided children', () => {
    const { getByTestId } = render(<Drawer {...drawerProps} />);

    const overlay = getByTestId(DRAWER_TEST_IDS.OVERLAY);

    expect(overlay).toHaveTextContent(drawerProps.children);
  });

    // test('should has active class when drawer opened', () => {
  //   const { getByTestId } = render(<Drawer {...drawerProps} />);

  //   const overlay = getByTestId(DRAWER_TEST_IDS.OVERLAY);

  //   expect(overlay).not.toHaveClass(styles['active']);

  //   fireEvent.click(overlay);

  //   expect(overlay).not.toHaveClass(styles['active']);
  // });

  test('should has className for overlay when provided', () => {
    const { getByTestId } = render(<Drawer {...drawerProps} classNameOverlay='overlay_class' />);

    const overlay = getByTestId(DRAWER_TEST_IDS.OVERLAY);

    expect(overlay).toHaveClass('overlay_class');
  });

  test('should has className for body when provided', () => {
    const { getByTestId } = render(<Drawer {...drawerProps} classNameBody='body_class' />);

    const drawerBody = getByTestId(DRAWER_TEST_IDS.BODY);

    expect(drawerBody).toHaveClass('body_class');
  });
});


describe('Drawer close button', () => {
  test('should display close button when provided', () => {
    const { getByTestId } = render(<Drawer {...drawerProps} closeBtn />);

    const closeButton = getByTestId(DRAWER_TEST_IDS.CLOSE_BUTTON);

    expect(closeButton).toBeInTheDocument();
  });

  test('should not display close button when provided', () => {
    const { queryByTestId } = render(<Drawer {...drawerProps} closeBtn={false} />);

    const closeButton = queryByTestId(DRAWER_TEST_IDS.CLOSE_BUTTON);

    expect(closeButton).not.toBeInTheDocument();
  });

  // test("should hasn't active class when close button clicked", () => {
  //   const { getByTestId } = render(<Drawer {...drawerProps} closeBtn isOpen />);

  //   let overlay = getByTestId(DRAWER_TEST_IDS.OVERLAY);
  //   let closeButton = getByTestId(DRAWER_TEST_IDS.CLOSE_BUTTON);

  //   expect(overlay).toHaveClass(styles['active']);

  //   fireEvent.click(closeButton);

  //   overlay = getByTestId(DRAWER_TEST_IDS.OVERLAY);
  //   expect(overlay).not.toHaveClass(styles['active']);
  //   });
});




describe('Drawer title', () => {
  test('should display title when provided', () => {
    const { getByTestId } = render(<Drawer {...drawerProps} title='drawer title' />);

    const modalTitle = getByTestId(DRAWER_TEST_IDS.TITLE);

    expect(modalTitle).toBeInTheDocument();
  });

  test('should not display title when provided', () => {
    const { queryByTestId } = render(<Drawer {...drawerProps} />);

    const drawerTitle = queryByTestId(DRAWER_TEST_IDS.TITLE);

    expect(drawerTitle).not.toBeInTheDocument();
  });
});

describe('Drawer lazy', () => {
  test('should not render drawer when provided lazy', () => {
    const { queryByTestId } = render(<Drawer {...drawerProps} lazy />);

    const overlay = queryByTestId(DRAWER_TEST_IDS.OVERLAY);

    expect(overlay).not.toBeInTheDocument();
  });
});