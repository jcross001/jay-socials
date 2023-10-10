import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkModeCtxProvider } from './context/darkModeCtx';
import { AuthCtxProvider } from './context/authCtx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeCtxProvider>
      <AuthCtxProvider>
        <App />
      </AuthCtxProvider>
    </DarkModeCtxProvider>
  </React.StrictMode>
);
