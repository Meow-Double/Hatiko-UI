import { fireEvent, render } from '@testing-library/react';

import { Accordion, ACCORDION_TEST_IDS, AccordionProps } from './Accordion';

import styles from './Accordion.module.css';

const accordionProps = {
  items: [
    {
      id: 1,
      title: 'This is accordion',
      text: 'Example accordion text'
    }
  ]
} satisfies AccordionProps;

describe('Accordion', () => {
  test('should render active text when title clicked', () => {
    const { getByTestId, queryByTestId } = render(<Accordion {...accordionProps} />);

    let accordionItemWrapperText = queryByTestId(ACCORDION_TEST_IDS.ITEM_TEXT_WRAPPER);
    const accodrionItemTitle = getByTestId(ACCORDION_TEST_IDS.ITEM_TITLE);

    expect(accordionItemWrapperText).not.toHaveClass(styles.active_text);

    fireEvent.click(accodrionItemTitle);

    accordionItemWrapperText = queryByTestId(ACCORDION_TEST_IDS.ITEM_TEXT_WRAPPER);

    expect(accordionItemWrapperText).toHaveClass(styles.active_text);
  });
  
  test('should display active text when title clicked', () => {
    const { getByTestId, queryByTestId } = render(<Accordion {...accordionProps} />);

    let accordionItemWrapperText = queryByTestId(ACCORDION_TEST_IDS.ITEM_TEXT_WRAPPER);
    const accodrionItemTitle = getByTestId(ACCORDION_TEST_IDS.ITEM_TITLE);

    fireEvent.click(accodrionItemTitle);

    expect(accordionItemWrapperText).toHaveClass(styles.active_text);

    fireEvent.click(accodrionItemTitle);

    accordionItemWrapperText = queryByTestId(ACCORDION_TEST_IDS.ITEM_TEXT_WRAPPER);

    expect(accordionItemWrapperText).not.toHaveClass(styles.active_text);
  });
});