import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './01_base/01-class 组件';

const root: HTMLElement = document.getElementById('app')!;

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
