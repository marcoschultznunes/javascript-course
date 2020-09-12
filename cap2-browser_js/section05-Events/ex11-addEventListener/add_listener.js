hoverDiv = document.querySelector('.hover-div')
clickDiv = document.querySelector('.click-div')

/*
    The purpose of addEventListener is to not pollute our html code by adding too many event 
    attributes and add them all to the JS file instead.
*/

hoverDiv.addEventListener('mouseenter', () => { //mouseover is also very used
    hoverDiv.innerHTML = 'I am an event!'
})
hoverDiv.addEventListener('mouseout', () => {
    hoverDiv.innerHTML = 'Touch Me!'
})

clickDiv.addEventListener('click', () => {
    clickDiv.innerHTML = 'I am an event!'

    setTimeout(() => {
        clickDiv.innerHTML = 'Click Me!'
    }, 2000)
})

// https://www.w3schools.com/js/js_htmldom_eventlistener.asp