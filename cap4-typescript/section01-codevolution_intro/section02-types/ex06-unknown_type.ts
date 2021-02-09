/*
    The 'any' type allows the user to call functions and properties that do not exist.

    The unknown type is like the any type, but it does not allow function calls and 
    property access
*/

let a: any = 15
a.hello() // No error is catched by the linter
a.name
a.wtf = 'huh?'

let b: unknown = 'Eyy'; 
// NOTE: NEEDS THE SEMICOLON, OTHERWISE THE B AS STRING ON THE NEXT LINE IS TREATED AS A FUNCTION 
// CALL


// b.hello() => causes error 
// b.wtf = 'why?' => causes error


/* Type assertion => is like casting */
(b as string).toLowerCase()


export default {}
