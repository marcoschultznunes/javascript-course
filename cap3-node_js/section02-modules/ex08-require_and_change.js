const a = require('./ex08-changeable_export')

a.increment() // 1
a.increment() // 2
a.increment() // 3

const b = require('./ex08-changeable_export')
console.log(b.counter) // 3

b.increment() // 4
b.increment() // 5

const c = require('./ex08-changeable_export')
console.log(c.counter) // 5

/*
    We can avoid this behavior by making module.exports a factory function.
    This means we can call the function and create a new object was not modified.
*/