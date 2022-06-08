import React from 'react';
import ReactDOM from 'react-dom/client';
import AreaInput from './components/AreaInput';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WeatherContainer from './screens/WeatherContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
