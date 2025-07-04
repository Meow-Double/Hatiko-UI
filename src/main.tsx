import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.tsx';

import './hatiko-ui/assets/styles/index.css';
const element = document.getElementById('root') as HTMLElement;

const root = createRoot(element);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<App />} />
    </Routes>
  </BrowserRouter>
);