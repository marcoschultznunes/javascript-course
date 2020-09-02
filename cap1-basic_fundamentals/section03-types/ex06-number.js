let a = 15
let b = 1.0
let c = -24.9
let d = Number('4.0')

console.log(typeof(a)) //all are number
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))

console.log('')

// float and integer can be differenciated
 
console.log(Number.isInteger(a)) //15 => integer
console.log(Number.isInteger(b)) //1.0 => integer
console.log(Number.isInteger(c)) //-24.9 => float
console.log(Number.isInteger(d)) //Number('4.0') => integer

console.log('')

//rounding

let n1 = 7.9999876
let n2 = 4.443
let n3 = 4.5

console.log(n1.toFixed(2))//7.999 => 8
console.log(n2.toFixed(0))//4.44 => 4
console.log(n3.toFixed(0))//4.5 => 5
console.log(Math.floor(n1))//7.9 floor => 7

console.log('')

//numeric bases

let n4 = 20

console.log(n4.toString(2)) //in binary
console.log(n4.toString(8)) //in octal
console.log(n4.toString(16)) //in hexadecimal

console.log('')

//you can also do this:

console.log((10).toString(2))
console.log('')

//divide by zero

console.log(6/0) //results in infinity
console.log('')

//you can also do this:

console.log('20' / 4)
console.log('5' + 8) //this will concat to the string instead of adding => EXTREMELY COMMON ERROR
console.log('aaaaa' / 2) //NaN => Not a Number

console.log('')

//floating point problem => imprecison. This happens to preserve performance

let num = 0.2 + 0.7

console.log(num)
console.log(0.2 + 0.7)
