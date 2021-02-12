const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')

describe('Category Endpoints', () => {
    
    it('POST Category success', 
        async () => {
            const res = await request(app).post('/categories').send({
                name: 'Test Category'
            })

            expect(res.statusCode).to.equal(201)
            expect(res.body).to.haveOwnProperty('category')
        }
    );

    // test('POST Category failure - category already exists', 
    //     async () => {
    //         const res = await request(app).post('/categories').send({
    //             name: 'Test Category'
    //         })

    //         expect(res.statusCode).toEqual(422)
    //     }
    // );

    // test('POST Category failure - too few characters', 
    //     async () => {
    //         const res = await request(app).post('/categories').send({
    //             name: 'T  '
    //         })

    //         expect(res.statusCode).toEqual(422)
    //     }
    // );
    
})
