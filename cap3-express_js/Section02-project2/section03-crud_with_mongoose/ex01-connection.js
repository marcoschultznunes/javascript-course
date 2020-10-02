/*
    On app.js:
*/
const mongoose = require('mongoose')

const secrets = require('./secrets/secrets')
mongoose.connect(`mongodb+srv://marcola:${secrets.password}@cluster0.p4xhv.mongodb.net/${secrets.db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}, () => {
    console.log('Connected to database.')
})

// Then, create the secrets file which should look like this:
module.exports = {
    password: 'My Password',
    db: 'My Database'
}
// And then add it to a gitignore file
