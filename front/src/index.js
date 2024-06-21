import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BottomNav from './components/ui/BottomNav';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/*bottom nav에 따라 바뀌는 본문*/}
      <BottomNav /> {/*bottom nav가 항상 떠있도록 index.js에서 호출*/}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();