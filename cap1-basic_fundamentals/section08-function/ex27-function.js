function br(){
    console.log()
}
function print(msg){
    console.log(msg)
}

print('Hello') 
print('There')
br()

//Function with return
function randomInt(min, max){
    let ret = Math.round(Math.random() * (max - min)) + min
    return ret
}

print(randomInt(5, 12))