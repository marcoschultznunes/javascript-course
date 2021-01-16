/*
    npm install --save sequelize
    npm install --save mysql2
*/

/* secrets.js => mysql credentials */
module.exports = {
    db: 'academind_sequelize',
    user: 'elmarcola',
    password: 'new-password1#2Ac593L%'
}

/* connection.js */
const Sequelize = require('sequelize')
const { db, user, password } = require('./secrets/secrets')

const sequelize = new Sequelize(db, user, password, {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize

/* 
    This sequelize object can now be used on our models.

    In order for sequelize to create tables automatically, a sync function must be called in 
    app.js
*/

/* On app.js */
const db = require('./connection')

const product_routes = require('./routes/product_routes')
app.use('/products', product_routes)

db.sync().then(result => {
    console.log(result)

    app.use((req, res, next) => {
        res.send('<h1>It just works!</h1>')
    })
}).catch(err => {
    console.log(err)
    app = null
})
