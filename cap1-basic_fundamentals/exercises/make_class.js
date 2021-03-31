function makeClass(...properties) {
    return function(...params){
        for(let i = 0; i < properties.length; i++){
            this[properties[i]] = params[i]
        }
    }
}

const Person = makeClass("name", "dateOfBirth", "gender")

const p1 = new Person("CJ", 1988, "M")

console.log(p1)
