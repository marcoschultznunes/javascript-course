const obj = {
    obj2: {
        nome: 'Mesa'
    }
}

try{
    console.log(obj.obj1.nome)
} 
catch(e){
    console.log('NÃO.')
} 
finally{
    console.log('FIM!')
}
