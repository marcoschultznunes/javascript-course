var a = 10
let b = 5

/**
 *  Let => Was created to solve bugs that happened with var's scope.
 * 
 *  Const behaves like Let
 */

var a = 9 //var also lets us redeclare variables.

let b = 4 //with let, redeclaring won't work.


const c = 'L'
c = 'M' //changing the value of a constant throws an exception in JS