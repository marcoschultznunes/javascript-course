/* 1 - getElementsByTagName() */
const divs = document.getElementsByTagName('div')

console.log(divs) //document.getElementsTagName() returns a HTMLCollection object

Array.from(divs). //Array.from() => Transform HTMLCollection into an Array
    forEach(div => div.innerHTML = 'Div') 

/* 2 - getElementById() */
const div1 = document.getElementById('first-div')
div1.innerHTML = 'ID'

/* 3 - getElementsByClassName() */
const numericDivs = document.getElementsByClassName('numeric-div')

Array.from(numericDivs).
    forEach(div => div.innerHTML = 'Class') 