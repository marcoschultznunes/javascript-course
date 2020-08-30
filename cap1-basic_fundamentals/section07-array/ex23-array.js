// A constant array can still have its elements changed.
const vals = [10, 8, 24, 5, 11]
console.log(vals[3])
console.log(vals[8]) //undefined
console.log()

vals[8] = 22 //unassigned indexes before this will still be undefined

console.log(vals)

//Length of array
console.log('Length:', vals.length)
console.log()

//Push => insert element at end of array
vals.push(12, 39, 63)
console.log(vals)
console.log()

//Pop => removes last element. The function also returns it
poppedElement = vals.pop()
console.log('Popped:', poppedElement)
console.log(vals)
console.log('Length:', vals.length)
console.log()

//Delete a certain element => delete or assign null/undefined
delete vals[1] 
console.log(vals)
console.log('Length:', vals.length)
vals[2] = null
console.log(vals)
console.log('Length:', vals.length) //Length never decreases
