/*
    There is a simple way to handle paths in express, which is by passing it as a string to
the first argument of app.use

    res.status(code) => sets the http status code for the response
*/

const express = require('express') 
const app = express()

const http = require('http')

app.get('/hello', (req, res, next) => { 
    return res.status(200).send('<h1>Hello There</h1>') 
})

/* It is very important to use app.get instead of app.use here, since for the app.use 
function, the path '/' filters every incoming request, while for app.get it only filters
the requests with the actual '/' path. */
app.get('/', (req, res, next) => {
    return res.status(200).send('<h1>Welcome to my website!</h1>') 
})
app.use((req, res, next) => {
    return res.status(404).send('<h1>404 - Page not found</h1>') 
})


const server = http.createServer(app)
server.listen(8083)

/*
    Note: if the generic '/' was on top and using app.use, every request would be processed 
    by it and the index message would be returned. Making every single request the index 
    page.
*/

/* 
    app.use is for middlewares such as authentication, external libraries and adding routers
    app.get is for GET requests that return data.
*/