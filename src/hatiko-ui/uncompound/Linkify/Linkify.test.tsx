import { render } from '@testing-library/react';

import { Linkify, LINKIFY_TEST_IDS, LinkifyProps } from './Linkify';

import styles from './Linkify.module.css';

const textWithLink =
  'Hatiko-ui ( https://github.com/Meow-Double/Hatiko-UI ) - a library of UI components for React';
const textWithoutLink = 'Hatiko-ui - a library of UI components for React';

const linkifyProps: LinkifyProps = {
  children: textWithLink
};

describe('Linkify', () => {
  test('should has link class when text contains a link', () => {
    const { getByTestId } = render(<Linkify {...linkifyProps} />);

    const link = getByTestId(LINKIFY_TEST_IDS.LINK);

    expect(link).toHaveClass(styles.link);
  });

  test('should has not link class when text contains a link', () => {
    const { queryByTestId } = render(<Linkify children={textWithoutLink} />);

    const link = queryByTestId(LINKIFY_TEST_IDS.LINK);

    expect(link).not.toBeInTheDocument();
  });
});