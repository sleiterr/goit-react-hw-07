// main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store.js';
// modern-normalize
import 'modern-normalize'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
    <App />
    </Provider>
  </StrictMode>,
)
