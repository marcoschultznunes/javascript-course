/*
    Now we'll add 2 requests to the products router, the GET products/create to access the
create_product.html form, and the POST products/create, which will handle the form action.
*/

/*
    To work with the POST request body, we must use body parser (which must be installed with
NPM) on the app.js file
*/
 
const express = require('express')
const router = express.Router()

const view = require('../utils/paths/view')

router.get('/', (req, res, next) => {
    return res.status(200).sendFile(
        view('products.html')
    ) 
})

// GET, which returns the create product form
router.get('/create', (req, res, next) => {
    return res.status(200).sendFile(
        view('create_product.html')
    )
})

/* The form POST handler, which in this case simply logs the product and redirects to the 
products index */
router.post('/create', (req, res, next) => {
    console.log(req.body)

    return res.redirect('/')
})

module.exports = router