const fs = require('fs')

const cake = {
    eggs: 6,
    milk: 0.5,
    flour: 0.5,
    chocolate: 2
}

const dest_path = __dirname + '/cake.json'

fs.writeFile(dest_path, JSON.stringify(cake), err => {
    if(err){
        console.log(err.code + ' - ' + err.message)
    }
}) // Will create if file not exists