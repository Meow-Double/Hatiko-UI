import { render } from '@testing-library/react';

import { Tabs, TABS_TEST_IDS, TabsProps } from './Tabs';

const tabsProps = {
  schema: {
    tabs1: 'tabs1',
    tabs2: 'tabs2'
  }
} satisfies TabsProps<Record<string, string>>;

describe('Test', () => {
  test('should render component', () => {
    const { getByTestId } = render(<Tabs {...tabsProps} />);

    const tabs = getByTestId(TABS_TEST_IDS.TABS);

    expect(tabs).toBeInTheDocument();
  });
});

describe('Tabs classNames', () => {
  test('should has className when provided', () => {
    const { getByTestId } = render(<Tabs {...tabsProps} className='tabs_classname' />);

    const tabs = getByTestId(TABS_TEST_IDS.TABS);

    expect(tabs).toHaveClass('tabs_classname');
  });

  test('should has not className when provided', () => {
    const { queryByTestId } = render(<Tabs {...tabsProps} />);

    const tabs = queryByTestId(TABS_TEST_IDS.TABS);

    expect(tabs).not.toHaveClass('tabs_classname');
  });

  test('should has classNameContent when provided', () => {
    const { getByTestId } = render(
      <Tabs {...tabsProps} classNameContent='tabs_classnameContent' />
    );

    const tabsContent = getByTestId(TABS_TEST_IDS.CONTENT);

    expect(tabsContent).toHaveClass('tabs_classnameContent');
  });

  test('should has not classNameContent when provided', () => {
    const { queryByTestId } = render(<Tabs {...tabsProps} />);

    const tabsContent = queryByTestId(TABS_TEST_IDS.TABS);

    expect(tabsContent).not.toHaveClass('tabs_classnameContent');
  });
});