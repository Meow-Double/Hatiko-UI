import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './styles/index.css';
import './library/assets/styles/variables.css';

const element = document.getElementById('root') as HTMLElement;

const root = createRoot(element);

root.render(<App />);