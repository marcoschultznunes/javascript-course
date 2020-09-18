const fs = require('fs')

const path_to_file = __dirname + '/object.json'

// Asynchronous => more recommended, but not for JSON. Uses a callback
fs.readFile(path_to_file, 'utf-8', (err, body) => {
    const zoo = JSON.parse(body)
    console.log(zoo.zoo.animals[3])
})

// I can require a JSON without using fs => the most recommended way
const zoo = require('./object.json')
console.log(zoo.zoo.animals[0])
