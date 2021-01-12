/*
    npm install --save-dev jest
*/

/*
    A test file is usually named the same as the regular file, but with a .test.js or .spec.js 
    extension.

    There is no significant difference between the two extensions.
*/

/* first, i'll make a file with a simple function, divide.js */
module.exports = (n1, n2) => {
    return `${n1} / ${n2} = ${n1 / n2}`
}

/* Then, divide.test.js */
const divide = require('./divide')

test('Must output the 1st number, the / operator, the 2nd number, and then the result',
    () => {
        const result = divide(27, 3)
        expect(result).toBe('27 / 3 = 9') // Expecting the exact result in this case
    }
)

/* On package.json i change the start script to "jest", this will make the script search for 
and execute the .test.js and .spec.js files. */


/*
    The test will pass, but if i change the divide test to something else which does not return
    the expected result, such as:

    module.exports = (n1, n2) => {
        return `${n1} / ${n1} = ${n1 / n2}`
    }

    it will fail.

    npm test:

    FAIL  ./divide.test.js

    Expected: "27 / 3 = 9"
    Received: "27 / 27 = 9"
*/
