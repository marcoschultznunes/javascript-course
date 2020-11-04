import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import './css/styles.css'

import Hello from './components/Hello'
import { Angel, Shadow, Victim } from './components/Verses';

import Where from './components/Where'

import Email from './components/section03/Email'
import Click from './components/section03/Click'
import Counter from './components/section03/Counter'
import NumberPanel from './components/section03/NumberPanel';
import ObiWan from './components/section03/ObiWan';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Angel />
    <Shadow />
    <Victim />
    <Where />
    <br />

    <Email from="Toni Tortoni" to="Toni du Panetoni" subject="Panetoni">
      <p><i>Toni du Panetoni, por che criaste il Panetoni?</i></p>
    </Email>
    <Email from="Toni du Panetoni" to="Toni Tortoni" subject="RE: Panetoni">
      <p><i>Toni du Tortoni, il criaste il Panetoni por che il soi il Toni du Panetoni.</i></p>
    </Email>

    <Click />
    <br />

    <Counter />
    <br />

    <NumberPanel />
    <br />

    <ObiWan />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
