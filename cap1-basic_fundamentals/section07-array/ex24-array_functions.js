const words = ['Hello', 'Hi', 'Greetings', 'Olá', 'Oi']

/**
 *  Splice => is flexible and does the following:
 *  - remove elements
 *  - substitute elements 
 *  - add elements
 *  - get sub-array from array (also removing them)
*/

//remove
words.splice(0, 2)
console.log(words)

//substitute
words.splice(1, 2, 'Guten Tag', 'Salve')
console.log(words)

//add
words.splice(2, 0, 'Ola', 'Namaste')
console.log(words)

//get sub-array
let subarray = words.splice(3, 2)
console.log(subarray)

console.log()

/**
 * Shift => shifts array to the left, removing the first element
 * Unshift => shifts arr to the right, adding a new first element  
*/
const nums = [10, 123, 38, 4, 96, 21]
nums.shift()
console.log(nums)
nums.unshift(420)
console.log(nums)

console.log()

/**
 *  Sort => sorts ascending characters by unicode 
*/

words.sort()
console.log(words)

nums.sort() //Sort does not work properly with nums
console.log(nums)

nums.sort((a, b) => a - b) //solution: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
console.log(nums)

console.log()

/**
 *  Concat => concatenate elements and other arrays to the array.
 * 
 *  RETURNS INSTEAD OF MODIFYING ARRAY DIRECTLY
*/

all_together = words.concat('Salud')
all_together = all_together.concat(nums)

console.log(all_together)