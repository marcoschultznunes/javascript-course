/*
    Mocha looks for tests on a folder called TEST (IMPORTANT: IT IS TEST ON SINGULAR AND NOT
    ON PLURAL!)

    Mocha test files do NOT use the .test extension!
*/

/* test/first.js */
const expect = require('chai').expect

it('Test if Jest is working.', 
    () => {
      expect(2+5).to.equal(7)
    }
)
