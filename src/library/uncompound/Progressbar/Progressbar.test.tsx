import {  render } from '@testing-library/react';

import { Progressbar, PROGRESSBAR_TEST_IDS, ProgressbarProps } from './Progressbar';

const progressbarProps = {
  progress: 20
} satisfies ProgressbarProps;

describe('Progressbar', () => {
  test('should render progressbar', () => {
    const { getByTestId } = render(<Progressbar {...progressbarProps} />);

    const progressbar = getByTestId(PROGRESSBAR_TEST_IDS.PROGRESSBAR);

    expect(progressbar).toBeInTheDocument();
  });

  test('should render title when provided', () => {
    const { getByTestId } = render(<Progressbar {...progressbarProps} />);

    const title = getByTestId(PROGRESSBAR_TEST_IDS.TITLE_TEXT);

    expect(title).toBeInTheDocument();
  });

  test('should render progress text when provided', () => {
    const { getByTestId } = render(<Progressbar {...progressbarProps} />);

    const text = getByTestId(PROGRESSBAR_TEST_IDS.PROGRESS_TEXT);

    expect(text).toBeInTheDocument();
  });

  test('should render progress line when progress more zero', () => {
    const { getByTestId } = render(<Progressbar {...progressbarProps} />);

    const line = getByTestId(PROGRESSBAR_TEST_IDS.PROGRESS_LINE);

    expect(line).toBeInTheDocument();
  });
});