import { Meta, StoryObj } from '@storybook/react';

import { Toast, ToastListTypes, ToastProps } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'UI/Toast',
  component: Toast
};

const toastObj: ToastListTypes = {
  id: 1,
  description: 'This is a success toast component',
  variant: 'success'
};

const toastProps: ToastProps = {
  clearToasts: (toasts) => (toastProps.toastList = toasts),
  toastList: [toastObj],
  position: 'bottom-right'
};

type Story = StoryObj<typeof Toast>;
const ToastTemplate: Story = { render: (args) => <Toast {...args} /> };

export const Success = { ...ToastTemplate };
Success.args = toastProps;

export const Danger = { ...ToastTemplate };
Danger.args = { ...toastProps, toastList: [{...toastObj, variant:"danger"}] };

export const Info = { ...ToastTemplate };
Info.args = { ...toastProps, toastList: [{...toastObj, variant:"info"}] };

export const Warning = { ...ToastTemplate };
Warning.args = { ...toastProps, toastList: [{...toastObj, variant:"warning"}] };

export default meta;