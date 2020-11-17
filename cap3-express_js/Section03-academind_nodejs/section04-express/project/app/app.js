const express = require('express') 
const app = express()

const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')

const view = require('./utils/paths/view')

const productRoutes = require('./routes/products')
const indexRoutes = require('./routes/index')


app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(
    path.join(__dirname, 'public')
))


app.use('/products', productRoutes)
app.use('/', indexRoutes)
app.use((req, res, next) => {
    return res.status(404).sendFile(
        view('not_found.html')
    ) 
})


const server = http.createServer(app)
server.listen(8083)