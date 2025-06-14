import { Meta, StoryObj } from '@storybook/react';

import { Accordion, AccordionProps } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion
};

const accordionProps: AccordionProps = {
  items: [
    {
      id: 1,
      title: 'Title 1',
      text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, tempore veritatis. Nostrum, odit reprehenderit atque maiores eveniet eligendi fugit, quos vel corrupti saepe accusantium consectetur corporis sed nulla a quisquam!'
    },
    {
      id: 2,
      title: 'Title 2',
      text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, tempore veritatis. Nostrum, odit reprehenderit atque maiores eveniet eligendi fugit, quos vel corrupti saepe accusantium consectetur corporis sed nulla a quisquam!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, tempore veritatis. Nostrum, odit reprehenderit atque maiores eveniet eligendi fugit, quos vel corrupti saepe accusantium consectetur corporis sed nulla a quisquam!'
    },
    {
      id: 3,
      title: 'Title 3',
      text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, tempore veritatis. Nostrum, odit reprehenderit atque maiores eveniet eligendi fugit, quos vel corrupti saepe accusantium consectetur corporis sed nulla a quisquam!'
    }
  ]
};

type Story = StoryObj<typeof Accordion>;

const AccordionTemplate: Story = { render: (args) => <Accordion {...args} /> };

export const Default = { ...AccordionTemplate };
Default.args = accordionProps;

export const DefaultWithToggle = { ...AccordionTemplate };
DefaultWithToggle.args = { ...accordionProps, toggle: true };

export default meta;