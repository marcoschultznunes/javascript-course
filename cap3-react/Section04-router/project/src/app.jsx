import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Calculate from './components/Calculate'

import FoodList from './components/FoodList'
import LittleForm from './components/LittleForm'
import ProductController from './components/ProductController'

const App = () => {
    return (  
        <React.Fragment>
            <header>
                <nav className='navbar'>
                    <ul className='links'>
                        <li><NavLink to="/hello" exact activeClassName="active-link"> Hello </NavLink></li>
                        <li><NavLink to="/shadow" activeClassName="active-link"> Shadow </NavLink></li>
                        <li><NavLink to="/angel" activeClassName="active-link"> Angel </NavLink></li>
                        <li><NavLink to="/victim" activeClassName="active-link"> Victim </NavLink></li>
                        <li><NavLink to="/list" activeClassName="active-link"> List </NavLink></li>
                        <li><NavLink to="/form" activeClassName="active-link"> Form </NavLink></li>
                        <li><NavLink to="/products" activeClassName="active-link"> Products </NavLink></li>
                        <li><NavLink to='/calculate?n1=15&n2=30&op=div' activeClassName="active-link"> Calculate </NavLink></li>
                    </ul>
                </nav>
            </header>

            <Switch>
                <Redirect from='/' exact to='/hello' />
                
                <Route path="/hello" exact>
                    <h1>Hello There</h1>
                </Route>
                <Route path="/angel" exact>
                    <h1>The Angel From My Nightmare</h1>
                </Route>
                <Route path="/shadow" exact>
                    <h1>The Shadow In The Background Of The Morgue</h1>
                </Route>
                <Route path="/victim" exact>
                    <h1>The Unsuspecting Victim</h1>
                </Route>

                <Route path="/list" render={(props) =>  
                    <FoodList {...props} hello='There'/> 
                }/>
                <Route path="/form" component={LittleForm} />

                <Route path="/products" component={ProductController} />

                <Route path="/calculate" component={Calculate} />

                <Route render={() => <h1>Page not found.</h1>} />
            </Switch>
            

        </React.Fragment>
    );
}
 
export default App;
