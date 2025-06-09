
import { componentRender } from '@/library/test/componentRender';

import { Dropdown, DROPDOWN_TEST_IDS, DropdownProps } from './Dropdown';

const dropdownProps = {
  items: [
    {
      id: 1,
      link: '#!',
      text: 'link 1'
    },
    {
      id: 2,
      link: '#!',
      text: 'link 2'
    }
  ],
  title:"Example"
} satisfies DropdownProps;

describe('Dropdown', () => {
  test('should render dropdown when items provided', () => {
    const {getByTestId} = componentRender(<Dropdown {...dropdownProps}/>);

    const dropdown = getByTestId(DROPDOWN_TEST_IDS.DROPDOWN);

    expect(dropdown).toBeInTheDocument();
  });
 
});

describe("Dropdown classNames", () => {
 test("should has classNameMenu when provided", () => {
      const {getByTestId} = componentRender(<Dropdown {...dropdownProps} classNameMenu="dropdown_className_menu"/>);

      const menu = getByTestId(DROPDOWN_TEST_IDS.MENU);

      expect(menu).toHaveClass("dropdown_className_menu")
  })
  test("should hasn't classNameMenu when provided", () => {
      const {queryByTestId} = componentRender(<Dropdown {...dropdownProps} />);

      const menu = queryByTestId(DROPDOWN_TEST_IDS.MENU);

      expect(menu).not.toHaveClass("dropdown_className_menu")
  });

   test("should has classNameShowBar when provided", () => {
      const {getByTestId} = componentRender(<Dropdown {...dropdownProps} classNameShowBar="dropdown_className_bar"/>);

      const bar = getByTestId(DROPDOWN_TEST_IDS.ACTIVE_BTN);

      expect(bar).toHaveClass("dropdown_className_bar")
  });
  test("should hasn't classNameShowBar when provided", () => {
      const {queryByTestId} = componentRender(<Dropdown {...dropdownProps} />);

      const bar = queryByTestId(DROPDOWN_TEST_IDS.ACTIVE_BTN);

      expect(bar).not.toHaveClass("dropdown_className_bar")
  })
})