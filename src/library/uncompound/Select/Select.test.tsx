import { fireEvent, render } from '@testing-library/react';

import { Select, SELECT_TEST_IDS, SelectProps } from './Select';

import styles from './Select.module.css';

const selectProps = {
  items: ['item 1', 'item2', 'item3', 'item4']
} satisfies SelectProps;

describe('Select', () => {
  test('should render select when items provided', () => {
    const { getByTestId } = render(<Select {...selectProps} />);

    const select = getByTestId(SELECT_TEST_IDS.SELECT);

    expect(select).toBeInTheDocument();
  });

  test('should change active text when clicked', () => {
    const { getAllByTestId, getByTestId } = render(<Select {...selectProps} />);

    const activeText = getByTestId(SELECT_TEST_IDS.ACTIVE_TEXT);

    expect(activeText).toHaveTextContent(selectProps.items[0]);

    const activeBtn = getByTestId(SELECT_TEST_IDS.ACTIVE_BTN);

    const menu = getByTestId(SELECT_TEST_IDS.MENU);

    expect(menu).not.toHaveClass(styles.active_menu);

    fireEvent.click(activeBtn);

    expect(menu).toHaveClass(styles.active_menu);

    const items = getAllByTestId(SELECT_TEST_IDS.ITEM_BTN);

    fireEvent.click(items[2]);

    const newActiveText = getByTestId(SELECT_TEST_IDS.ACTIVE_TEXT);

    expect(newActiveText).toHaveTextContent(selectProps.items[2]);
  });
});

describe('Select classNames', () => {
  test('should has classNameMenu when provided', () => {
    const { getByTestId } = render(
      <Select {...selectProps} classNameMenu='select_className_menu' />
    );
    const menu = getByTestId(SELECT_TEST_IDS.MENU);

    expect(menu).toHaveClass('select_className_menu');
  });

  test("should hasn't classNameMenu when provided", () => {
    const { queryByTestId } = render(<Select {...selectProps} />);

    const menu = queryByTestId(SELECT_TEST_IDS.MENU);

    expect(menu).not.toHaveClass('select_className_menu');
  });

  test('should has classNameMenu when provided', () => {
    const { getByTestId } = render(
      <Select {...selectProps} classNameShowBar='select_className_bar' />
    );

    const bar = getByTestId(SELECT_TEST_IDS.ACTIVE_BTN);

    expect(bar).toHaveClass('select_className_bar');
  });

  test("should hasn't classNameMenu when provided", () => {
    const { queryByTestId } = render(<Select {...selectProps} />);

    const bar = queryByTestId(SELECT_TEST_IDS.ACTIVE_BTN);

    expect(bar).not.toHaveClass('select_className_bar');
  });
});