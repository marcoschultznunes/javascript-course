/*
    In typescript we need to add ? to optional params
*/

/* No optional params: */
const sum4 = (n1, n2, n3, n4) : number => {
    let sum = n1 + n2
    sum += n2 ? n2 : 0 
    sum += n3 ? n3 : 0
    sum += n4 ? n4 : 0
    
    return sum
}

// sum4(1, 6, 4) => Error: Expected 4 arguments, but got 3.

/* With optional params */
const sum5 = (n1, n2, n3?, n4?, n5?) : number => {
    let sum = n1 + n2
    sum += n2 ? n2 : 0 
    sum += n3 ? n3 : 0
    sum += n4 ? n4 : 0
    sum += n5 ? n5 : 0
    
    return sum
}

// sum5(4) => Error: An argument for 'n2' was not provided.
sum5(10, 27, 83)
sum5(5390, 921, 239, 12390, 920)


export default {}


/* 
    Note: The optional parameters must come after the non-optional in the function declaration
*/
