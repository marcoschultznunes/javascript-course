/*
    npm install --save mongoose

    We should create the database and the collections on mongo compass/atlas. Also, don't forget
    to check the password of the database user.

    Database: Posts. Collections: posts, users.
*/

/*
    We'll create a secrets.js file and a gitignore ignoring it.
    secrets.js:
*/
module.exports = {
    password: 'mypassword',
    db: 'Posts'
}

/* On app.js */
const mongoose = require('mongoose')
const secrets = require('./secrets/secrets')

mongoose.connect(`mongodb+srv://marcola:${secrets.password}@cluster0.p4xhv.mongodb.net/${secrets.db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
})
.then(() => { // Our app's endpoints will be inside this .then
    console.log('Connected to database!')

    app.use((req, res) =>{
        res.send('<h1>Hello There</h1>')
    })
})
.catch(e => {
    console.log('Could not connect to database. ' + e)
})
    
module.exports = app