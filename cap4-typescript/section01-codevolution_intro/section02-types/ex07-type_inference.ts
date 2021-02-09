/*
    Typescript infers the type of a variable when it is declared and assigned at the same type
*/

/* Without inferring */
let a 
a = 10 
a = true

/* With inferring */
let b = 20
// b = true => Error: Type is already inferred as number

export default {}
