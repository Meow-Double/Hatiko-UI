import { render } from '@testing-library/react';

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
  title:""
} satisfies DropdownProps;

describe('Dropdown', () => {
  test('should render dropdown when items provided', () => {
    const {getByTestId} = render(<Dropdown {...dropdownProps}/>);

    const dropdown = getByTestId(DROPDOWN_TEST_IDS.DROPDOWN);

    expect(dropdown).toBeInTheDocument();
  });
});