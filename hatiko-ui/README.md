<div align="center">
<img src="./docs/media/Main.png"/>
</div>

<div align="center">
 
![React](https://img.shields.io/badge/React-0088CC?style=for-the-badge&logo=React&logoColor=white) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) 
![Css-Modules](https://img.shields.io/badge/Css--Modules-663399?style=for-the-badge&logo=css-modules&logoColor=white) \
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=Vitest&logoColor=white)
![Testing library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=TestingLibrary&logoColor=white) 
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)

</div>





## Hatiko-UI Docs 📙

- [Installation](#installation)  
- [Components List](#components)  
- [Examples](#examples)  
- [Themes](#themes)  
- [CLI](#cli)  


</br>


<div>
 **Hatiko-UI** is a library of UI ready components for React. It contains components as well as styles that are expressed using css modules. In addition, there is a CLI that allows you not to pull everything into the project, but only the necessary part. The main feature is that the components are not imported directly from the library, but a folder with ready components is created. Thanks to this you can always customize them by changing the code and styles and create your own ready-made Ui libraries based on it. 
</div>

</br>

> ℹ️ INFO  
> The library is still in early access.

</br>

<div id="installation">

### 🏠 Installation

1. Create project

```
npm create vite@latest
```
</br >

 2. Library installation (can be skipped)   

```
npm install -D hatiko-ui
```
Install the library as a `dev dependency` and then use the CLI

</br >

```
npm install -g hatiko-ui
```
You can install the library globally. This way you don't have to install the library in your project all the time

</br >



 3. Using the CLI

```
hatiko-ui add Button
```
Detailed information about all commands can be found in the CLI section

</br >

```
npx hatiko-ui add Button
```
If you don't want to install the library, you can use `npx`

</br >


</div>

</br >


<div id="components">
 
### 📃 Component List
 
A table of components is provided below. There are also designations such as:
- Predominant ✅  
- Absent ❌  
- In development 🛠️  
- Covered by tests 🧪  
- Stories 📕  
- Old implementation 🗝️

There are also options for `compound` and `uncompound` components


| Component           | Status | Variants    |Availability|
|---------------------|--------|-------------|------------|
| **Button**          | ✅    |  `Uncompound` \| `Compound` | 🧪📕|
| **Input**          | ✅    |  `Uncompound` \| `Compound`| 🧪📕|
| **Textarea**          | ✅    |  `Uncompound` \| `Compound`|🧪📕|
| **Checkbox**          | ✅    |  `Uncompound` \| `Compound` | 🧪📕|
| **Radio**          | ✅    |  `Uncompound`\| `Compound` |🧪📕|
| **Modal**          | ✅    |  `Uncompound` \| `Compound`| 🧪📕|
| **Drawer**          | ✅    |  `Uncompound` \| `Compound` |🧪📕 |
| **Badge**          | ✅    |  `Uncompound` | 🧪📕|
| **Select**          | ✅    |  `Uncompound` \| `Compound` |🧪📕 |
| **Dropdown**          | ✅    |  `Uncompound`\| `Compound` |🧪📕|
| **Typography**          | ✅    |  `Uncompound` |🧪📕 |
| **Linkify**          | ✅    |  `Uncompound` |🧪📕 |
| **Confirm**          | ✅    |  `Uncompound`\| `Compound` |🧪📕|
| **Accordion**          | ✅    |  `Uncompound`\| `Compound` |🧪📕 |
| **Progressbar**          | ✅    |  `Uncompound`\| `Compound` |🧪📕|
| **Range**          | ✅    |  `Uncompound`\| `Compound🗝️` |🧪📕 |
| **Breadcrumbs**          | ✅    |  `Uncompound`\| `Compound` |🧪📕 |
| **Pagination**          | ✅    |  `Uncompound`\| `Compound` |🧪📕 |
| **FileUpload**          | ✅    |  `Uncompound` |🧪📕|
| **ImagePopup**          | ✅    |  `Uncompound` |🧪📕|
| **Tooltip**          | ✅    |  `Uncompound` |🧪📕|
| **InputOTP**          | ✅    |  `Uncompound` |🧪📕|
| **Toast**          | ✅    |  `Uncompound` |🧪📕|
| **Avatar**          | ✅    |  `Uncompound` |🧪📕|
| **Switch**          | ✅    |  `Uncompound` |🧪📕|
| **Navigation Menu**          | ✅   | `Uncompound`\| `Compound` |🧪📕|
| **Tabs**          | ✅    |  `Uncompound` |🧪📕|
| **Table**          | ✅    |  `Uncompound`\| `Compound` |🧪📕|


</div>

</br>

<div id="examples">

### 📚 Examples
Here are examples of using components with descriptions of their props. Each component has several use cases, depending on which props it contains.


<details>
</br>
<summary>Uncompound components</summary>
<details>
</br>
<summary>Button</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| Children    |  `primary` \| `outline` | true |
| variant    |  `primary` \| `outline` | true |
| startIcon   |  `ReactNode` | false|
| endIcon   |  `ReactNode` | false|
| loading   |  `ReactNode` | false|
| ...props   |  `button props` | false|

</br>


```javascript
      <Button
          variant='primary'
          onClick={onAddTask}
          endIcon={<PluseIcon />}
          disabled
      >
         Your text...
      </Button>
```

</br>

</details>


<details>
</br>
<summary>Input</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | compulsory |
|----------------|-----|---------------|
| variant    |  `primary` \| `outline` | true |
| label |  `string` | false|
| error   |  `string` | false|
| endIcon   |  `ReactNode` | false|
| ...props   |  `input props` | false|

</br>


```javascript
      <Input
          variant='primary'
          onChange={handleValue}
          label="username"
          error="This field must be filled in"
      />
```

</br>
</details>




<details>
</br>
<summary>Textarea</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| variant    |  `primary` \| `outline` | true |
| label |  `string` | false|
| error   |  `string` | false|
| ...props   |  `input props` | false|

</br>


```javascript
      <Textarea
          variant='primary'
          onChange={handleValue}
          label="About us"
          error="This field must be filled in"
      />
```

</br>
</details>

<details>
</br>
<summary>Checkbox</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| label |  `string` | false|
| className   |  `string` | false|
| getCheckboxState   |  `(state: boolean) => void` | false|
| ...props   |  `input props` | false|

</br>


```javascript
      <Checkbox
          label={data.name}
          className="checkbox_custom"
          getCheckboxState={onActiveCheckbox}
      />
```

- **getCheckboxState** - function that returns boolean type, depending on the checkbox activity

</br>
</details>

<details>
</br>
<summary>Modal</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children |  `ReactNode` | true|
| classNameOverlay   |  `string` | false|
| classNameBody   |  `string` | false|
| title   |  `string` | false|
| closeBtn   |  `boolean` | false|
| isOpen   |  `boolean` | true|
| closeModal   |  `() => void` | true|
| lazy  |  `boolean` | false|

</br>


```javascript
      <Modal
          isOpen={isOpenModal}
          closeModal={onCloseModal}
          title="Active users list"
          lazy
      >
          <UserList />
          ...
      </Modal>
```

- **lazy** - a component with this parameter will not be embedded in the tree house during rendering until the component is processed

</br>
</details>

<details>
</br>
<summary>Drawer</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children |  `ReactNode` | true|
| classNameOverlay   |  `string` | false|
| classNameBody   |  `string` | false|
| title   |  `string` | false|
| closeBtn   |  `boolean` | false|
| isOpen   |  `boolean` | true|
| closeDrawer   |  `() => void` | true|
| lazy  |  `boolean` | false|

</br>


```javascript
      <Drawer
          isOpen={isOpenModal}
          closeDrawer={onCloseDrawer}
          title="Active users list"
          lazy
      >
          <UserList />
          ...
      </Drawer>
```

- **lazy** - a component with this parameter will not be embedded in the tree house during rendering until the component is processed

</details>


<details>
</br>
<summary>Badge</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| variant |  ![Success](https://img.shields.io/badge/-success-35a94e?style=social-square)  \|  ![Error](https://img.shields.io/badge/-error-D53636?style=social-square) \| ![Pending](https://img.shields.io/badge/-pending-ECBB1E?style=social-square) | true|
| text   |  `string` | false|
| className   |  `string` | false|
</br>


```javascript
      <Badge
          text={data.orderStatus}
          variant="success"
      />
```

</br>

</details>

<details>
</br>
<summary>Select</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| items | `string[]`   | true|
| classNameMenu   |  `string` | false|
| classNameShowBar   |  `string` | false|
| getActiveItem   |  `(value: string) => void` | false|

</br>


```javascript
      <Select
          items={["Item 1", "Item 2", "Item 3", "Item 4"]}
          classNameShowBar="select_bar"
          getActiveItem={onGetActiveItem}
      />
```

</br>
</details>

<details>
</br>
<summary>Dropdown</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| items | `Array<{link:string, text:string, id:number \| string}>`   | true|
| title   |  `string` | true|
| classNameMenu   |  `string` | false|
| classNameShowBar   |  `string` | false|

</br>


```javascript
      <Drowdown
          title="Food menu"
          items={[
            {
                id:1,
                text:"Pizzas",
                link:"/menu/pizzas"
            },
            {
                id:2,
                text:"Desserts",
                link:"/menu/desserts"
            }
          ]}
          classNameShowBar="dropdown_bar"
      />
```

</br>
</details>


<details>
</br>
<summary>Typography</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| variant   |  `regular_16` \| `medium_16` \| `bold_16` \| `regular_24` \| `medium_24` \| `bold_24` | true|
| tag   |  `h1` \| `h2` \| `h3` \| `h4` \| `h5` \| `h6` \| `div` \| `p` \| `span`| true|

</br>


```javascript
      <Typography
          variant="bold_24"
          tag="h1"
      >
          Title typography
      </Typography>
```

</br>
  
</details>

<details>
</br>
<summary>Linkify</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `string`   | true|

</br>


```javascript
      <Linkify>
          Go to the website: https://github.com/Meow-Double
      </Linkify>
```
- **Linkify** - a component that accepts text, and if links are encountered in the text, they will be replaced by an html tag `<a href=“...”>...</a>`


</br>
</details>


<details>
</br>
<summary>Linkify</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| title | `string`   | true|
| classNameOverlay | `string`   | false|
| classNameBody | `string`   | false|
| getAnswer | `(answer: boolean) => void`   | true|
| isOpen | `boolean`   | true|
| closeWindow | `() => void`   | true|
| lazy | `boolean`   | false|

</br>


```javascript
      <Confirm 
            title="Do you use a hatiko-ui?"
            isOpen={isOpen}
            closeWindow={closeWindow}
            getAnswer={onGetAnswer}
            lazy
      />
```

</br>
  
</details>


<details>
</br>
<summary>Accordion</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| items | `Array<{title:string, text:string, id:number \| string }>`   | true|
| classNameText | `string`   | false|
| classNameTitle | `string`   | false|
| toggle | `boolean`   | false|

</br>

```javascript
      <Accordion 
             items={[
                {
                id:1,
                title:"What is hatiko-ui?",
                text:"This is an unpopular ui component library for react, which is designed to make it easier to write your own ui components and speed up the development process."
                },
                {
                id:2,
                title:"Desserts",
                text:"/menu/desserts"
                }
            ]}
            classNameTitle="accrodion_class"
            toggle
      />
```
- **toggle** - allows you to not close previous accordion tabs that have been opened

</br>
  
</details>


<details>
</br>
<summary>Progressbar</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| progress | `number`   | true|
| title | `string`   | false|
| displayProgress | `boolean`   | false|

</br>

```javascript
      <Progressbar
            progress={45}
            title="Test covered"
            displayProgress
      />
```
- **displayProgress** - displays progress percentages

</br>

</details>


<details>
</br>
<summary>Range</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)



|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| defaultValue | `number`   | false|
| min | `number`   | false|
| max | `number`   | false|
| step | `number`   | false|
| getCurrentValue | `(value: number) => void`   | false|

</br>


```javascript
      <Range
            defaultValue={50}
            step={10}
            getCurrentValue={onGetValue}
      />
```
- **getCurrentValue** - gets the current value of range
- **step** - default:`1`
- **min** - default:`1`
- **max** - default:`100`

</br>

</details>

<details>
</br>
<summary>Breadcrumbs</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| items | `Array<{label:string, path:string}>`   | true|
| sign | `number`   | false|

</br>


```javascript
      <Breadcrumbs
            items={[
                  {
                        label:"Menu",
                        path:"/menu",
                  },
                  {
                        label:"pizza",
                        path:"/menu/pizza"
                  }
            ]}
            sign="/"
      />
```
- **sign** - default:`/`

> ℹ️ INFO
> For this component you need to install the library `react-router-dom`

</br>
</details>



<details>
</br>
<summary>Pagination</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| page | `number`   | true|
| totalPage | `number`   | true|
| siblings | `number`   | true|
| setPages | `(value: number) => void`   | true|

</br>

```javascript
      <Pagination
            page={4}
            totalPage={10}
            siblings={1}
            setPages={(value) => setValue(value)}
      />
```
- **page** - сurrent page (active page)
- **totalPage** - total number of pages 
- **siblings** - range of visible pagination pages
- **setPages** - a function that takes as an argument a value - the page that will be changed (most often useState)


> ℹ️ INFO  
> Built-in utilities are used, don't forget to add them to the project when you use this component

</br>

</details>


<details>
</br>
<summary>FileUpload</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| getFiles | `number`   | true|
| className | `number`   | false|
| fileAccept | `number`   | false|



</br>

```javascript
      <FileUpload
            className="upload_class"
            fileAccept=".png, .jpg, .jpeg"
            setPages={(files) => setFiles(files)}
      />
```
- **fileAccept** - specify, comma separated, the file formats that will be allowed to be selected

</br>

</details>


<details>
</br>
<summary>ImagePopup</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| images | `string[]`   | true|
| isOpen | `boolean`   | true|
| closePopup | `() => void`   | true|
| classNameOverlay | `string`   | false|
| classNameImages | `string`   | false|

</br>

```javascript
      <ImagePopup
            images=[ImageFirst, ImageSecond, ImageThird]
            isOpen={isOpen}
            closePopup={onClosePopup}
            classNameImages="images_class"
      />
```

</br>

</details>


<details>
</br>
<summary>Tooltip</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReacNode`   | true|
| title | `string`   | true|
| className | `() => void`   | false|

</br>

```javascript
      <Tooltip
            title="It's a tooltip component"
            isOpen={isOpen}
      >
            Tooltip component
      </Tooltip>
```

</br>

</details>


<details>
</br>
<summary>InputOTP</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| getValue | `(value: string) => void`   | true|
| length | `number`   | false|
| className | `string`   | false|


</br>

```javascript
      <InputOTP
            className="input-otp_class"
            getValue={getInputValue}
            length={6}
      />
```

</br>

</details>


<details>
</br>
<summary>Toast</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| toastList | `Array<ToastListTypes>`   | true|
| clearToasts | `(toasts: ToastListTypes[]) => void`   | true|
| position | `PositionTypes`   | false|
| durationDelete | `number`   | false|

**Types**

```typescript
      type ToastVariants = 'success' | 'danger' | 'info' | 'warning';

      type PositionTypes = 'bottom-right';

      type ToastListTypes = {
            id: number;
            title?: string;
            description: string;
            variant: ToastVariants;
      };

```

</br>

**Toast**

```javascript
      <Toast
            toastList={[{
                  id:1,
                  variant:"success",
                  description:"This is a toast component"
            }]}
            clearToasts={getInputValue}
            durationDelete={3000}
      />
```

</br>
- **durationDelete** - The default will be 2000 milliseconds
</details>




<details>
</br>
<summary>Avatar</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| path | `string`   | true|

</br>

```javascript
      <Avatar path="./hatiko-ui/avatar.png" />
```

</br>
- **path** - Path to the image file
</details>


<details>
</br>
<summary>Switch</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| getState | `(value: boolean) => void`   | false|
| className | `string`   | false|
| checked | `boolean`   | false|

</br>



```javascript
      <Switch getState={value => setState(value)} checked />
```

</details>


<details>
</br>
<summary>Navigation Menu</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| items | `NavigationMenuItem[]`   | true|
| title | `string`   | true|
| className | `string`   | false|

**Types**

```typescript
      type NavigationMenuItem = {
            id: number | string;
            text: string;
            path: string;
      };
```

</br>

**NavigationMenu**


```javascript
      <NavigationMenu
            items={[
                  {
                        id:1,
                        text:"item1",
                        path:"/item1"
                  },
                     {
                        id:2,
                        text:"item2",
                        path:"/item2"
                  },
                     {
                        id:2,
                        text:"item2",
                        path:"/item2"
                  }
            ]} 
       />
```

</details>

<details>
</br>
<summary>Tabs</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)




|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| schema | `T`   | true|
| className | `string`   | false|
| classNameContent | `string`   | false|

**Types**

```typescript
      export interface TabsProps<T> {
            schema: T;
            className?: string;
            classNameContent?: string;
      }

      //T extends Record<String, ReactNode>
```

</br>

**Tabs**


```javascript
      <Tabs
            items={{
                  hatikoUi:"This library is hatikoUI",
                  Author:"This is text about author",
            }} 
       />
```

</details>



<details>
</br>
<summary>Table</summary>

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/);
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!);



|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| schema | `T`   | true|
| className | `string`   | false|

**Types**

```typescript
      export interface TableProps<T> {
            schema: T;
            className?: string;
      }

      //T extends Record<String, ReactNode[]>
```

</br>

**Tabs**


```javascript
      <Table
            items={{
                  row1:["column1", 2, 3],
                  row2:["column1", null, "column3"],
                  row3:["column1", "column2", 2]
            }} 
       />
```

</details>
</details>


<!-- --------------------------------------------------------------------------- -->
<!-- --------------------------------------------------------------------------- -->


<details>
</br>
<summary>Compound components</summary>

<details>
</br>
<summary>Button</summary>

<details>
</br>
<summary>ButtonCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| variant | `ButtonPropsVariants`   | true|
| ...props   |  `button props` | false|

**Types**

```typescript
      type ButtonPropsVariants = 'primary' | 'outline';

      interface ButtonProps extends ComponentProps<'button'> {
            children: ReactNode;
            variant: ButtonPropsVariants;
      }
```

</details>

<details>
</br>
<summary>ButtonIcon</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| icon | `ReactNode`   | true|

**Types**

```typescript
      interface ButtonIconProps {
            icon: ReactNode;
      }
```

</details>


</br>

**Button Example 1**


```javascript
      <ButtonCompound>
            <span>Search</span>
            <ButtonIcon icon={<SearchIcon />}>
      </ButtomCompound>
```
**Button Example 2**

```javascript
      <ButtonCompound>
            <ButtonIcon icon={<FindIcon />}>
            <span>Find</span>
      </ButtomCompound>
```
**Button Example 3**

```javascript
      <ButtonCompound>
           loading...
      </ButtomCompound>
```

</details>


<!-- --------------Input Compound------ -->

<details>
</br>
<summary>Input</summary>

<details>
</br>
<summary>InputCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| ...props   |  `label props` | false|

**Types**

```typescript
      interface InputCompoundProps extends ComponentProps<'label'> {
            children: ReactNode;
      }
```

</details>

<details>
</br>
<summary>InputItem</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| variant | `InputVariants`   | true|
| error | `boolean`   | false|
| ...props   |  `input props` | false|

**Types**

```typescript
      type InputItemVariants = 'primary' | 'outline';

      interface InputItemProps extends ComponentProps<'input'> {
            variant: InputItemVariants;
            error?: boolean;
      }

```

</details>

<details>
</br>
<summary>InputGroup</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| variant | `InputVariants`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface InputGroupProps {
            children: ReactNode;
            className?: string;
      }
```

</details>


<details>
</br>
<summary>InputText</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| text | `string`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface InputTextProps {
            text: string;
            className?: string;
      }
```

</details>

<details>
</br>
<summary>InputErrorTex</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| text | `string`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface InputErrorTextProps {
            text: string;
            className?: string;
      }
```

</details>



</br>

**Input Example 1**

```javascript
      <InputCompound>
            <InputText text="username"/>
            <InputItem error={!!error.message.text} variant="primary"/>
            <InputErrorText text={error.message.text}>
      </InputCompound>
```

**Input Example 2**

```javascript
      <InputCompound>
            <InputGroup>
                  <InputItem variant="outline"/>
                  <SearchIcon />
            </InputGroup>
      </InputCompound>
```

</details>

<!-- ---------------TextareaCompound------------------- -->

<details>
</br>
<summary>Textarea</summary>

<details>
</br>
<summary>InputCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|
| ...props   |  `label props` | false|

**Types**

```typescript
      interface InputCompoundProps extends ComponentProps<'label'> {
            children: ReactNode;
      }
```

</details>

<details>
</br>
<summary>TextareaItem</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| variant | `TextareaItemVariants`   | true|
| ...props   |  `input props` | false|

**Types**

```typescript
      type TextareaItemVariants = 'primary' | 'outline';

      interface TextareaItemProps extends ComponentProps<'textarea'> {
            variant: TextareaItemVariants;
      }
```

</details>


<details>
</br>
<summary>TextareaText</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| text | `string`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface TextareaTextProps {
            text: string;
            className?: string;
      }
```

</details>

<details>
</br>
<summary>TextareaErrorText</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| text | `string`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface TextareaErrorTextProps {
            error: string;
            className?: string;
      }
```

</details>



</br>

**Textarea Example 1**

```javascript
      <TextareaCompound>
            <TextareaText text="about us"/>
            <TextareaItem error={!!error.message.text} variant="primary"/>
      </TextareaCompound>
```

**Textarea Example 2**

```javascript
      <TextareaCompound>
            <TextareaText text="about us"/>
            <TextareaItem error={!!error.message.text} variant="outline"/>
            <TextareaErrorText text={error.message.text}>
      </TextareaCompound>
```

</details>

<!-- ----------------Checkbox-------------------- -->

<details>
</br>
<summary>Checkbox</summary>

<details>
</br>
<summary>CheckboxCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|
| ...props   |  `label props` | false|

**Types**

```typescript
      interface CheckboxCompoundProps extends ComponentProps<'label'> {
            children:ReactNode;
            className?: string;
      }
```

</details>

<details>
</br>
<summary>CheckboxItem</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| getCheckboxState | `(state: boolean) => void`   | true|

**Types**

```typescript
      interface CheckboxItemProps extends ComponentProps<'input'> {
            getCheckboxState: (state: boolean) => void;
      }
```

</details>


<details>
</br>
<summary>CheckboxText</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| text | `string`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface CheckboxTextProps {
            text: string;
            className?: string;
      }
```

</details>

</br>

**Checkbox Example 1**

```javascript
      <CheckboxCompound>
            <CheckboxItem getCheckboxState={getValue}/>
      </CheckboxCompound>
```

**Checkbox Example 2**

```javascript
       <CheckboxCompound>
            <CheckboxItem getCheckboxState={getValue}/>
            <CheckboxText text="checkbox label"/>
      </CheckboxCompound>
```

</details>


<!-- --------------Radio----------------------- -->


<details>
</br>
<summary>Radio</summary>

<details>
</br>
<summary>RadioCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|
| name   |  `string` | false|

**Types**

```typescript
      interface RadioCompoundProps {
            children: ReactNode;
            className?: string;
            name?: string;
      }     
```

</details>

<details>
</br>
<summary>RadioTitle</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| title | `string`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface RadioTitleProps {
            title: string;
            className?: string;
      }
```

</details>


<details>
</br>
<summary>RadioItem</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| type | `radio`   | false|
| ...props | `input props`   | false|

**Types**

```typescript
      type RadioItemProps = ComponentProps<'input'>;
```
</details>

</br>

**Radio Example 1**

```javascript
      <RadioCompound>
            <RadioItem />
      </RadioCompound>
```

**Radio Example 2**

```javascript
        <RadioCompound>
            <RadioItem />
            <RadioTitle title="Radio element" />
      </RadioCompound>
```

</details>

<!-- -----------------Modal------------- -->
<details>
</br>
<summary>Modal</summary>

<details>
</br>
<summary>ModalCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| classNameOverlay | `string`   | false|
| classNameBody | `string`   | false|
| isOpen   |  `boolean` | true|
| closeModal   |  `() => void` | true|
| lazy   |  `boolean` | false|

**Types**

```typescript
      interface ModalCompoundProps {
            children: ReactNode;
            classNameOverlay?: string;
            classNameBody?: string;
            isOpen: boolean;
            closeModal: () => void;
            lazy?: boolean;
      }   
```

</details>

<details>
</br>
<summary>ModalHeader</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface ModalHeaderProps {
            children: ReactNode,
            className?:string
      }
```

</details>


<details>
</br>
<summary>ModalTitle</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| title | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface ModalTitleProps {
            title: ReactNode,
            className?:string;
      }
```
</details>

<details>
</br>
<summary>ModalContent</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface ModalContentProps {
            children: ReactNode;
            className?:string;
      }
```
</details>

<details>
</br>
<summary>ModalCloseBtn</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| className | `string`   | false|

**Types**

```typescript
      interface ModalCloseBtnProps {
            className?:string;
      }
```
</details>
</br>

**Moda Example 1**

```javascript
      <ModalCompound 
            isOpen={isOpen} 
            closeModal={onCloseModal}
            classNameBody="modal_body"
            lazy
      >
            <ModalContent>
                  ...content
            </ModalContent>
      </ModalCompound>
```

**Moda Example 2**

```javascript
      <ModalCompound 
            isOpen={isOpen} 
            closeModal={onCloseModal}
      >
            <ModalHeader>
                  <ModalTitle title="modal_title" />
                  <ModalCloseBtn />
            </ModalHeader>
            <ModalContent>
                  ...content
            </ModalContent>
      </ModalCompound>
```

</details>


<!-- -----------------Drawer------------- -->

<details>
</br>
<summary>Drawer</summary>

<details>
</br>
<summary>DrawerCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| classNameOverlay | `string`   | false|
| classNameBody | `string`   | false|
| isOpen   |  `boolean` | true|
| closeDrawer   |  `() => void` | true|
| lazy   |  `boolean` | false|

**Types**

```typescript
      export interface DrawerCompoundProps {
            children: ReactNode
            classNameOverlay?: string;
            classNameBody?: string;
            isOpen: boolean;
            closeDrawer: () => void;
            lazy?: boolean;
      }
```

</details>

<details>
</br>
<summary>DrawerHeader</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface DrawerHeaderProps {
            children: ReactNode,
            className?:string
      }
```

</details>


<details>
</br>
<summary>DrawerTitle</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| title | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface DrawerTitleProps {
            title: ReactNode,
            className?:string;
      }
```
</details>

<details>
</br>
<summary>DrawerContent</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface DrawerContentProps {
            children: ReactNode;
            className?:string;
      }
```
</details>

<details>
</br>
<summary>DrawerCloseBtn</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| className | `string`   | false|

**Types**

```typescript
      interface DrawerCloseBtnProps {
            className?:string;
      }
```
</details>
</br>

**Drawer Example 1**

```javascript
      <DrawerCompound 
            isOpen={isOpen} 
            closeDrawer={onCloseDrawer}
            classNameBody="drawer_title"
            lazy
      >
            <DrawerContent>
                  ...content
            </DrawerContent>
      </DrawerCompound>
```

**Drawer Example 2**

```javascript
      <DrawerCompound 
            isOpen={isOpen} 
            closeDrawer={onCloseDrawer}
      >
            <DrawerHeader>
                  <DrawerTitle title="drawer_title" />
                  <DrawerCloseBtn />
            </DrawerHeader>
            <DrawerContent>
                  ...content
            </DrawerContent>
      </DrawerCompound>
```

</details>



<!-- -----------------Select------------- -->

<details>
</br>
<summary>Select</summary>

<details>
</br>
<summary>SelectCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| classNameShowBar | `string`   | false|
| classNameMenu | `string`   | false|

**Types**

```typescript
      interface SelectCompoundProps {
            children: ReactNode;
            classNameShowBar?: string;
            classNameMenu?: string;
      }
```

</details>

<details>
</br>
<summary>SelectItem</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface SelectItemProps {
            children: string;
            className?: string;
      }
```

</details>

</br>

**Select Example 1**

```javascript
      <SelectCompound 
            classNameShowBar="select_bar"
      >
         <SelectItem>Item 1</SelectItem > 
         <SelectItem>Item 2</SelectItem > 
         <SelectItem>Item 3</SelectItem > 
      </SelectCompound>
```

</details>


<!-- -----------------Dropdown------------- -->


<details>
</br>
<summary>Dropdown</summary>

<details>
</br>
<summary>DropdownCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| classNameShowBar | `string`   | false|
| classNameMenu | `string`   | false|
| title | `string`   | true|

**Types**

```typescript
      interface DropdownCompoundProps {
            children: ReactNode;
            title: string;
            classNameShowBar?: string;
            classNameMenu?: string;
      }
```

</details>

<details>
</br>
<summary>DropdownItem</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| path | `ReactNode`   | true|
| text | `string`   | true|

**Types**

```typescript
      interface DropdownItemProps {
            path: string;
            text: string;
      }
```

</details>

</br>

**Dropdown Example 1**

```javascript
      <DropdownCompound 
            classNameShowBar="select_bar"
      >
         <DropdownItem path="/item1" text="item1"/> 
         <DropdownItem path="/item2" text="item2"/> 
         <DropdownItem path="/item3" text="item3"/> 
      </DropdownCompound>
```

</details>


<!-- -----------------Confirm------------- -->

<details>
</br>
<summary>Confirm</summary>

<details>
</br>
<summary>ConfirmCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| classNameOverlay | `string`   | false|
| classNameBody | `string`   | false|
| isOpen   |  `boolean` | true|
| lazy   |  `boolean` | false|

**Types**

```typescript
      interface ConfirmCompoundProps {
            children: ReactNode;
            classNameOverlay?: string;
            classNameBody?: string;
            isOpen: boolean;
            lazy?: boolean;
      }
```

</details>

<details>
</br>
<summary>ConfirmTitle</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| title | `string`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface ConfirmTitleProps {
            title: string;
            className?: string;
      }
```

</details>


<details>
</br>
<summary>ConfirmButtonList</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface ConfirmButtonListProps {
            children: ReactNode;
            className?: string;
      }
```
</details>


<details>
</br>
<summary>ConfirmButton</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| type | `ConfirmButtonTypes`   | true|
| text | `string`   | false|
| getAnswer | `(value: boolean) => void`   | true|
| className | `string`   | false|

**Types**

```typescript
      type ConfirmButtonTypes = 'truth' | 'lies';

      interface ConfirmButtonProps {
            type: ConfirmButtonTypes;
            text?: string;
            getAnswer: (value: boolean) => void;
            className?: string;
      }
```
</details>

</br>

**Confirm Example 1**

```javascript
      <ConfirmCompound
            classNameBody="confirm_body"
            isOpen={isOpen}
            lazy
      >
            <ConfirmTitle title="Do you like hatiko-ui?"/>
            <ConfirmButtonList>
                  <ConfirmButton 
                        type="truth" 
                        getAnswer={onGetValue} 
                        text="yes"
                  >
                  <ConfirmButton 
                        type="lies" 
                        getAnswer={onGetValue} 
                        text="yes"
                  >
            </ConfirmButtonList>
      </ConfirmCompound>
```

</details>

<!-- -----------------Accordion------------- -->

<details>
</br>
<summary>Accordion</summary>

<details>
</br>
<summary>AccordionCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface AccordionCompoundProps {
            children: ReactNode;
            className?: string;
      }
```

</details>

<details>
</br>
<summary>AccordionGroup</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| title | `string`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface AccordionGroupProps {
            children: ReactNode;
            title: string;
            className?: string;
      }
```

</details>


<details>
</br>
<summary>AccordionItem</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| title | `string`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface AccordionItemProps {
            title: string;
            className?: string;
      }
```
</details>

</br>

**Accordion Example 1**

```javascript
      <AccordionCompound
            classNameBody="confirm_body"
            isOpen={isOpen}
            lazy
      >
            <AccordionGroup>
                  <AccordionItem title="Select"/>
                  <AccordionItem title="Modal"/>
                  <AccordionItem title="Drawer"/>
            </AccordionGroup>
      </AccordionCompound>
```

</details>

<!-- -----------------Progressbar------------- -->

<details>
</br>
<summary>Progressbar</summary>

<details>
</br>
<summary>ProgressbarCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| progress | `number`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface ProgressbarCompoundProps {
            children: ReactNode;
            progress: number;
            className?: string;
      }
```

</details>

<details>
</br>
<summary>ProgressbarInfoGrouop</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface ProgressbarInfoGrouopProps {
            children: ReactNode;
            className?: string;
      }
```

</details>


<details>
</br>
<summary>ProgressbarLine</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| className | `string`   | false|

**Types**

```typescript
      interface ProgressbarLineProps {
            className?: string;
      }
```
</details>


<details>
</br>
<summary>ProgressbarTitle</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| title | `ReactNode`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface ProgressbarTitleProps {
            title: ReactNode;
            className?: string;
      }
```
</details>

<details>
</br>
<summary>ProgressbarPercent</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| className | `string`   | false|

**Types**

```typescript
      interface ProgressbarPercentProps {
            className?: string;
      }
```
</details>


</br>

**Progressbar Example 1**

```javascript
      <ProgressbarCompound progress={20}>
            <ProgressbarInfoGrouop>
                  <ProgressbarTitle title="progress"/>
                  <ProgressbarPercent />
            </ProgressbarInfoGrouop>
            <PrrogressbarLine />
      </ProgressbarCompound>
```

**Progressbar Example 2**

```javascript
      <ProgressbarCompound progress={20} className="progressbar">
            <PrrogressbarLine />
      </ProgressbarCompound>
```

</details>

<!-- -----------------Range------------- -->

<details>
</br>
<summary>Range</summary>

<details>
</br>
<summary>RangeCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|
| min | `number`   | false|
| max | `number`   | false|
| step | `number`   | false|

**Types**

```typescript
      interface RangeCompoundProps {
            children: ReactNode;
            min?:number;
            max?:number;
            step?:number;
            className?:string
      }
```

</details>

<details>
</br>
<summary>RangeMinText</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| className | `string`   | false|

**Types**

```typescript
      interface RangeMinTextProps {
            className?:string
      }
```

</details>


<details>
</br>
<summary>RangeMaxText</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| className | `string`   | false|

**Types**

```typescript
      interface RangeMaxTextProps {
            className?:string
      }
```
</details>


<details>
</br>
<summary>ProgressbarTitle</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| defaultValue | `number`   | true|
| getCurrentValue | `(value: number) => void`   | true|
| className | `string`   | false|

**Types**

```typescript
      interface RangeLineProps {
            defaultValue?:number;
            getCurrentValue?: (value: number) => void;
            className?:string;
      }
```
</details>

</br>

**Range Example 1**

```javascript
      <RangeCompound min={20} max={2000} step={10}>
            <RangeMinText />
            <RangeLine default={60} getCurrentValue={onGetValue}/>
            <RangeMaxText />
      </RangeCompound>
```

**Range Example 2**

```javascript
        <RangeCompound className="range" >
            <RangeLine getCurrentValue={onGetValue}/>
      </RangeCompound>
```

</details>

<!-- -----------------Breadcrumbs------------- -->


<details>
</br>
<summary>Breadcrumbs</summary>

<details>
</br>
<summary>BreadcrumbsCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|
| sign | `string`   | false|

**Types**

```typescript
      interface BreadcrumbsCompoundProps {
            children: ReactNode;
            sign?: string;
            className?:string;
      }
```

</details>

<details>
</br>
<summary>RangeMinText</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| label | `string`   | true|
| path | `string`   | true|
| active | `boolean`   | false|
| className | `string`   | false|

**Types**

```typescript
      interface BreadcrumbsItem {
            label: string;
            path: string;
            active?: boolean;
            className?:string;
      }
```

</details>

</br>

**Range Example 1**

```javascript
      <BreadcrumbsCompound sign="//">
            <BreadcrumbsItem label="item1" path="/item1"/>
            <BreadcrumbsItem label="item2" path="/item2"/>
            <BreadcrumbsItem label="item3" path="/item3"/>
            <BreadcrumbsItem label="item4" path="/item4" active/>
      </BreadcrumbsCompound>
```

</details>

<!-- -----------------Pagination------------- -->


<details>
</br>
<summary>Pagination</summary>

<details>
</br>
<summary>PaginationCompound</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| className | `string`   | false|
| page | `number`   | true|
| totalPage | `number`   | true|
| siblings | `number`   | true|
| setPages | `(value: number) => void`   | true|

**Types**

```typescript
      interface PaginationCompoundProps {
            children:ReactNode;
            page:number,
            totalPage: number,
            siblings:number
            setPages:(value: number) => void;
            className?:string;
      }
```

</details>

<details>
</br>
<summary>PaginationCells</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| className | `string`   | false|

**Types**

```typescript
      interface PaginationCellsProps{
            className?:string;
      }
```

</details>

<details>
</br>
<summary>PaginationArrow</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| className | `string`   | false|
| direction | `right` |\ `left`   | false|

**Types**

```typescript
      interface PaginationArrowProps {
            direction:"right" | "left";
            className?:string;
      }
```

</details>

<details>
</br>
<summary>PaginationDoubleArrow</summary>

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| className | `string`   | false|
| direction | `right` |\ `left`   | false|

**Types**

```typescript
      interface PaginationArrowProps {
            direction:"right" | "left";
            className?:string;
      }
```

</details>


</br>

**Pagination Example 1**

```javascript
      <PaginationCompound 
            page={currentPage} 
            totalPage={totalPage}
            siblings={3}
            setPages={onGetValue}
            className="pagination"
      >
            <PaginationDoubleArrow  direction="left"/>
            <PaginationArrow direction="left"/>
            <PaginationCells />
            <PaginationArrow direction="right"/>
            <PaginationDoubleArrow  direction="right"/>

      </PaginationCompound>
```

**Pagination Example 2**

```javascript
      <PaginationCompound 
            page={4} 
            totalPage={10}
            siblings={3}
            setPages={onGetValue}
            className="pagination"
      >
            <PaginationArrow direction="left"/>
            <PaginationCells />
            <PaginationArrow direction="right"/>

      </PaginationCompound>
```

</details>

<!-- -----------------Navigation Menu------------- -->

<details>
<summary>Navigation Menu</summary>
</br>
<details>
<summary>NavigationMenuCompound</summary>

| Props      | Types       | Compulsory |
|------------|-------------|------------|
| title      | `string`    | true       |
| children   | `ReactNode` | true       |
| className  | `string`    | false      |

**Types**

```typescript
      interface NavigationMenuCompoundProps {
            children: ReactNode;
            className?: string;
            title: string;
      }
```

</details>

<details>
<summary>NavigationMenuItem</summary>

| Props      | Types       | Compulsory |
|------------|-------------|------------|
| children   | `ReactNode` | true       |
| path      | `string`    | true       |
| className  | `string`    | false      |

**Types**

```typescript
      interface NavigationMenuItemProps {
            children: string;
            path: string;
            className?: string;
      }
```

</details>


</br>

**Navigation Menu Example 1**

```javascript
      <NavigationMenuCompound title="Menu">
            <NavigationMenuItem path="/home">Home</NavigationMenuItem>
            <NavigationMenuItem path="/about">About</NavigationMenuItem>
            <NavigationMenuItem path="/contact">Contact</NavigationMenuItem>
      </NavigationMenuCompound>

```

</details>



<!-- -----------------Table------------- -->

<details>
<summary>Table</summary>
</br>
<details>
<summary>TableCompound</summary>

| Props      | Types       | Compulsory |
|------------|-------------|------------|
| children   | `ReactNode` | true       |
| className  | `string`    | false      |

**Types**

```typescript
      interface TableCompoundProps {
            children: ReactNode;
            className?: string;
      }
```

</details>

<details>
<summary>TableBody</summary>

| Props      | Types       | Compulsory |
|------------|-------------|------------|
| children   | `ReactNode` | true       |
| className  | `string`    | false      |


</details>

<details>
<summary>TableRow</summary>

| Props      | Types       | Compulsory |
|------------|-------------|------------|
| children   | `ReactNode` | true       |
| className  | `string`    | false      |


</details>


<details>
<summary>TableData</summary>

| Props      | Types       | Compulsory |
|------------|-------------|------------|
| children   | `ReactNode` | true       |
| className  | `string`    | false      |


</details>



</br>

**Table Menu Example 1**

```javascript
      <TableData>
            <TableBody>
                  <TableData>
                        <TableRow>
                              Item 1
                        </TableRow>
                        <TableRow>
                              Item 2
                        </TableRow>
                        <TableRow>
                              Item 3
                        </TableRow>
                  </TableData>
                  <TableData>
                        <TableRow>
                              Item 4
                        </TableRow>
                        <TableRow>
                              Item 5
                        </TableRow>
                        <TableRow>
                              Item 6
                        </TableRow>
                  </TableData>
            </TableBody>
      </TableData>

```

</details>


<!-- ---------------------------------- -->


</details>

</br>
</div>


<div id="themes">

### 🦎 Themes

<details>

<summary>Default</summary>

|  Hex color |    Visual |  Naming | 
|----------------|-----|-------|
| `#69974e` |  ![primary](https://img.shields.io/badge/-69974e?style=social-square&link=#!/)  | primary |
| `#617D52` |  ![primary](https://img.shields.io/badge/-617D52?style=social-square&link=#!/)  | primary (70% opacity) |
| `#75a857` |  ![primary](https://img.shields.io/badge/-75a857?style=social-square&link=#!/)  |  primary-light |
| `#90b978` |  ![primary](https://img.shields.io/badge/-90b978?style=social-square&link=#!/)  |  primary-hover | 
| `#90b978` |  ![primary](https://img.shields.io/badge/-90b978?style=social-square&link=#!/)  |  primary-disabled |

</details>

<details>
<summary>Ocean</summary>

|  Hex color |    Visual |  Naming | 
|----------------|-----|-------|
| `#64959E` |  ![primary](https://img.shields.io/badge/-64959E?style=social-square&link=#!/)  | primary |
| `#577680` |  ![primary](https://img.shields.io/badge/-577680?style=social-square&link=#!/)  | primary (70% opacity) |
| `#72a6af` |  ![primary](https://img.shields.io/badge/-72a6af?style=social-square&link=#!/)  |  primary-light |
| `#84c0cb` |  ![primary](https://img.shields.io/badge/-84c0cb?style=social-square&link=#!/)  |  primary-hover | 
| `#8fcad4` |  ![primary](https://img.shields.io/badge/-8fcad4?style=social-square&link=#!/)  |  primary-disabled |

</details>

<details>
<summary>New-York</summary>

|  Hex color |    Visual |  Naming | 
|----------------|-----|-------|
| `#1f1f38` |  ![primary](https://img.shields.io/badge/-1f1f38?style=social-square&link=#!/)  | primary |
| `#2D2C3F` |  ![primary](https://img.shields.io/badge/-2D2C3F?style=social-square&link=#!/)  | primary (70% opacity) |
| `#35355e` |  ![primary](https://img.shields.io/badge/-35355e?style=social-square&link=#!/)  |  primary-light |
| `#434376` |  ![primary](https://img.shields.io/badge/-434376?style=social-square&link=#!/)  |  primary-hover | 
| `#626288` |  ![primary](https://img.shields.io/badge/-626288?style=social-square&link=#!/)  |  primary-disabled |

</details>

<details>
<summary>Classic</summary>


|  Hex color |    Visual |  Naming | 
|----------------|-----|-------|
| `#3b3b3b` |  ![primary](https://img.shields.io/badge/-3b3b3b?style=social-square&link=#!/)  | primary |
| `#3E3D41` |  ![primary](https://img.shields.io/badge/-3E3D41?style=social-square&link=#!/)  | primary (70% opacity) |
| `#4d4c4c` |  ![primary](https://img.shields.io/badge/-4d4c4c?style=social-square&link=#!/)  | primary-light |
| `#636363` |  ![primary](https://img.shields.io/badge/-636363?style=social-square&link=#!/)  | primary-hover | 
| `#878686` |  ![primary](https://img.shields.io/badge/-878686?style=social-square&link=#!/)  | primary-disabled |

</details>

</div>

<br/>


<div id="cli">

### 🚀 CLI 

`hatiko-ui` - includes a command to automatically create components with the required directories and files

- `add <...arguments>` - Adds the uncompound components specified as arguments to the catalog.

**Example**

```javascript
hatiko-ui add Button Input Select
```
<br/>


- `add <...arguments> --compound` - Adds the compound components specified as arguments to the catalog.
(The flag compound indicates that the components will be of the compound type).

**Example**

```javascript
hatiko-ui add Button Input Modal --compound
```
<br/>

> ℹ️ INFO  
> When installing the components, all the necessary folders will be pulled in automatically, except for utils and auxiliary. If you wish, you can delete them, but please note that some components may use this data.

<br/>


- `theme <theme name>` - adds a folder containing the colors of a particular theme.

**Example**

```javascript
hatiko-ui theme ocean
```

> ℹ️ INFO  
> A list of all topics and colors is provided above in the table.


</br>

### 📁 Main catalog: `hatiko-ui`
Contains three main folders:
- `uncompound` – contains the catalogs of the individual components and the file `index.ts`.
- `compound` – contains directories of individual components and a `compound` file of type `index.ts`.
- `auxiliary` – contains all auxiliary components.
- `styles` – includes three files: `index.css`, `reset.css`, `variables.css`.
- `icons` – contains files with icons and `index.ts` to export them.
- `utils` – contains auxiliary functions and utilities.
- `config` – contains everything necessary for `storybook` and `tests`.

```plaintext

uncompound/
│── Button/
│   ├── Button.tsx
│   ├── Button.module.css
│── Input/
│   ├── Input.tsx
│   ├── Input.module.css
│── Modal/
│   ├── Modal.tsx
│   ├── Modal.module.css
│── Linkify/
│   ├── Linkify.tsx
│   ├── Linkify.module.css
...
│── index.ts

compound/
│── Button/
│   ├── Button.tsx
│   ├── Button.module.css
│── Modal/
│   ├── Modal.tsx
│   ├── Modal.module.css
...
│── index.ts

auxiliary/
│── Container/
│   ├── Container.tsx
│   ├── Container.module.css
│── Spinner/
│   ├── Spinner.tsx
│   ├── Spinner.module.css
│── Protal/
│   ├── Protal.tsx
│── index.ts

config/
│── storybook/
│   │── styles/
│   │   │── index.css
│   │── decorators/
│   │   │── RouterDecorator.tsx
│   │── images/
│   │   │── image-1.jpg
│   │   │── image-2.jpg
│   │   │── image-3.jpg
│── test/
│   ├── componentRender.tsx

styles/
│── themes/
│   │── default/
│       ├── variables.css
│── index.css
│── reset.css
│── variables.css

utils/
│── common/
│   ├── range.ts
│   ├── index.ts
│── context/
│   ├── createAccurateContext.ts
│   ├── useAccurateContext.ts
│── pagination/
│   ├── paginationRange.ts
│── index.ts

icons/
│── CloseIcon.tsx
│── SearchIcon.tsx
│── index.ts

```

</br>
 
</div>
