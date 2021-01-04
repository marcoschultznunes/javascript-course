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
*/
