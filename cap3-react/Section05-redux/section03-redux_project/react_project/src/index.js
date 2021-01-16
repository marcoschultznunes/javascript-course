import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

import './css/navbar.css';
import './css/index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />  
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
