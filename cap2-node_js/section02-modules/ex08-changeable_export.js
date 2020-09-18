/*
    Node JS 'caches' the module.exports
*/

module.exports = {
    counter: 0,
    increment(){
        this.counter++
    }
}