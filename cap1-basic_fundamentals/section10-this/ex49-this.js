function f1(){
    console.log(this)
}

f1() //This => global (Node) 

const lol = {
    attr: 'Hey',
    bla: ['bla', 'bla', 'bla'],
    exec(){
        f1() //global
        console.log(this) //current object
    }
}

lol.exec()


/* 'This' varies acconding to the context of who called the function */

const lewl = {
    exec(){
        f1() //this => lewl
    }
}

const mm = lewl.exec
mm() //this => global