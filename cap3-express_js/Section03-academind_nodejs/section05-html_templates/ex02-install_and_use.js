/*
    npm install --save ejs
*/

// We need to add 2 configurations to app.js
app.set('view engine', 'ejs')
app.set('views', 'app/views') /* Defines the views folder. The path starts off with 
process.cwd(), the directory that npm start is called from. Use console.log(process.cwd()) 
to debug in case of errors with the path.
*/

/*
    Then, we'll change the extension of every view from .html to .ejs
*/

/*
    Then we'll change the way the views are called to res.render(view name, object with the
    passed properties and elements)
*/

// index.js routes
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    return res.status(200).render('index') 
})

module.exports = router


// products routes
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    return res.status(200).render('products')
})
router.get('/create', (req, res, next) => {
    return res.status(200).render('create_product')
})
router.post('/create', (req, res, next) => {
    console.log(req.body)

    return res.redirect('/products')
})

module.exports = router


// Not found function in app.js
app.use((req, res, next) => {
    return res.status(404).render('not_found')
})

/*
    For now, our .ejs files behave just like regular html files. In the next examples we'll 
start passing variables to the files and implementing logic to build the page dinamically
*/