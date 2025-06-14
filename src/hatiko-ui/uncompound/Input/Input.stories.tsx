

import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from './Input';
import { SearchIcon } from '@/hatiko-ui/icons';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input
};

const inputProps: InputProps = {
  variant: 'primary',
  placeholder:"username..."
};

const inputIcon = <SearchIcon />;

type Story = StoryObj<typeof Input>;
const InputTemplate: Story = { render: (args) => <Input {...args} /> };


export const Primary = InputTemplate
Primary.args = inputProps;

export const Outline ={...InputTemplate}
Outline.args = {...inputProps, variant:"outline"};

export const PrimaryEndIcon = {...InputTemplate}
PrimaryEndIcon.args = {...inputProps, endIcon:inputIcon };

export const OutlineEndIcon = {...InputTemplate}
OutlineEndIcon.args = {...inputProps, variant:"outline", endIcon:inputIcon};

export const PrimaryLabelText = {...InputTemplate}
PrimaryLabelText.args = {...inputProps, label:"input label text"};

export const PrimaryErrorText = {...InputTemplate}
PrimaryErrorText.args = {...inputProps, error:"input error text"};

export const OutlineLabelText = {...InputTemplate}
OutlineLabelText.args = {...inputProps, variant:"outline", label:"input label text"};

export const OutlineErrorText = {...InputTemplate}
OutlineErrorText.args = {...inputProps, variant:"outline", error:"input error text"};

export const PrimaryWithAll = {...InputTemplate}
PrimaryWithAll.args = {...inputProps, label:"input error text", error:"input error text", endIcon: inputIcon};

export const OutlineWithAll = {...InputTemplate}
OutlineWithAll.args = {...inputProps, variant:"outline", label:"input error text", error:"input error text", endIcon: inputIcon};

export default meta;

