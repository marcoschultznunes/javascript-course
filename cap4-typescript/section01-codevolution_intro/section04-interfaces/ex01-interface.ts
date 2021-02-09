/*
    With interfaces we can have an object as a type.
*/

interface Person {
    name: string,
    surname: string,
    dateOfBirth?: Date // Optional property
}

const fullName = (person: Person) => {
    return person.name + ' ' + person.surname
}


const p1 = {name: 'Ricardo', surname: 'Milos', randomAttribute: 'Whatever'}
console.log(fullName(p1))

/*
    If we passed an object in which the attributes specified on the interface were of improper
    types, intelisense would have detected it. 
*/


export default {}
