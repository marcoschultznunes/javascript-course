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
