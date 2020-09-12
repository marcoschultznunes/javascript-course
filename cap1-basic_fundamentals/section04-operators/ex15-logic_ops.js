let fui_ao_cinema = false
let escovei_os_dentes = true
let ouvi_música = false
let programei = true

console.log((Boolean)(fui_ao_cinema || escovei_os_dentes)) //true
console.log((Boolean)(fui_ao_cinema || ouvi_música)) //false

console.log('')

console.log((Boolean)(programei && escovei_os_dentes)) //true
console.log((Boolean)(programei && ouvi_música)) //false

console.log('')

console.log((Boolean)(!ouvi_música)) //true
console.log((Boolean)(!programei)) //false

console.log('')

// not, or, and
