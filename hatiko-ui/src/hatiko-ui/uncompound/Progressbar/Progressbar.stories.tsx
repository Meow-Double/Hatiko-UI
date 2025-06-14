import { Meta, StoryObj } from '@storybook/react';

import { Progressbar, ProgressbarProps } from './Progressbar';

const meta: Meta<typeof Progressbar> = {
  title: 'UI/Progressbar',
  component: Progressbar
};

const progressbarProps: ProgressbarProps = {
  progress: 20
};

type Story = StoryObj<typeof Progressbar>
const ProgressbarTemplate: Story = {render:(args) => <Progressbar {...args}/>}


export const Default = {...ProgressbarTemplate}
Default.args = {...progressbarProps}

export const WithTitle = {...ProgressbarTemplate}
WithTitle.args = {...progressbarProps, title:"Test coverage"}

export const WithProgressDisplay = {...ProgressbarTemplate}
WithProgressDisplay.args = {...progressbarProps, displayProgress: true}

export const Full = {...ProgressbarTemplate}
Full.args = {...progressbarProps, title:"Test coverage", displayProgress: true}

export default meta;


