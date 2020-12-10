/* 
    The usage of both useReducer and useContext together is what React's Redux consists of.
    
    It allows us to have a global state which we pass to the child components through the use 
of context.

    In this example, we'll make a navbar with links which change the page on App.jsx.
*/

/* Changes on index.js */
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
        </main>
    </React.StrictMode>,
    document.getElementById('root')
);


/* App.jsx */
import React, {useReducer} from 'react';
import Navbar from './Navbar';

// Context
export const PageContext = React.createContext()
const PageProvider = PageContext.Provider

// State
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


/* Navbar.jsx */
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    return (  
        <div id='navbar'>
            <ul className='nav-list'>
                <NavLink page='Home' />
                <NavLink page='Products' />
                <NavLink page='Orders' />
            </ul>
        </div>
    );
}
 
export default Navbar;


/* NavLink.jsx */
import React, {useContext} from 'react';
import {PageContext} from './App';

const NavLink = (props) => {
    const {dispatchPage} = useContext(PageContext)

    const {linkPage} = props

    return (  
        <li className='nav-item'>
            <button 
                className='nav-link' 
                onClick={() => dispatchPage({eff: 'change', page: linkPage})}
            >
                {linkPage}
            </button>
        </li>
    );
}
 
export default NavLink;