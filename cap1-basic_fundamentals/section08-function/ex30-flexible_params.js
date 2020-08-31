/** 
 * 
 *  All parameters are optional
 * 
*/

const sum3 = function (a, b, c) { console.log(a + b + c) }

sum3(12, 4)
sum3()
sum3(4, 5, 6)

/**
 *  Flexible arguments:
*/

//After ES 2015 (preferred) => spread operator (...)
const multiSum2 = function(...args){
    let sum = 0

    args.forEach(num => sum += num)

    return sum
}

console.log(multiSum2(2, 4, 12, 6))








//Before ES 2015
const multiSum = function () {
    let sum = 0

    for(i in arguments){
        sum += arguments[i]
    }

    return sum
}

console.log(multiSum(2, 4, 12, 6))