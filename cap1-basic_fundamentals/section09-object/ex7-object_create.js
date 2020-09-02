//Don't use it

const metal = {
    key: 'minor',
    gender: 'Metal'
}

const angra = Object.create(metal) //Creates object that inherits from the object passed as param

angra.name = 'Angra'
console.log(angra.gender)

inherited_key = !angra.hasOwnProperty('key')
console.log(inherited_key)