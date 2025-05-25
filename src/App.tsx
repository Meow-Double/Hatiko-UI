// import { useState } from 'react';


import { useState } from "react";

import { Modal } from "./library/compound/Modal/Modal";


// import { Button } from './library/compound/Button/Button';
// import { SearchIcon } from './library/icons';
// import { Accordion } from './library/uncompound/Accordion/Accordion';
// import { Checkbox } from './library/uncompound/Checkbox/Checkbox';
// import { Drawer } from './library/uncompound/Drawer/Drawer';
// import { InputOTP } from './library/uncompound/InputOTP/InputOTP';
// import { Tooltip } from './library/uncompound/Tooltip/Tooltip';

// const AccordionItems = [
//   {
//     id: 1,
//     title: 'Hello world 1',
//     text: 'sadd'
//   },
//   {
//     id: 2,
//     title: 'Hello world 1',
//     text: 'sdfdf'
//   },
//   {
//     id: 3,
//     title: 'Hello world 1',
//     text: 'sfdfg'
//   }
// ];

const App = () => {

const [isOpen, setIsOpen] = useState(true)
  
  return (
    <div className='flex_block'>

      {/* <Button variant='outline' onClick={() => setIsOpen(true)}>
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
      <Breadcrumbs /> 
      <Drawer title='Title drawer' isOpen={isOpenDrawer} closeDrawer={() => setIsOpenDrawer(false)}>
        test
      </Drawer> */}
      {/* <Textarea.Wrapper >
        <Textarea.Label label="test"/>
        <Textarea variant="primary"/>
        <Textarea.Error error="error"/>
      </Textarea.Wrapper> */}
      {/* <Dropdown items={["item1", "item2", "item3"]}/> */}
      <Modal closeModal={() => setIsOpen(false)} isOpen={isOpen}>
        <Modal.Header>
          <Modal.Title title="title"/>
          <Modal.CloseBtn />
        </Modal.Header>
        <Modal.Content>
          Modal window
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default App;