const p1 = {
    name: 'Arthur',
    job: 'King',
    age: 23
}

console.log(Object.keys(p1))
console.log(Object.values(p1))

Object.defineProperty(p1, 'children', {
    enumerable: true, //Visibility
    writable: true, //Can be modified
    value: 2
})

Object.entries(p1).forEach(([k, v]) => { //Strange syntax = Destructuring array in function [k, v]
    console.log(`${k} - ${v}`)
})

/**
 *  Object.assign => ES 2015. Concats attributes to an object from different one.
*/

const dest = {a: 12}
const o1 = {b: 'uhhh', c: 'hmpf'}
const o2 = {d: 'dsad', j: 'Jamelão'}

Object.assign(dest, o1, o2)
console.log(dest)