//With this, we can attribute a function to a LET or CONST
const f1 = function (a, b){
    console.log(a + b)
}

//With this, the function will be declared as a VAR
function f2(a, b){ 
    console.log(a + b)
}

//Therefore hoisting occurs, it is in the global scope and it can be redeclared
function f2(){
    console.log('Hey')
}