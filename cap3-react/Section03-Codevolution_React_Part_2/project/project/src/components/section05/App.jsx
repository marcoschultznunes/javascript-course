import React, {useReducer} from 'react';
import Navbar from './Navbar';

export const PageContext = React.createContext()
const PageProvider = PageContext.Provider

const initPage = 'Home'

const reducer = (page, action) => {
    switch(action.eff){
        case 'change': return action.page 
        default: return page
    }
}

const App = () => {
    const [page, dispatchPage] = useReducer(reducer, initPage)

    return (  
        <PageProvider value={{page: page, dispatchPage: dispatchPage}}>
            <React.Fragment>
                <Navbar /><br/>
                <h3 className='mg-left'>{page}</h3>
            </React.Fragment>
        </PageProvider>
    );
}
 
export default App;