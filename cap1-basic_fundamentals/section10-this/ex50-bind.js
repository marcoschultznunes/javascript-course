/* Bind => function that locks the 'this' to a specified element */

const object = {    
    say(){
        console.log(this)
    }
}

const thief_of_this = object.say
thief_of_this() //global

const guard_of_this = object.say.bind(object)
guard_of_this() //object