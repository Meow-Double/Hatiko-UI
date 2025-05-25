
import type { Meta, StoryObj } from '@storybook/react';

import { Textarea, TextareaProps } from './Textarea';


const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
};

const textareaProps: TextareaProps = {
  variant: 'primary',
  placeholder:"username..."
};


type Story = StoryObj<typeof Textarea>;
const TextareaTemplate: Story = { render: (args) => <Textarea {...args} /> };


export const Primary = { ...TextareaTemplate };
Primary.args = textareaProps;

export const Outline = { ...TextareaTemplate };
Outline.args = {...textareaProps, variant:"outline"};

export const PrimaryLabelText = {...TextareaTemplate };
PrimaryLabelText.args = {...textareaProps, label:"input label text"};

export const PrimaryErrorText = {...TextareaTemplate };
PrimaryErrorText.args = {...textareaProps, error:"input error text"};

export const OutlineLabelText = {...TextareaTemplate };
OutlineLabelText.args = {...textareaProps, variant:"outline", label:"input label text"};

export const OutlineErrorText = {...TextareaTemplate };
OutlineErrorText.args = {...textareaProps, variant:"outline", error:"input error text"};

export const PrimaryWithAll = {...TextareaTemplate };
PrimaryWithAll.args = {...textareaProps, label:"input error text", error:"input error text"};

export const OutlineWithAll = {...TextareaTemplate };
OutlineWithAll.args = {...textareaProps, variant:"outline", label:"input error text", error:"input error text"};

export default meta;

