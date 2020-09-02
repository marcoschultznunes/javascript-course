/*  Used to make a function that asks for an object parameter. 
    Only specific attributes are taken from that object.
*/

const self_harm = function({attack = 0, health = 0}){
    dmg = attack - health;

    if(dmg <= 0){
        return 'No damage!'
    }

    return `${dmg} points of damage!`;
}

const suicidal = {
    name: 'Daniel',
    attack: 12,
    health: 7
}

console.log(self_harm(suicidal))

/* You can also use arrays */
const pa_factor = function([n1, n2]){
    let factor = n2 - n1
    return factor   
}

const progression = [5, 8, 11, 14, 17, 20, 23]
console.log(progression)

const factor = pa_factor(progression)
console.log(`The progression grows by ${factor}`)