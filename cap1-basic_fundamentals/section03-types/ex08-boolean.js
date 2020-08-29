let hello = true
let there = false

console.log(hello) //true
console.log(there) //false
console.log(typeof(hello)) //both are boolean
console.log(typeof(there))
console.log('')

//Other values as boolean

let isTrue = 1
let isFalse = 0

console.log((Boolean)(isTrue)) //casting to print as boolean
console.log((Boolean)(isFalse))
console.log('')

//other values that are true

console.log((Boolean)(-48)) //any number that is not 0 converts to true
console.log((Boolean)(' ')) //a space counts as a char in a string. Therefore, ' ' is true
console.log('')

//other values that are false

console.log((Boolean)('')) //if a string has no chars and no spaces it converts to false
console.log((Boolean)(null)) //null => false
console.log((Boolean)(NaN)) //NaN => false
console.log((Boolean)(undefined)) //undefined => false
console.log('')

//strange stuff

const name = ''

console.log(name || 'michael') //prints the value that is true. Useful for default values