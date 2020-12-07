/* With the same check function of the previous example, adding .withMessage */
check('title').isString().withMessage('Title must be a string.')

/*
    Now when the error message will be 'Title must be a string'.

    Status: 422
    {
        "errors": [
            {
                "value": {},
                "msg": "Title must be a string.",
                "param": "title",
                "location": "body"
            }
        ]
    }
*/
