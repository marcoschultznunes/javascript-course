/**
 *  Callback =>
 *      Passing a function and the function triggers when an event happens 
 *      
 *      example 1: Function inside a looping function, like foreach.
 *          in this example, you are declaring a function to call after each iteration of
 *          the loop
 *   
*/

scores = [6.4, 7.2, 3.4, 9, 5.6, 8.7, 6.9, 7.0]

/**   
 *  in a JS forEach, you can pass 1 of 2 params, both cases are callback
*/

/* 1 => An anonymous function */
scores.forEach(score => console.log(score));

console.log() 

/* 2 => An already declared function, which provides reusability to the code*/
printScore = score => console.log(score)

scores.forEach(printScore)

/**
 * 
 *  Example 2: Ajax, which sends a request to a server and when the server responds, 
 *      a callback function is triggered 
 *  
*/

/**
 *
 *  Example 3: onclick, onchange, onmouseover, ... events in browser JS 
 * 
*/