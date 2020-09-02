let frase = 'Eu sou lindo!'

//length

console.log(frase.length) //length => counts all chars and spaces
console.log(('zé').length) //JS does not have a problem with utf-8 like PHP

console.log('')

//substring => gets a specific portion of the string

console.log(frase.substring(3,6)) //sou
console.log(frase.substring(3)) //omitting the ending param will make it be the last character

console.log('')

/* https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring */

//charAt

console.log(frase.charAt(12))
console.log('')

//split

console.log(frase.split('sou')) //split makes it an array. Also removes the parameter from string
console.log('')

//other methods:

console.log(frase.toLowerCase())
console.log(frase.toUpperCase())
console.log(frase.replace('u', 'l')) //replaces only the first ocurrence