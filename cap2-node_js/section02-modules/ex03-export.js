/*
    Every Node JS file has a module object.
    The module object can be used to export vars, funcs, objs, etc.
*/

module.exports = {
    oi: 'Hello There',
    say(){
        console.log(this.oi)
    }
}