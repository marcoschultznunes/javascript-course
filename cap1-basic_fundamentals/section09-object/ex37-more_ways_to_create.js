const a = 1
const b = 2
const c = 3

const obj1 = {
    a: a, b: b, c: c //This is unnecessary since ES 2015
} 
const obj2 = {
    a, b, c //Now this can be done
}

console.log(obj1)
console.log(obj2)

console.log()

/**
 *  Variable attribute names 
*/

let attr1 = 'Name'
let attr2 = 'Age'
let attr3 = 'Profession'

const person = {
    [attr1]: 'Léo',
    [attr2]: 16   
}

person[attr3] = 'Estudante'

console.log(person)