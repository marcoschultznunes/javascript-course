/*
    To import a module we use the require function
*/

const hello = require("./ex03-export"); // Using relative path
hello.say()

console.log(hello) // Only the module.exports object is imported, and not the entire file
console.log()

/*
    When you import a folder, the imported file will automatically be the index.js file 
    inside that folder
*/

const {dog} = require('./example')
console.log(dog)