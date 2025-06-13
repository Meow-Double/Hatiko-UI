import { Meta, StoryObj } from '@storybook/react';

import { Typography, TypographyProps, TypographyVariants } from './Typography';

const typographyVariants: TypographyVariants[] = [
  'regular_16',
  'medium_16',
  'bold_16',
  'regular_24',
  'medium_24',
  'bold_24'
];

export default {
  title: 'UI/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: typographyVariants
    },
    tag: {
      control: { type: 'select' },
      options: ['div', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }
  }
} satisfies Meta<TypographyProps<any>>;

const DefaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const TypographyWrapper = ({ variant }: { variant: TypographyVariants }) => {
  const match = variant.match(/(\w+)_(\d+)$/);

  if (!match) return null;

  return (
    <div
    className='typography_block'
      style={{
        fontSize: `${match[2]}px`,
        fontWeight: `${match[1]}`
      }}
    >
      <div className='typography_info'>
        <p>{match[2]}px</p>
        <span>({match[1]})</span>
      </div>
      <Typography variant={variant} tag='p'>
        {DefaultText}
      </Typography>
    </div>
  );
};

export const TypographyShowcase = {
  render: () => (
    <div className='typography_inner'>
      <h1 className='typography_title'>Typography variants</h1>
      <div className='typography_content'>
        {typographyVariants.map((typographyVariant) => (
          <TypographyWrapper key={typographyVariant} variant={typographyVariant} />
        ))}
      </div>
    </div>
  )
} satisfies StoryObj<TypographyProps<any>>;