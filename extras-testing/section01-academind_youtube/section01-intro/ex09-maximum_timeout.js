/*
    By default Jest has a maximum timeout of 5000 ms. We can change this value by passing 
    another parameter at the end of the test function.
*/
const divide = require('./divide')

test('Must output the 1st number, the / operator, the 2nd number, and then the result',
    () => {
        const result = divide(27, 3)
        expect(result).toBe('27 / 3 = 9')
        const result2 = divide(12, 7)
        expect(result2).toBe('12 / 7 = 1.71428571429')
    }
, 10000) // 10000 ms is now the max timeout.
