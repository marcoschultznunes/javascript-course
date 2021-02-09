const printName = (name: string = 'Anon', surname: string = 'Guest') : string => {
    return `Hello, ${name} ${surname}!`
}

console.log(printName('Marcola')) // Marcola Guest
console.log(printName()) // Anon Guest
