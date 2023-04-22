import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Tic-Tac-Toe</h1>
    <App />
    <div class="footer">Made with ❤ by <a href="https://github.com/SinhaAmrit/tic-tac-toe-two-player/" target="_blank" rel="noopener noreferrer">Amrit Sinha</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="https://tic-tac-toe-single-player.vercel.app/" target="_blank" rel="noopener noreferrer">Try Single Player Mode 🧠</a> </div>
  </React.StrictMode>
);
