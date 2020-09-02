const afonso = {
    nombre: 'Afonso', //Objects can have attributes (including arrays),
    naccion: 'España',
    saudaciones(){ //Functions,
        console.log('Olá, gracinia.')
    },

    martina: { //And nested objects.
        nombre: 'Martina',
        naccion: 'Espanã',
        saudaciones(){ 
            console.log('Olá, hombre hermoso.')
        }
    }
}

afonso.idade = 32 //Atributes can be modified and created after declaring the object
afonso.dinero = 43123000000

console.log(afonso)
afonso.saudaciones()
afonso.martina.saudaciones()

delete afonso.martina //Deleting an attribute
console.log(afonso)