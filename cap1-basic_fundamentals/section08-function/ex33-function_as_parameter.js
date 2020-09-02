const printResult = function (a, b, op = soma){
    op_arr = op(a, b)
    
    result = op_arr[0]
    operator = op_arr[1]

    console.log(`${a} ${operator} ${b} = ${result}`)   
}

soma = (a, b) => ([a+b, '+'])
sub = (a, b) => ([a-b, '-'])
mult = (a, b) => ([a*b, '*'])
div = (a, b) => ([a/b, '/'])

printResult(15, 6)
printResult(30, 7, mult)
printResult(224, 4, div)
printResult(256, 92, sub)