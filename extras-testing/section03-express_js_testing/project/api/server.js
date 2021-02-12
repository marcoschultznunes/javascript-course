const http = require('http')
const app = require('./app')

const server = http.createServer(app)
server.listen(8083)

module.exports = server
