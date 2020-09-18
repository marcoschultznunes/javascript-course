const fs = require('fs')

let path_to_file = __dirname + '/hello.txt' // fs takes an absolute param.

//Synchronous => Less recommended
const hi = fs.readFileSync(path_to_file, 'utf-8')
console.log(hi)
console.log()
console.log(typeof hi) // String