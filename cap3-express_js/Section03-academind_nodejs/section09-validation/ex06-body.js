/* We can use a body() function instead of check(), so that it only checks the body of the 
request */
const { body } = require('express-validator')

/* On posts_routes.js */
router.post('/', 
    body('title') // body() instead of check()
        .isString()
        .withMessage('Title must be a string.')
        .custom((value, {req}) => {
            if(value === 'fuck'){
                throw new Error('No swearing allowed in post titles.')
            }
            return true
        }), 
postController.createPost)

module.exports = router