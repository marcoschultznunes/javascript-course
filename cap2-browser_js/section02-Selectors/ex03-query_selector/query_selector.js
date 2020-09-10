/* 
    - querySelector() => The most useful.
        Uses the selector of CSS.
        Selects only the first element that meets the criteria

    - querySelectorAll() => Selects multiple elements
*/

const divs = document.querySelectorAll('div')
console.log(divs) //querySelectorAll returns a NODELIST object

Array.from(divs).forEach(div => div.innerHTML = 'div') 


const div1 = document.querySelector('#first-div')
div1.innerHTML = '#first-div'


const numericDivs = document.querySelectorAll('.numeric-div')
Array.from(numericDivs).forEach(div => div.innerHTML = '.numeric-div') 

/* Select by attribute ([attribute-name]) */
const customDivs = document.querySelectorAll('[custom]') //Selects all elements with that attribute
Array.from(customDivs).forEach(div => div.innerHTML = '[custom]')