/* We can add custom validators */
check('title')
    .isString()
    .withMessage('Title must be a string.')
    .custom((value, {req}) => {
        if(value === 'fuck'){
            throw new Error('No swearing allowed in post titles.')
        }
        return true
    })

/* 
    Response:

    Status: 422
    {
        "errors": [
            {
                "value": "fuck",
                "msg": "No swearing allowed in post titles.",
                "param": "title",
                "location": "body"
            }
        ]
    }
*/