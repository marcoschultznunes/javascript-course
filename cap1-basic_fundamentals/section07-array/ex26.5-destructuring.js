/**
 *  Introduced in ES 2015
 * 
 *  Destructuring => creates variables from array elements and object attributes
*/

const arr = [2, 4, 8, 16, 32, 64]

const [n1, n2, n3, n4, n5, n6] = arr

console.log(n1, n2, n3, n4, n5, n6)

//Skipping elements and default values

const [a1, /* Skipped */ , a3, , a5, a6, a7, a8=0 /* Default value */ ] = arr

console.log(a1, a3, a5, a6, a7, a8)