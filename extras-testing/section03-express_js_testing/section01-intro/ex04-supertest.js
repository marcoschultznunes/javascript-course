/* 
    https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6

    We'll also use a library called supertest to test NodeJS HTTP requests.

    npm install supertest --save-dev
*/

/* supertest example */
const request = require('supertest')
const app = require('../server') // We must require the app

describe('Post Endpoints', () => {
    it('should create a new post',

    async () => {
        const res = await request(app) // Pass the app to the request function call
        .post('/api/posts')
        .send({
            userId: 1,
            title: 'test is cool',
        })

        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    })
})
