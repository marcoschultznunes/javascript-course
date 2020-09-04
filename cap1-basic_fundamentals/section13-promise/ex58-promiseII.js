const getFirstElement = arrayOrObject => arrayOrObject[0]
const lower = str => str.toLowerCase()

new Promise(resolve => {
    resolve(['Marcelo', 'Jabriel', 'Jamal', 'Julius', 'Jubilherme'])
})
.then(getFirstElement)
    .then(getFirstElement)
    .then(lower)
    .then(console.log)