hoverDiv = document.querySelector('.hover-div')
clickDiv = document.querySelector('.click-div')

function touch(){
    hoverDiv.innerHTML = 'Thank You.'
}
function untouch(){
    hoverDiv.innerHTML = 'Touch Me!'
}

/*  
    Do not name the function click(), 
    as the function click() already exists and it is used for buttons 
*/
function clicked(){ 
    clickDiv.innerHTML = 'Thank You.'

    setTimeout(() => {
        clickDiv.innerHTML = 'Click Me!'
    }, 2000)
}

// https://www.w3schools.com/js/js_htmldom_events.asp