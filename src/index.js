import React from 'react';
import { createRoot } from 'react-dom/client'; // импорт библиотек
import App from './App';


const container =  document.getElementById('root');
const root = createRoot(container);

root.render(
  <App counter={10}/>
);

