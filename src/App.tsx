import { useState } from 'react';

import { Button, Modal, Typogarphy } from './library/uikit';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex_block'>
      <Button variant='outline' onClick={() => setIsOpen(true)}>
        <Typogarphy tag='h1' variant='regular_16'>
          Click me
        </Typogarphy>
      </Button>
      <Modal lazy classNameBody='modal' isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem enim quo deleniti ipsam eum
        blanditiis ex, exercitationem{' '}
      </Modal>
    </div>
  );
};

export default App;