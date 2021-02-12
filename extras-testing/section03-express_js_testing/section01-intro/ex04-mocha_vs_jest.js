/*
    For the backend, Mocha, Chai and Sinon are preferred over Jest.

    Jest was built for ReactJS and it requires additional setup to work with Node. 
    
    The mongoose documentation states: "We strongly advise against using Jest for testing any 
    Node.js apps unless you are an expert developer with an intimate knowledge of Jest". 
    
    Therefore, it is better to use the other 3.
*/

// npm install --save-dev mocha chai sinon

// npm install --save-dev chai-http

/*
    On package.json:

    "scripts": {
        "test": "mocha api/*",
        "start": "nodemon"
    },
*/
