// 1 - parameters (here, typescript infers the return to be a number too)
const add = (n1: number, n2: number) => {
    return n1 + n2
}

// add('ey', 3) => error: Argument of type 'string' is not assignable to parameter of type 'number'.
add(5, 7)


// 2 - return 
const divide = (n1, n2): number => {
    return n1 / n2
}

// Note: NaN is considered a number in JS, so it is still a valid return value

export default {}