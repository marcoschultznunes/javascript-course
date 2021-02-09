/*
    There are 2 syntaxes for declaring arrays in Typescript:
*/

// 1:
const a: string[] = ['Hello', 'Hi', 'Oi', 'Ola']

// 2:
const b: Array<number> = [16, 32, 64, 128, 256]


/*
    Tuples:

    If we want to create an array of values with different types we use the Typescript tuple 
    type instead of the Array type.

    But the number of elements is the array becomes fixed.
*/
const c: [number, boolean, number, string] = [12, false, null, 'Hey']

export default {}
