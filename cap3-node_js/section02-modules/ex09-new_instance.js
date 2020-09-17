const { increment } = require("./ex08-changeable_export")

module.exports = () => {
    return {
        counter: 0,
        increment(){
            this.counter++
        }
    }
}