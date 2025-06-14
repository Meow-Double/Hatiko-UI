import { Meta, StoryObj } from '@storybook/react';

import { InputOTP, InputOTPProps } from './InputOTP';

const meta: Meta<typeof InputOTP> = {
  title: 'UI/InputOTP',
  component: InputOTP
};

const inputOTPProps: InputOTPProps = {
  getValue: () => {}
};

type Story = StoryObj<typeof InputOTP>;
const InputOTPTemplate: Story = { render: (args) => <InputOTP {...args} /> };

export const WithFourLength = { ...InputOTPTemplate };
WithFourLength.args = inputOTPProps;

export const WithSixLength = { ...InputOTPTemplate };
WithSixLength.args = { ...inputOTPProps, length: 6 };

export default meta;