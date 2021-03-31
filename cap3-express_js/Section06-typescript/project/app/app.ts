import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import secrets from './secrets'
import connect from './connect'

import bookRoutes from './routes/book'
import errorHandler from './errors/errorHandler'

let app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

app.use('/books', bookRoutes)
app.use(errorHandler)

connect(secrets.user, secrets.password, secrets.db)

export default app
