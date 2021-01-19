import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/pages/Homepage';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './redux/categories/categoryActions';
import CategoryProducts from './components/pages/CategoryProducts';

function App() {
    // Fetch categories
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])



    return (
        <React.Fragment>
            <Navbar />

            <Switch>
                <Route path='/' exact component={Homepage} />
                <Route path='/categories/:id/:name' render={(props) => 
                    <CategoryProducts id={props.match.params.id} name={props.match.params.name}/>
                }/>
                <Route>
                    <h1>404 - Page not found!</h1>
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;
