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
- [CLI](#cli)  


</br>


<div>
 <b>Hatiko-UI</b> is a library of UI ready components for React. It contains components as well as styles that are expressed using css modules. In addition, there is a CLI that allows you not to pull everything into the project, but only the necessary part. The main feature is that the components are not imported directly from the library, but a folder with ready components is created. Thanks to this you can always customize them by changing the code and styles and create your own ready-made Ui libraries based on it. 
</div>

</br>

>ℹ️ INFO  
> The library is still in early access. We are improving it in every possible way, soon we will add tests and stories under the storybook

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

There are also options for compound and uncompound components. And availability of component histories and test coverage


| Component           | Status | Variants    |Availability|
|---------------------|--------|-------------|------------|
| **Button**          | ✅    |  `Uncompound` \| `Compound` | 🧪📕|
| **Input**          | ✅    |  `Uncompound` \| `Compound🛠️`| 🧪📕|
| **Textarea**          | ✅    |  `Uncompound` \| `Compound`|🧪📕|
| **Checkbox**          | ✅    |  `Uncompound` \| `Compound🛠️` | 🧪📕|
| **Modal**          | ✅    |  `Uncompound` \| `Compound`| 🧪📕|
| **Drawer**          | ✅    |  `Uncompound` |📕 |
| **Badge**          | ✅    |  `Uncompound` | 🧪📕|
| **Select**          | ✅    |  `Uncompound` |🧪📕 |
| **Dropdown**          | ✅    |  `Uncompound` |📕|
| **Typography**          | ✅    |  `Uncompound` |🧪📕 |
| **Linkify**          | ✅    |  `Uncompound` |🧪📕 |
| **Confirm**          | ✅    |  `Uncompound` |🧪📕|
| **Accordion**          | ✅    |  `Uncompound` |📕 |
| **Progressbar**          | ✅    |  `Uncompound 🗝️` |🧪📕|
| **Range**          | ✅    |  `Uncompound` |📕 |
| **Breadcrumbs**          | 🛠️    |  `Uncompound` | |
| **InputOTP**          | 🛠️    |  `Uncompound` | |
| **Pagination**          | 🛠️    |  `Uncompound` | |
| **ImagePopup**          | 🛠️    |  `Uncompound` | |
| **Tooltip**          | ❌    |  `Uncompound` | |
| **FileUpload**          | ❌    |  `Uncompound` | |
| **Toast**          | ❌    |  `Uncompound` | |

</div>

</br>

<div id="examples">

### 📚 Examples
Here are examples of using components with descriptions of their props. Each component has several use cases, depending on which props it contains.

#### Button

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


```
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

#### Input

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


```
      <Input
          variant='primary'
          onChange={handleValue}
          label="username"
          error="This field must be filled in"
      />
```

</br>

#### Textarea

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| variant    |  `primary` \| `outline` | true |
| label |  `string` | false|
| error   |  `string` | false|
| ...props   |  `input props` | false|

</br>


```
      <Textarea
          variant='primary'
          onChange={handleValue}
          label="About us"
          error="This field must be filled in"
      />
```

</br>


#### Checkbox

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| label |  `string` | false|
| className   |  `string` | false|
| getCheckboxState   |  `(state: boolean) => void` | false|
| ...props   |  `input props` | false|

</br>


```
      <Checkbox
          label={data.name}
          className="checkbox_custom"
          getCheckboxState={onActiveCheckbox}
      />
```

- <b>getCheckboxState</b> - function that returns boolean type, depending on the checkbox activity

</br>


#### Modal

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


```
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

- <b>lazy</b> - a component with this parameter will not be embedded in the tree house during rendering until the component is processed

</br>


#### Drawer

![Test](https://img.shields.io/badge/-Testing❌-C71D23?style=social-square&link=#!/)
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


```
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

- <b>lazy</b> - a component with this parameter will not be embedded in the tree house during rendering until the component is processed

#### Badge

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| variant |  ![Success](https://img.shields.io/badge/-success-35a94e?style=social-square)  \|  ![Error](https://img.shields.io/badge/-error-D53636?style=social-square) \| ![Pending](https://img.shields.io/badge/-pending-ECBB1E?style=social-square) | true|
| text   |  `string` | false|
| className   |  `string` | false|
</br>


```
      <Badge
          text={data.orderStatus}
          variant="success"
      />
```

</br>


#### Select

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| items | `string[]`   | true|
| classNameMenu   |  `string` | false|
| classNameShowBar   |  `string` | false|
| getActiveItem   |  `(value: string) => void` | false|

</br>


```
      <Select
          items={["Item 1", "Item 2", "Item 3", "Item 4"]}
          classNameShowBar="select_bar"
          getActiveItem={onGetActiveItem}
      />
```

</br>


#### Dropdown

![Test](https://img.shields.io/badge/-Testing❌-C71D23?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)

|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| items | `Array<{link:string, text:string, id:number \| string}>`   | true|
| title   |  `string` | true|
| classNameMenu   |  `string` | false|
| classNameShowBar   |  `string` | false|

</br>


```
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

#### Typography

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `ReactNode`   | true|
| variant   |  `regular_16` \| `medium_16` \| `bold_16` \| `regular_24` \| `medium_24` \| `bold_24` | true|
| tag   |  `h1` \| `h2` \| `h3` \| `h4` \| `h5` \| `h6` \| `div` \| `p` \| `span`| true|

</br>


```
      <Typography
          variant="bold_24"
          tag="h1"
      >
          Title typography
      </Typography>
```

</br>
  
</div>


</br>

#### Linkify

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| children | `string`   | true|

</br>


```
      <Linkify>
          Go to the website: https://github.com/Meow-Double
      </Linkify>
```
- <b>Linkify</b> - a component that accepts text, and if links are encountered in the text, they will be replaced by an html tag `<a href=“...”>...</a>`


</br>


#### Confirm

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


```
      <Confirm 
            title="Do you use a hatiko-ui?"
            isOpen={isOpen}
            closeWindow={closeWindow}
            getAnswer={onGetAnswer}
            lazy
      />
```


</br>
  

#### Accordion

![Test](https://img.shields.io/badge/-Testing❌-C71D23?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| items | `Array<{title:string, text:string, id:number \| string }>`   | true|
| classNameText | `string`   | false|
| classNameTitle | `string`   | false|
| toggle | `boolean`   | false|

</br>

```
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
- <b>toggle</b> - allows you to not close previous accordion tabs that have been opened

</br>
  

#### Progressbar

![Test](https://img.shields.io/badge/-Testing✅-719C17?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)


|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| progress | `number`   | true|
| title | `string`   | false|
| displayProgress | `boolean`   | false|

</br>



```
      <Progressbar
            progress={45}
            title="Test covered"
            displayProgress
      />
```
- <b>displayProgress</b> - displays progress percentages

</br>

</div>


</br>


#### Range

![Test](https://img.shields.io/badge/-Testing❌-C71D23?style=social-square&link=#!/)
![Stories✅](https://img.shields.io/badge/-Stories✅-DD0B78?style=social-square&link=#!)






|  Props |    Types | Compulsory |
|----------------|-----|---------------|
| defaultValue | `number`   | false|
| min | `number`   | false|
| max | `number`   | false|
| step | `number`   | false|
| getCurrentValue | `(value: number) => void`   | false|

</br>


```
      <Progressbar
            defaultValue={50}
            step={10}
            getCurrentValue={onGetValue}
      />
```
- <b>getCurrentValue</b> - gets the current value of range
- <b>step</b> - default:`1`
- <b>min</b> - default:`1`
- <b>max</b> - default:`100`

</br>

</div>


</br>





<div id="cli">


### 🚀 CLI 

`hatiko-ui` - includes a command to automatically create components with the required directories and files

- `add <...arguments>` - Adds the components specified as arguments to the catalog

<b>Examples</b>
```
hatiko-ui add Button Input Select
```

-Always with the components will come the styles folder, which contains the main styles for the components

>ℹ️ INFO
>Depending on the specified components, an icons folder may be created that contains the desired icons

</br>

### 📁 Main catalog: `hatiko-ui`
Contains three main folders:
- `components` – contains the catalogs of the individual components and the file `index.ts`.
- `styles` – includes three files: `index.css`, `reset.css`, `variables.css`.
- `icons` – contains files with icons and `index.ts` to export them.

```plaintext
components/
│── Button/
│   ├── Button.tsx
│   ├── Button.module.css
│── Input/
│   ├── Input.tsx
│   ├── Input.module.css
│── Modal/
│   ├── Modal.tsx
│   ├── Modal.module.css
│── index.ts

styles/
│── index.css
│── reset.css
│── variables.css

icons/
│── CloseIcon.tsx
│── SearchIcon.tsx
│── index.ts
```

</br>
 
</div>
