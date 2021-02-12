// @ts-nocheck => Linter ignore file

// app.ts
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

let app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

app.use((req, res) => {
    res.send('Hello There!')
})

export default app


// server.ts
import app from './app'
import http from 'http'

const server = http.createServer(app)
server.listen(8083)

export default server


/*
    Thanks to TS, i can now use ES6 import syntax!
*/
