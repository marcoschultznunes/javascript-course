import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/button.css';
import './css/form.css';
import './css/list.css';
import './css/navbar.css';
import reportWebVitals from './reportWebVitals';
import Counter from './components/section01/Counter';
import User from './components/section01/User';
import List from './components/section01/List';
import TitleCounter from './components/section02/TitleCounter';
import TimerController from './components/section02/TimerController';
import PostList from './components/section03/PostList';
import PostList2 from './components/section06/PostList2';
import SingleCharacter from './components/section03/SingleCharacter';
import { UserProvider } from './components/section04/UserContext';
import Person from './components/section04/Person';
import Counter2 from './components/section05/Counter2';
import Counter3 from './components/section05/Counter3';
import Counters from './components/section05/Counters';
import App from './components/section05/App';

ReactDOM.render(
  <React.StrictMode>
    <App /><br/>

    <main id='main'>
      <Counter /><br/>
      <User /><br/>
      <List /><br/>

      <TitleCounter /><br/>
      <TimerController /><br/>

      <PostList /><br/>
      <SingleCharacter /><br/>

      <UserProvider value={{name: 'Afonso', surname: 'García'}}>
        <Person />
      </UserProvider><br/>

      <Counter2 /><br/>
      <Counter3 /><br/>
      <Counters /><br/>

      <PostList2 /><br/>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
