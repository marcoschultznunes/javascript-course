import './App.css';
import {store} from './redux/store'
import {Provider} from 'react-redux'
import CakeContainer from './components/CakeContainer';
import CakeContainerHook from './components/CakeContainerHook';
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';
 
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <IceCreamContainer />
        <CakeContainer />
        <CakeContainerHook />
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;
