import { render } from '@testing-library/react';

import { Tooltip, TOOLTIP_TEST_IDS, TooltipProps } from './Tooltip';

const tooltipProps = {
  children: 'Tooltim text',
  title: 'tooltip title'
} satisfies TooltipProps;

describe('Tooltip', () => {
  test('should render component', () => {
    const { getByTestId } = render(<Tooltip {...tooltipProps} className='tooltip_classname' />);

    const tooltip = getByTestId(TOOLTIP_TEST_IDS.TOOLTIP);

    expect(tooltip).toBeInTheDocument();
  });
});

describe('Tooltip classNames', () => {
  test('should has className when provided', () => {
    const { getByTestId } = render(<Tooltip {...tooltipProps} className='tooltip_classname' />);

    const tooltip = getByTestId(TOOLTIP_TEST_IDS.TOOLTIP);

    expect(tooltip).toHaveClass('tooltip_classname');
  });

  test('should has not className when provided', () => {
    const { queryByTestId } = render(<Tooltip {...tooltipProps} />);

    const tooltip = queryByTestId(TOOLTIP_TEST_IDS.TOOLTIP);

    expect(tooltip).not.toHaveClass('tooltip_classname');
  });
});