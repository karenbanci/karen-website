import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Get the root element
const container = document.getElementById('root');

// Make sure it exists
if (!container) {
  throw new Error('Root element not found');
}

// Create a root
const root = createRoot(container);

// Clear the container first to ensure clean render
if (process.env.NODE_ENV !== 'production') {
  console.log('React version:', React.version);
}

// Render the app - without StrictMode as it's now in App.tsx
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
