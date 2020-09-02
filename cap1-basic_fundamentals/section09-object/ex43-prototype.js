function Fruit(){

}

const orange = new Fruit
const lemon = new Fruit

console.log(orange.__proto__) //It's Fruit!
console.log(lemon.__proto__) //It's Fruit!

Fruit.prototype.name = 'Fruity Fruit' //Every fruit will have these attributes
Fruit.prototype.makeJuice = function(){ console.log(`Here is your ${this.name} juice`) }

lemon.name = 'Lemon'

orange.makeJuice()
lemon.makeJuice()

const uhhh = {}
uhhh.__proto__ = Fruit.prototype //Making fruit the prototype to give it its attributes and funcs
uhhh.makeJuice()

//Making a bad array prototype method 
Array.prototype.stringify = function(){
    return this.reduce((culmulative, v) => culmulative + v + ' ')
}

const fruits = ['Lemon', 'Cake', 'Pasta', 'Soda', 'Tree', 'Mangoes']
console.log(fruits.stringify())