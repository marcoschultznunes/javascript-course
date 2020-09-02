/* 1 - prevent extensions */

const drink = Object.preventExtensions({
    name: 'Guaraná',
    type: 'Fruit Juice'
})

console.log(drink)
console.log(Object.isExtensible(drink))

//You can still change the value of the attributes and delete them
drink.name = 'Carurú'
drink.sugar = true //Will not work, as the object is not extensible
delete drink.type

console.log(drink)
console.log()


/* 2 - seal => cannot delete or create new attributes. Can only change values */

const lang = {
    name: 'Java',
    paradigm: 'OO'
}

Object.seal(lang)

console.log(lang)
console.log(Object.isSealed(lang))

lang.paradigm = 'Object Orientation'
lang.type = 'Primarily Back-End' //Will not work
delete lang.name //Also will not work

console.log(lang)
console.log()


/* 3 - freeze -> atrributes cannot even be modified */

const framework = {
    name: 'Laravel',
    language: 'PHP'
}

Object.freeze(framework)

console.log(framework)
console.log(Object.isFrozen(framework))

framework.name = 'Angular' //Modify => does not work
framework.creator = 'Google' //New => does not work
delete framework.language //Delete => does not work

console.log(framework)