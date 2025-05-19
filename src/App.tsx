import { useState } from 'react';

import { Button, Modal, Select, Typogarphy } from './library/uikit';
import { Accordion } from './library/uikit/Accordion/Accordion';
import { Checkbox } from './library/uikit/Checkbox/Checkbox';
import { Drawer } from './library/uikit/Drawer/Drawer';
import { InputOTP } from './library/uikit/InputOTP/InputOTP';
import { Tooltip } from './library/uikit/Tooltip/Tooltip';

const AccordionItems = [
  {
    id: 1,
    title: 'Hello world 1',
    text: 'sadd'
  },
  {
    id: 2,
    title: 'Hello world 1',
    text: 'sdfdf'
  },
  {
    id: 3,
    title: 'Hello world 1',
    text: 'sfdfg'
  }
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const test = (test) => {
    alert(test)
  }

  return (
    <div className='flex_block'>
      <Button variant='outline' onClick={() => setIsOpen(true)}>
        <Typogarphy tag='h1' variant='regular_16'>
          Click me
        </Typogarphy>
      </Button>
      <Button variant='outline' onClick={() => setIsOpenDrawer(true)}>
        click drawer
      </Button>
      <Modal lazy classNameBody='modal' isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem enim quo deleniti ipsam eum
        blanditiis ex, exercitationem{' '}
      </Modal>
      
      <Select items={['1', '2']} />
      <Accordion items={AccordionItems} />
      <Accordion items={AccordionItems} toggle />
      <Checkbox />
      <Checkbox label='text label' />
      <Tooltip title='sdsdfasfdf' />
      <InputOTP getValue={test}/>
      {/* <Breadcrumbs /> */}
      <Drawer title='Title drawer' isOpen={isOpenDrawer} closeDrawer={() => setIsOpenDrawer(false)}>
        test
      </Drawer>
    </div>
  );
};

export default App;