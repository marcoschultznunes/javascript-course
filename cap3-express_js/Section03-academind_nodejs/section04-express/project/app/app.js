const express = require('express') // We also need to npm install --save express
const app = express()

const http = require('http')

app.use((req, res, next) => {
    console.log('Request received!') /* Will get printed 2x because google also makes a 
    request to favico */
    
    return next() // Next is used to proceed to the next middleware function
})
app.use((req, res, next) => {
    return res.send('<h1>Hello There</h1>') 
    /* Express will set the header content type accordingly(in this case text/html) */
})

const server = http.createServer(app)
server.listen(8083)