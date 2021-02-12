/*
    https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types

    type: can also introduce primitive, union, and intersection
    interface: returns an object type 

    An interface can have multiple merged declarations, but a type alias for an object type 
    literal cannot. Which means that if you define an interface twice, typescript merges them 
    into one.
*/

type numOrStr = number | string

let a: numOrStr = 2
a = 'Hey'


type person = {name: string, surname?: string}
interface Person {name: string, surname?: string}

let p1: person = {
    name: 'Luís'
}


export {}
