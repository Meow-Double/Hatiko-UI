// import { useState } from 'react';


import { useState } from "react";

import Image1 from "./assets/images/image-1.jpg"
import Image2 from "./assets/images/image-2.jpg"
import Image3 from "./assets/images/image-3.jpg"
import { Breadcrumbs, Button, Linkify } from "./library/uncompound";
import { Dropdown } from "./library/uncompound/Dropdown/Dropdown";
import { FileUpload } from "./library/uncompound/FileUpload/FileUpload";
import { ImagePopup } from "./library/uncompound/ImagePopup/ImagePopup";
import { InputOTP } from "./library/uncompound/InputOTP/InputOTP";
import { Pagination } from "./library/uncompound/Pagination/Pagination";
import { Progressbar } from "./library/uncompound/Progressbar/Progressbar";
import { Range } from "./library/uncompound/Range/Range";
import { Toast, ToastListTypes } from "./library/uncompound/Toast/Toast";
import { Tooltip } from "./library/uncompound/Tooltip/Tooltip";
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
//     title: 'Title 1',
//     text: 'Nulla, tempore veritatis. Nostrum, odit reprehenderit atque maiores eveniet eligendi fugit, quos vel corrupti saepe accusantium consectetur corporis sed nulla a quisquam!'
//   },
//   {
//     id: 2,
//     title: 'Title 2',
//     text: 'Nostrum, odit reprehenderit atque maiores eveniet eligendi fugit, quos vel corrupti saepe accusantium consectetur corporis sed nulla a quisquam!'
//   },
//   {
//     id: 3,
//   title: 'Title 3',
//     text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit!'
//   }
// ];

const App = () => {

const [isOpen, setIsOpen] = useState(false);
const [value, setValue] = useState(0)

const [page, setPage] = useState(1)


const onGetValue = (value: number) => {
setValue(value)
}

const [list, setList] = useState<ToastListTypes[]>([])

// const showToast = () => {
//   toastProperties = {
//     id:1,
//     title:"success",
//     description:"This is a success toast component",
//     variant:"success"
//   }
// setList([toastProperties, toastProperties])
// }

const onClickToast = () => {
  const list:ToastListTypes[] = [
    {
      id:1,
      variant:"success",
      description:"Hello world",
      title:"test"
  },
      {
      id:2,
      variant:"danger",
      description:"Hello world",
      title:"test"
  },
      {
      id:3,
      variant:"info",
      description:"Hello world",
      title:"test"
  },
      {
      id:4,
      variant:"warning",
      description:"Hello world",
  },
  ]

  setList(list)
}

  return (
    <div className='flex_block'>
      <Button variant="primary" onClick={() => setIsOpen(true)}>onClick</Button>
      <Button variant="primary" onClick={onClickToast}>onClick</Button>
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
      <Dropdown 
        title="Food menu" 
        items={[
          {id:1, link:"#!", text:"item 1"}, 
          {id:2, link:"", text:"item 2"}, 
          {id:3, link:"", text:"item 3"}
        ]}
        />
      {/* <Modal closeModal={() => setIsOpen(false)} isOpen={isOpen}>
        <Modal.Header>
          <Modal.Title title="title"/>
          <Modal.CloseBtn />
        </Modal.Header>
        <Modal.Content>
          Modal window
        </Modal.Content>
      </Modal> */}
      <Linkify>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Delectus aut repellat earum quod aliquid soluta ad,
        rem recusandae quam https://github.com/ voluptatem doloribus praesentium distinctio 
        deleniti dignissimos, cumque porro? Quasi, maiores nisi.</Linkify>
      {/* <Confirm 
        lazy 
        title="Do you want to use library?" 
        classNameBody="container" 
        getAnswer={onAnswer} 
        closeWindow={() => setIsOpen(false)} 
        isOpen={isOpen}/> */}
      {/* <Accordion items={AccordionItems} toggle /> */}
      {/* <Pagination allPageCount={15} visibalPageCount={3}/> */}
      <div style={{color:"#ddd", fontSize:"20px"}}>{value}</div>
      <Range min={20} max={200} getCurrentValue={onGetValue}/>
      <Progressbar progress={95} title="test titkle" displayProgress/>
      <ImagePopup 
        isOpen={isOpen} 
        closePopup={() => setIsOpen(false)} 
        images={[Image1,Image2,Image3 ]}
      />
      <Breadcrumbs items={[{label:"item 1", path:"/"}, {label:"item 2", path:"/"}]}/>
      <Pagination page={page} totalPage={40} siblings={1} setPages={setPage}/>
      <FileUpload getFiles={() => {}}/>
      <Tooltip title="this is test tooltip">
        Hello worl
      </Tooltip>
      <InputOTP getValue={() => {}} />
      <Toast toastList={list} position="bottom-right" clearToasts={setList}/>
    </div>
  );
};

export default App;