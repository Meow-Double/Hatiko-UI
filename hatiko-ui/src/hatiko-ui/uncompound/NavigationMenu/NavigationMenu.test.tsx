import { componentRender } from '@/library/test/componentRender';

import { NavigationMenu, NAVIGATIONMENU_TEST_IDS, NavigationMenuProps } from './NavigationMenu';

const navigationMenuProps = {
  title: 'Stories navigation menu',
  items: [
    { id: 1, path: '#!', text: 'Stories 1' },
    { id: 2, path: '#!', text: 'Stories 2' }
  ]
} satisfies NavigationMenuProps;

describe('NavigationMenu', () => {
  test('should render component', () => {
    const { getByTestId } = componentRender(<NavigationMenu {...navigationMenuProps} />);

    const navigationMenu = getByTestId(NAVIGATIONMENU_TEST_IDS.NAVIGATION);

    expect(navigationMenu).toBeInTheDocument();
  });

  test('should render title when provided', () => {
    const { getByTestId } = componentRender(<NavigationMenu {...navigationMenuProps} />);

    const navigationMenuTitle = getByTestId(NAVIGATIONMENU_TEST_IDS.TITLE);

    expect(navigationMenuTitle).toHaveTextContent(navigationMenuProps.title);
  });
});

describe('NavigationMenu classNames', () => {
  test('should has className when ptovided', () => {
    const { getByTestId } = componentRender(
      <NavigationMenu {...navigationMenuProps} className='navigationMenu_classname' />
    );

    const navigationMenu = getByTestId(NAVIGATIONMENU_TEST_IDS.NAVIGATION);

    expect(navigationMenu).toHaveClass('navigationMenu_classname');
  });

  test('should has not className when ptovided', () => {
    const { queryByTestId } = componentRender(<NavigationMenu {...navigationMenuProps} />);

    const navigationMenu = queryByTestId(NAVIGATIONMENU_TEST_IDS.NAVIGATION);

    expect(navigationMenu).not.toHaveClass('navigationMenu_classname');
  });
});