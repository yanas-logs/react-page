import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(<App />);
  } else {
    console.error('Root element not found');
  }
});
