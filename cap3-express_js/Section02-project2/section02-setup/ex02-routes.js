/* 
    routes.js file for products:
*/
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send('Welcome to the Products service!')
})

module.exports = router


/*
    app.js should be changed to: 
*/
const express = require('express')
const app = express()

const productRoutes = require('./model/products/routes')

app.use('/products', productRoutes) 
/* 
    No more need to put '/products' on every product route.
    
    This is a middleware through which each request will pass. If the request path does not
    match the route (in this case, if it is not '/products') it will move on to the next
    middleware.
*/

module.exports = app