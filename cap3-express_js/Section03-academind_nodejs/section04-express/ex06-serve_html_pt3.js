/*
    We'll modify the previous example to get the path to the view from the main file of
    the application.

    To do this, we'll export the path to the main in an utility file
*/

/* main_path.js */
const path = require('path')

module.exports = path.dirname(require.main.filename)

/* app.js */
const express = require('express') 
const app = express()

const http = require('http')
const path = require('path')

const main_path = require('./utils/main_path') // Requiring the path to the main file

app.get('/products', (req, res, next) => {
    return res.status(200).sendFile(
        path.join(main_path, 'views', 'products.html')
    ) 
})
app.get('/', (req, res, next) => {
    return res.status(200).sendFile(
        path.join(main_path, 'views', 'index.html')
    ) 
})
app.use((req, res, next) => {
    return res.status(404).sendFile(
        path.join(main_path, 'views', 'not_found.html')
    ) 
})


const server = http.createServer(app)
server.listen(8083)

/*
    In the next example, we'll improve it even more, by adding a function that returns the
    view path, so that our app.js file looks cleaner
*/