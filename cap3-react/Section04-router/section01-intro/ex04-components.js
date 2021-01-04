import React from 'react'
import { Link, Route } from 'react-router-dom'

import FoodList from './components/FoodList'
import LittleForm from './components/LittleForm'

const App = () => {
    return (  
        <React.Fragment>
            <header>
                <nav className='navbar'>
                    <ul className='links'>
                        <li><Link to="/list">List</Link></li>
                        <li><Link to="/form">Form</Link></li>
                    </ul>
                </nav>
            </header>

            {/* We use the component attribute */}
            <Route path="/list" component={FoodList} />
            <Route path="/form" component={LittleForm} />
            
        </React.Fragment>
    );
}
 
export default App;
