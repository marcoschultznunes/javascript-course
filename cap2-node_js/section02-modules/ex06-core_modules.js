/*
    Core modules are built-in Node modules which are not installed by NPM
    and are accessible just by using the require function 
*/

const http = require('http') // Built-in server module

http.createServer((req, res) => {
    res.write('Hello There')
    res.end()
}).listen(8083)