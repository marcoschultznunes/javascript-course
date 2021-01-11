const Sequelize = require('sequelize')
const { db, user, password } = require('./secrets/secrets')

const sequelize = new Sequelize(db, user, password, {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize
