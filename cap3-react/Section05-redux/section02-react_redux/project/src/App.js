import './App.css';
import CakeContainer from './components/CakeContainer';
import {store} from './redux/store'
import {Provider} from 'react-redux'
 
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </div>
  );
}

export default App;
