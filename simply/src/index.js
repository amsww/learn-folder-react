import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import UseContext from './useContext';
import Main from './Redux/Main';
import { Provider } from 'react-redux';
import reduxStore from "./Redux/Store"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore} >
    <Main />
  </Provider>
);
