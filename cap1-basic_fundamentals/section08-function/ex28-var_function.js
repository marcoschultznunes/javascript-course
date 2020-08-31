//With this we can attribute a function to a let or const
const f1 = function (a, b){
    console.log(a + b)
}

function f2(a, b){ //This = var f2() = ...
    console.log(a + b)
}

//Therefore it is a VAR and hoisting occurs and it is in the global scope and it can be redeclared
function f2(){
    console.log('Hey')
}