const avo = {
    name: 'Augusto',
    surname: 'Texera Pexera',
    present(){
        console.log(`${this.name} ${this.surname}`)
    }
}

const pai = {
    __proto__: avo, //__proto__ => determines the inherited class
    name: 'Carlitos',
    surname: 'Texera Valentim'
}

pai.present() //inherited function

const filho = {
    name: 'Chiquinho'
}

Object.setPrototypeOf(filho, pai) //Other way to set the prototype, because JS hates you

filho.present()