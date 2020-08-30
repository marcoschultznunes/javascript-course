let odd = [3, 5, 7, 9, 11, 13, 15]

/**
 *  Map => Transform every element, does not remove.
 * 
 *  Filter => Filters elements, removing some of them from the array.
 * 
 *  Reduce => Uses a culmulative to turn an array into a single element. 
 *  Eg: sum, avg, count, min, max, etc.
 *
 *  THESE METHODS DO NOT ALTER THE ARRAY DIRECTLY. THEY RETURN A NEW ONE. 
*/

//map
let even = odd.map(n => n+1) //every element will be increased by 1
console.log(even)

//chained map
let powered = even.map(n => n*1000).map(n => n**2).map(n => n + 10000)
console.log(powered)

console.log()

//filter - you can also chain filters
let div_by_4_6 = even.filter(n => n % 4 === 0).filter(n => n % 6 === 0)
console.log(div_by_4_6)

console.log()

//reduce - uses a culmulative which is modified in every iteration
let sum_even = even.reduce((culmulative, n) => culmulative + n) // get the sum
console.log(sum_even)
