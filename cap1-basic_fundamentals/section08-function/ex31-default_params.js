//After ES 2015 => easy
const sayNameChildren2 = function (name = 'Unknown', children = 'unknown'){
    console.log(`Hello ${name}, parent of ${children} children`)
}

sayNameChildren2('Jonas', 2)
sayNameChildren2('Jane', 0)
sayNameChildren2()

console.log()













//Before ES 2015 => this has a bug with 0, because 0 is a false boolean
const sayNameChildren = function (name, children){
    name = name || 'Unknown' 
    children = children || 'unknown'

    console.log(`Hello ${name}, parent of ${children} children`)
}

sayNameChildren('Jonas', 2)
sayNameChildren('Jane', 0) //bug
sayNameChildren()