import { Meta, StoryObj } from '@storybook/react';

import Image1 from '@/library/storybook/images/image-1.jpg';
import Image2 from '@/library/storybook/images/image-2.jpg';
import Image3 from '@/library/storybook/images/image-3.jpg';

import { ImagePopup, ImagePopupProps } from './ImagePopup';

const meta: Meta<typeof ImagePopup> = {
  title: 'UI/ImagePopup',
  component: ImagePopup
};

const imagePopupProps: ImagePopupProps = {
  isOpen: true,
  closePopup: () => (imagePopupProps.isOpen = false),
  images: [Image1, Image2, Image3]
};

type Story = StoryObj<typeof ImagePopup>;
const ImagePopupTemplate: Story = { render: (args) => <ImagePopup {...args} /> };

export const Default = { ...ImagePopupTemplate };
Default.args = { ...imagePopupProps };

export default meta;