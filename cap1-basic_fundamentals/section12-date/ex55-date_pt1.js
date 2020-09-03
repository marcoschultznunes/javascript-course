//JavaScript stores dates as number of milliseconds since 1970-01-01 00:00

//JAVASCRIPT DOES NOT SUPPORT CHANGING TIMEZONES

//Date is also bad in JS. Use the LIBRARY moment.js!!!!!!!!!!!!!!!

//current date
let date = new Date()
console.log(date) //The timezone is wrong

//custom date
let d1 = new Date(2010, 06, 23, 23, 04) /* IN JS MONTHS 0 INDEXED, BECAUSE WHY NOT */
console.log(d1) //The timezone is wrong, therefore day is also +
console.log()

//toUTCString
console.log(d1.toUTCString())
//toTime
console.log(d1.toTimeString())
//toDateString
console.log(d1.toDateString())
//toISO => Its already the default formatting
console.log(d1.toISOString())

