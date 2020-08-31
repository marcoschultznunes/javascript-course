const fun1 = function(){}

const fun2 = function(){}

const sum = function(a, b){ return a + b }

// array of functions

const arr = [sum, fun1, fun2]

console.log(arr[0](2, 3))


// object attriute
const obj = {}
obj.hi = function(){ return 'Hi' }

console.log(obj.hi())


// function as param
function run(fun) {
    fun()
}

run(function(){console.log('Hello')})


// Returning a function => don't use this
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)