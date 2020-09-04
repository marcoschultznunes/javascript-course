/** 
 *  PROMISES, THIS SECTION IS EXTREMELY IMPORTANT AND IS USED ALL THE TIME IN A REAL PROJECT
 * 
 *  Promise => useful for asynchronous programming. The program will continue to execute while
 *  awaiting the promise's response.
 *  
 *  Promise => "promises you a return in the future"
 * 
 *  On resolution will return the resolve to the function that called it, 
 *  or a reject error if it fails. 
*/

function tellAfter(secs, msg){
    
    return new Promise((resolve, reject) => { /* The Promise parameter is a callback function. 
        When the promise reaches its destination, the callback is called */
        
        setTimeout(() => {
            resolve(msg) //resolve => Returns msg. ONLY ONE PARAM IS ALLOWED!            
        }, secs * 1000)
    
    })
}

console.log(tellAfter(4, 'Olá, Marilene!')); //Promise {<pending>}

tellAfter(3, 'À noite vinho, tainha') //The next code will resolve before the promise responds(async)
    .then((msg) => console.log(msg))

tellAfter(2, 'Olá, Marilene!')
    .then(console.log) //I can omit the arrow function doing this.


//Rejected promise

function rejectPromise(){
    return new Promise((resolve, reject) => {
        reject('No')
    })
}

/*  Unhandled promise rejections are deprecated. 
    (But useful for debugging) => must be treated with .catch() */
rejectPromise()
    .then(resp => console.log(resp))
    .catch(console.log) //Omitting the arrow function
    