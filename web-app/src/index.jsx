import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/Homepage';
import AboutReactIndex from './pages/about-react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='Learn-React-In-Arabic'>
      <App>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path='about-us' element={<div>about us</div>} />
          <Route path='contact-us' element={<div>contact us</div>} />
          
          <Route path='terms-of-use' element={<div>terms of use</div>} />
          <Route path='privacy-policy' element={<div>privacy policy</div>} />

          <Route path="about-react" element={<AboutReactIndex />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
