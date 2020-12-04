import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/button.css';
import './css/form.css';
import './css/list.css';
import reportWebVitals from './reportWebVitals';
import Counter from './components/section01/Counter';
import User from './components/section01/User';
import List from './components/section01/List';
import TitleCounter from './components/section02/TitleCounter';
import TimerController from './components/section02/TimerController';

ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <User />
    <List />

    <TitleCounter />
    <TimerController />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
