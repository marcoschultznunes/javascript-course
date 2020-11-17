/*
    We'll serve the 3 HTML files using the function res.sendFile(pathName)

    In order to build the path name, we'll use the node path module
*/
const express = require('express') 
const app = express()

const http = require('http')
const path = require('path') // Importing the path module

app.get('/products', (req, res, next) => {
    return res.status(200).sendFile(
        path.join(__dirname, 'views', 'products.html') // __dirname => directory of this file
        // The join function does not use / as in windows uses backward slashes for path     
    ) 
})
app.get('/', (req, res, next) => {
    return res.status(200).sendFile(
        path.join(__dirname, 'views', 'index.html')
    ) 
})
app.use((req, res, next) => {
    return res.status(404).sendFile(
        path.join(__dirname, 'views', 'not_found.html')
    ) 
})


const server = http.createServer(app)
server.listen(8083)

/* 
    In the next example, we'll improve the path handling by creating a utility function that
    provides the path of the entry point of the application (app.js, the file specified as
    main in package.json)
*/