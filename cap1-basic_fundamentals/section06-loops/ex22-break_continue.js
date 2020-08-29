/**
 *
 *  Break => Para o loop
 *  Continue => Pula uma iteração 
 * 
 *  É recomendado seu desuso, pois lembram o goto => macarronada
*/

console.log('Break:')
console.log()

for(i = 1; i <= 15; i++){
    if(i % 2 == 0){
        break
    }
    console.log(i)
}

console.log()
console.log('Continue:')
console.log()

for(i = 1; i <= 15; i++){
    if(i % 2 == 0){
        continue
    }
    console.log(i)
}