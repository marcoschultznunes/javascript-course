/**
 * 
 *  JSON.stringify => Create JSON from object
 *  
 *  JSON.parse => Parse a JSON into a javascript object
 * 
 */

const brock = {
    name: 'Bróqui',
    comida: 'Bróqui',
    vitamina: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'GG'],
    esporti: {
        name: 'Boxe',
        tipo: 'Bructi',
        faixa: 'Cinza'
    },
    brocar(){ //Functions are ignored when converting to JSON
        console.log('Eu sou Bróqui.')
    }
}

jason = JSON.stringify(brock) //To JSON
console.log(jason)

console.log()

object_again = JSON.parse(jason) //Reversed to an object
console.log(object_again)