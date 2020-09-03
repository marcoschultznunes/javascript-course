//Date from a string

let d1 = new Date('2009-04-15') //No problem with month index when using string
console.log(d1.toDateString())

let d2 = new Date("2015-03-25T12:00:00Z") //With hours
console.log(d2.toDateString()) 

let d3 = new Date("10/30/1999") //MM/DD/YYYY
console.log(d3.toDateString())

console.log() 

//Date.parse() => Returns time in miliseconds
let d4 = Date.parse("02/20/2002")
console.log(d4)

//get methods => https://www.w3schools.com/js/js_date_methods.asp

//set methods => https://www.w3schools.com/js/js_date_methods_set.asp