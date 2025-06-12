// import { useState } from 'react';


import { useState } from "react";

import { Checkbox, CheckboxLabel, CheckboxText } from "./library/compound/Checkbox/Checkbox";
import { 
  Drawer, 
  DrawerCloseBtn, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle } 
  from "./library/compound/Drawer/Drawer";
import { Dropdown, DropdownItem } from "./library/compound/Dropdown/Dropdown";
import { Input, InputErrorText, InputLabel, InputText } from "./library/compound/Input/Input";
import { 
  Range, 
  RangeLine, 
  RangeMaxText, 
  RangeMinText 
} from "./library/compound/Range/Range";
import { SelectItem, SelectWraper } from "./library/compound/Select/Select";
// import { Range } from "./library/uncompound/Range/Range";
import {  Button, Linkify } from "./library/uncompound";
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
const [value] = useState(0)




// const showToast = () => {
//   toastProperties = {
//     id:1,
//     title:"success",
//     description:"This is a success toast component",
//     variant:"success"
//   }
// setList([toastProperties, toastProperties])
// }
  



  return (
    <div className='flex_block'>
      <Button variant="primary" onClick={() => setIsOpen(true)}>onClick</Button>
      <Drawer isOpen={isOpen} closeDrawer={() => setIsOpen(false)}>
        <DrawerHeader>
          <DrawerTitle title="Drawer Compund"/>
          <DrawerCloseBtn />
        </DrawerHeader>
        <DrawerContent>
          Drawer Content
        </DrawerContent>
      </Drawer>
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
      </Textarea.Wrapper> */}~
      <InputLabel>
        <InputText text="test text"/>
        <Input variant="primary" error/>
        <InputErrorText text="this field is required!"/>
      </InputLabel>
      <CheckboxLabel>
        <Checkbox getCheckboxState={(value) => alert(value)}/>
        <CheckboxText text="hello"/>
      </CheckboxLabel>
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
      {/* <Range min={20} max={200} getCurrentValue={onGetValue}/>
      <Progressbar progress={95} title="test titkle" displayProgress/> */}
      {/* <ImagePopup 
        isOpen={isOpen} 
        closePopup={() => setIsOpen(false)} 
        images={[Image1,Image2,Image3 ]}
      /> */}
      {/* <Breadcrumbs items={[{label:"item 1", path:"/"}, {label:"item 2", path:"/"}]}/>
      <Pagination page={page} totalPage={40} siblings={1} setPages={setPage}/>
      <FileUpload getFiles={() => {}}/>
      <Tooltip title="this is test tooltip">
        Hello worl
      </Tooltip>
      <InputOTP getValue={() => {}} />
      <Toast toastList={list} position="bottom_right" clearToasts={setList}/> */}

      {/* <Confirm isOpen>
        <ConfirmTitle title="confirm compound"/>
        <ConfirmButtonList>
          <ConfirmButton type="truth" getAnswer={value => alert(value)}/>
          <ConfirmButton type="lies"getAnswer={value => alert(value)}/>
        </ConfirmButtonList>
      </Confirm> */}
      {/* <Progressbar progress={60}>
        <Progressbar.InfoWrapper>
          <Progressbar.Percent/>
          <Progressbar.Title title="test coverage"/>
        </Progressbar.InfoWrapper>
        <Progressbar.Line/>
      </Progressbar> */}
      {/* <Range min={0} max={200} getCurrentValue={onGetValue}/> */}
      {/* <Switch />
      <RadioCompound name="test1">
        <RadioItem value="A"/>
        <RadioTitle title="test"/>
      </RadioCompound>
      <RadioCompound name="test1">
        <RadioItem value="AB"/>
        <RadioTitle title="test 2"/>
      </RadioCompound> */}
      {/* <NavigationMenu 
        title="test" 
        items={[{id:1, text:"test", path:"#!"}, {id:1, text:"test", path:"#!"}]}
      /> */}
      {/* <NavigationMenu title="items">
        <NavigationMenuItem path="#!">item 1</NavigationMenuItem>
        <NavigationMenuItem path="#!">item 2</NavigationMenuItem>
        <NavigationMenuItem path="#!">item 3</NavigationMenuItem>
        <NavigationMenuItem path="#!">item 4</NavigationMenuItem>
      </NavigationMenu>
      <Table>
        <TableBody>
          <TableRow>
            <TableData>hello</TableData>
            <TableData>hello2</TableData>
            <TableData>hello3</TableData>
          </TableRow>
             <TableRow>
            <TableData>hello</TableData>
            <TableData>hello2</TableData>
            <TableData>hello3</TableData>
          </TableRow>
        </TableBody>
      </Table> */}
      <Range >
        <RangeLine />
        <RangeMinText />
        <RangeMaxText />
      </Range>
      <Dropdown title="items">
        <DropdownItem path="s" text="s"/>
        <DropdownItem path="s" text="SD"/>
        <DropdownItem path="d" text="dff"/>
      </Dropdown>
      <SelectWraper>
        <SelectItem>item1</SelectItem>
        <SelectItem>item2</SelectItem>
      </SelectWraper>
      <span>s</span>
    </div>
  );
};

export default App;