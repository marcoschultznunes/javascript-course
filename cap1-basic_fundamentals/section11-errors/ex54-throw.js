try{
    for(i=-10; i<40; i++){
        if(i == 0){
            throw 'Divided by 0'
        }
        console.log(2/i)
    }
} 
catch(e){
    console.log(e)
}