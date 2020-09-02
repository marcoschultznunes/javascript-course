/* 

https://stackoverflow.com/questions/8659390/context-to-use-call-and-apply-in-javascript#:~:text=You%20use%20call%20or%20apply,method%20of%20a%20particular%20object.

You use call or apply when you want to pass a different THIS value to the function. 
This means that you want to execute a function as if it were a method of a particular object. 
The only difference between the two is that call expects parameters separated by commas, 
while apply expects parameters in an array.

*/

function heal(amount = 10, max = 100){
    this.health += amount
    
    if(this.health > max){
        this.health = max
    }
}

const player = {
    name: 'Mil Grau',
    health: 80   
}

const monster = {
    name: 'Monster',
    health: 50
}

heal.call(player, 40, 110)
heal.apply(monster, [30, 70]) //Only difference is that the params of the function are in an array

console.log(player)
console.log(monster)