/**
 *  Constructor function => Use New to create the object as if the function was a class.
 *  It is like having a constructor function but omitting the class 
*/

function Fruit(name, type, vitamins){
    this.name = name
    this.type = type
    this.vitamins = vitamins
}

const orange = new Fruit('Orange', 'Citrus', ['C'])
const banana = new Fruit('Banana', 'Banana', ['B', 'C'])

console.log(orange)
console.log(banana)

console.log()

/**
 * 
 *  Factory Function => Returns a literal object. Does not use New.
 * 
 */

function createInstrument(type, brand, sound){
    return {
        type,
        brand,
        sound,
        playSound(){
            console.log(sound)
        }
    }
}

const guitar = createInstrument('Guitar', 'Di Giorgio', 'Ta Dan, da di, chucuchucu, din, dan')
const piano = createInstrument('Piano', 'Yamaha', 'plin-plin, plin, plin')

guitar.playSound()
piano.playSound()
