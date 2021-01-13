/* store.js */
import {createStore} from 'redux'
import {cakeReducer} from './cakes/cake_reducer'

export const store = createStore(cakeReducer)

/* 
    Now we need to provide the store for the application, we do this in app.js by using a 
component called provider, from the react-redux library. We pass the store as a prop to the 
provider component, similarly to the context API.
*/

/* On app.js */
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

