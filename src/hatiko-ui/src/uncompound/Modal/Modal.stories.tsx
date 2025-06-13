import { Meta, StoryObj } from '@storybook/react';

import { Modal, ModalProps } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal
};

const modalProps: ModalProps = {
  children: 'Modal content',
  isOpen: true,
  closeModal: () => false,
  closeBtn: false
};

type Story = StoryObj<typeof Modal>;

const ModalTemplate: Story = { render: (args) => <Modal {...args} /> };

export const Default = {...ModalTemplate};
Default.args = modalProps;

export const WithTitle = {...ModalTemplate};
WithTitle.args = { ...modalProps, title: 'Modal title' };

export const WithTitleAndIcon = {...ModalTemplate};
WithTitleAndIcon.args = { ...modalProps, title: 'Modal title', closeBtn: true };

export default meta;  