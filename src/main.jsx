import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreProvider } from './context -and-reducer/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <StoreProvider>
    <App />
  </StoreProvider>
  </StrictMode>
);
