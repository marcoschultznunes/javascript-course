function timer(){
    this.time = 0

    setInterval(function(){ //Set interval has a different context, therefore, loses the this
        this.time++
        console.log(this.time)
    }/*.bind(this) => solution 1 */, 1000)
}

//timer() => NaN

function timer2(){
    this.time = 0

    setInterval(() => { //Making it an arrow function also solves it => best solution
        this.time++
        console.log(this.time)
    }, 1000)
}

timer2()

/* Solution 3 => set this to a variable:

    function timer3(){
        this.time = 0

        let self = this

        setInterval(function(){
            self.time++
            console.log(this.time)
        }, 1000)
    }

*/