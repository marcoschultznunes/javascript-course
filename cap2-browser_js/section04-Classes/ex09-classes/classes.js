divs = document.querySelectorAll('div')
divs = Array.from(divs)

/*
    Element.classList => access element's classes
    Element.classList.remove('class name') => remove class
*/
divs[5].classList.remove('standard-div')

divs[0].classList.add('decorated')

divs[3].classList.toggle('standard-div') // Removes
console.log(divs[3].classList.contains('standard-div')) // False

divs[3].classList.toggle('standard-div') // Adds
console.log(divs[3].classList.contains('standard-div')) // True


divs[0].classList.forEach(console.log)

/**
 *  Obs: adding and removing classes is the standard way of changing css with javascript.
 *  Altering the style attribute is bad practice.
*/