/**
 *  Introduced in ES 2015
 * 
 *  Destructuring => creates variables from array elements and object attributes
*/

let pessoa = {
    nome: 'Marcellus',
    profissao: 'Fuzilero'
} 

let {nome, profissao} = pessoa //creates the variables from the attributes

console.log(`${nome}, ${profissao}`)


let {nome: n, profissao: p} = pessoa //variable names different from the attribute names

console.log(`${n}, ${p}`)

//Explanation continues in Object section