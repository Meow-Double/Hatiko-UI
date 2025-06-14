import { componentRender } from '@/library/test/componentRender';

import { Breadcrumbs, BREADCRUMBS_TEST_IDS, BreadcrumbsProps } from './Breadcrumbs';

const breadcrumbsProps = {
  items: [
    { label: 'item 1', path: '#!' },
    { label: 'item 1', path: '#!' }
  ]
} satisfies BreadcrumbsProps;

describe('Breadcrumbs', () => {
  test('should active last item when rendered', () => {
    const { getByTestId } = componentRender(<Breadcrumbs {...breadcrumbsProps} />);

    const lastItem = getByTestId(BREADCRUMBS_TEST_IDS.LAST_ITEM);

    expect(lastItem).toBeInTheDocument();
  });

  test("should sign wnhe provided", () => {
    const { getByTestId } = componentRender(<Breadcrumbs {...breadcrumbsProps} sign='>'/>); 

    const item = getByTestId(BREADCRUMBS_TEST_IDS.ITEM);

    expect(item).toHaveTextContent(">")
  })
});