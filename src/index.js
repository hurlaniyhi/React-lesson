import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/mainScreen'
import Authentication from './components/authentication'
import Payment from './components/Payment'
import ImageCrop from './components/ImageCrop'
import Navigator from './routes/routes'
import {StateProvider} from "./stateManager/manager"

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <Navigator />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
