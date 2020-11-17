/*
    We'll now add a function that creates the view path from a filename passed as parameter, 
    using the main_path.js file from the previous example. This will be equivalent to the
    view function from laravel.
*/


/* view.js file */
const path = require('path')
const main_path = require('./main_path')

module.exports = (view_name) => path.join(main_path, 'views', view_name)


/* app.js */
const express = require('express') 
const app = express()

const http = require('http')
const path = require('path')

const view = require('./utils/paths/view')

app.get('/products', (req, res, next) => {
    return res.status(200).sendFile(
        view('products.html')
    ) 
})
app.get('/', (req, res, next) => {
    return res.status(200).sendFile(
        view('index.html')
    ) 
})
app.use((req, res, next) => {
    return res.status(404).sendFile(
        view('not_found.html')
    ) 
})


const server = http.createServer(app)
server.listen(8083)

/* Now our code is more reusable, clean, and easier to read */