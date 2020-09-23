// In books we'll have the following books.js file:

const express = require('express')
const app = express()

const mongoose = require('mongoose')
const secrets = require('./secrets')

// Get the connect by clicking on connect on atlas and copying the key.
// The password and the db name must be replaced
// DO NOT COMMIT THE PASSWORD TO GITHUB
const connectionKey = "mongodb+srv://marcola:" + secrets.pw + "@cluster0.p4xhv.mongodb.net/" + secrets.db + "?retryWrites=true&w=majority"

mongoose.connect(connectionKey, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}, () => {
    console.log('Connected to the Books database.')
})
// { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false} => Options 
//     to avoid deprecation
// The third param defines a callback to report a success message

app.get('/', (req, res) => {
    res.send('Welcome to the books service')
})

app.listen(8083, () => {
    console.log('Listening on the port 8083.')
})

// We'll also have a secrets file that is git ignored and has the credentials for the connection