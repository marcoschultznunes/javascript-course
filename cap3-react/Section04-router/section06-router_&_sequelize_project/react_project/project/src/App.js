import { Route, Switch } from "react-router"
import Navbar from "./components/navbar/Navbar"
import ProductList from "./components/products/ProductList"

const App = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Switch>
                    <Route exact path='/'>
                        Home
                    </Route>
                    <Route exact path='/products' render={(props) => {
                        <ProductList {...props} />
                    }} />
                    <Route render={() => <h2 id='not-found-message'>Page not found.</h2>} />
                </Switch>
            </main>
        </div>
    )
}

export default App;
