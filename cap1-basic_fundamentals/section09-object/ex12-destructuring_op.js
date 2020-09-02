let pessoa = {
    nome: 'Marcellus',
    profissao: 'Fuzilero'
} 

let {nome, profissao} = pessoa //creates the variables from the attributes
console.log(`${nome}, ${profissao}`)


let {nome: n, profissao: p} = pessoa //variable names different from the attribute names
console.log(`${n}, ${p}`)

//Nested objects
const marcellus = {
    name: 'Marcellus',
    age: 32,
    education: 'PHD',
    children: {
        melissa: {
            name: 'Melissa',
            age: 5,
            education: 'Pre-school'
        },
        laura: {
            name: 'Laura',
            age: 3,
            education: 'Kindergarten'
        }
    }
}

let {children: { melissa: {name: me_name, age: me_age, education: me_education} } } = marcellus

console.log(`Name: ${me_name}`)
console.log(`Age: ${me_age}`)
console.log(`Education: ${me_education}`)