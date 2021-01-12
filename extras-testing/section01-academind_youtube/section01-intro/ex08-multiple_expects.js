/* 
    We can add multiple expects to the same test:
*/
const divide = require('./divide')

test('Must output the 1st number, the / operator, the 2nd number, and then the result',
    () => {
        const result = divide(27, 3)
        expect(result).toBe('27 / 3 = 9') // Succeeds
        const result2 = divide(12, 7)
        expect(result2).toBe('12 / 7 = 1.71428571429') // Fails due to precision. 
    }
)
