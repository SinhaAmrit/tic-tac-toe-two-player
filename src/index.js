import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Tik-Tak-Toe</h1>
    <App />
    <div className='footer'>Made with ❤ by <a target='_blank' rel='noopener noreferrer' href='https://github.com/SinhaAmrit'>Amrit Sinha</a></div>
  </React.StrictMode>
);