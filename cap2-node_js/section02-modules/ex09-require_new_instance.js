const a = require('./ex09-new_instance')() //Call it to create the object
a.increment() // 1
a.increment() // 2

const b = require('./ex09-new_instance')()
console.log(b.counter) // 0, as a new object was created
