/* Switch is a component from the react-router-dom package which wraps our routes and stops at 
the  first route that matches the given URL. Switch is also very useful for redirects and 404
pages. */

<Switch>
    {/* Redirect => now the '/' route is redirected to '/hello' */}
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
    
    {/* This 404 page will only be rendered if none of the previous pages are entered */}
    <Route render={() => <h1>Page not found.</h1>} />
</Switch>
