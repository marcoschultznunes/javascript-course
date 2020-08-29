let a = Math.round(Math.random() * 12)

console.log(`a = ${a}`)
console.log()

switch(a){
    case 1: console.log("it's january!")
    break
    case 2: console.log("it's februrary!")
    break
    case 3: console.log("it's march!")
    break
    case 4: console.log("it's april!")
    break
    case 5: console.log("it's may")
    break
    case 6: console.log("it's june!")
    break
    case 7: console.log("it's july!")
    break
    case 8: console.log("it's august!")
    break
    case 9: console.log("it's september!")
    break
    case 10: console.log("it's october!")
    break
    case 11: console.log("it's november!")
    break
    case 12: console.log("it's december!")
    default: console.log('oh no! a bug!')
    break
}