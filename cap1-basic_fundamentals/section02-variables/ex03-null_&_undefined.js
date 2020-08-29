/**
 * 
 *  Null => Variable has been declared, but has a null value, does not point to any value in memory
 * 
 *  Undefined => Variable not declared
 * 
 */

let a = null

console.log(a)//null
console.log(typeof(b))//undefined


console.log(typeof(a))//typeof null returns an object => it's kind of a bug

/**
 * 
 *  https://2ality.com/2013/10/typeof-null.html
 * 
 *  In the first implementation of JavaScript, 
 *  JavaScript values were represented as a type tag and a value. 
 *  The type tag for objects was 0. 
 *  Null was represented as the NULL pointer (0x00 in most platforms). 
 *  Consequently, null had 0 as type tag, hence the "object" typeof return value.
 * 
 */