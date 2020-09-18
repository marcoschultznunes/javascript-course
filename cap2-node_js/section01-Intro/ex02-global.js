/*
    In Browser JS, there is an object called window, which is the object that can be accessed
    from anywhere in your application.

    In Node JS, this object is called Global
*/

const oi = 'Hello' // Vars, funcs, objs, etc. are not added to the global object

console.log(global)
console.log(global.oi) // Undefined
console.log(oi)
console.log()

/*
    This occurs because if a variable is global, it will conflict with other variables with the
    same name. Instead, Node JS uses a module system.
*/

console.log(module) 