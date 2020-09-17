/*
    Node has a package manager called NPM
    With npm we can install libraries, modules, etc.

    For example, we can install lodash library using the following command on the terminal:
    - npm i lodash (might require sudo)

    Doing this, a file called package-lock.json, which manages the dependencies is create.
    And a node_modules folder is created containing all the files of the library, 
    which should be git ignored, because those files can be updated by the command 'npm i'.

        Create a gitignore by running touch '.gitignore'
        add 'node_modules/' to ignore all node_modules folders 
*/

// Using the third party library Lodash after installing it with npm

const __lodash = require('lodash') // Does not need relative path

console.log(__lodash.random(1, 40))

/* 
    But this is not a good practice, as we are requiring the entire library. 
*/

console.log(__lodash) // So much stuff => too heavy

/*
    It's best to require only what we want.
    We can do this by using the destructuring operator
*/

const {random: rand} = require('lodash')

console.log()
console.log(rand(1, 40))
console.log(rand(1, 40))
console.log(rand(1, 40))
console.log(rand(1, 40))