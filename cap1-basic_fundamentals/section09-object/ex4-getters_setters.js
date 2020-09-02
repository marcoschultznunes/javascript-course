/**
 *  This is dumb and stupid wtf.
 *  Don't use this
*/

const pessoa = {
    _count: 0, //The _attribute is a convention saying that the attribute is supposed to be private
    
    get count(){
        this._count++
        return this._count
    },
    set count(value){ //function with different name to the method to avoid loop.
        this._count = value //it is stupid, because i could call pessoa._count and ignore this
    }
}

console.log(pessoa.count)
console.log(pessoa.count)
pessoa.count = 100
console.log(pessoa.count)