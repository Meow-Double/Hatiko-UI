import { Meta, StoryObj } from '@storybook/react';

import { FileUpload, FileUploadProps } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'UI/FileUpload',
  component: FileUpload
};

const fileUploadProps: FileUploadProps = {
  getFiles: () => {}
};


type Story = StoryObj<typeof FileUpload>
const FileUploadTemplate: Story = {render: (args) => <FileUpload {...args}/>}

export const Default = {...FileUploadTemplate};
Default.args = fileUploadProps

export default meta;




