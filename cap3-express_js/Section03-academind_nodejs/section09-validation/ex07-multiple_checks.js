/* We can check multiple fields in the same request: */
router.post('/', 
[
    body('title')
        .isString()
        .withMessage('Title must be a text value.'),
    body('content')
        .isString()
        .withMessage('The content must be some text'),
    body('imageUrl')
        .isURL()
        .withMessage('Invalid URL format for the image')
],
postController.createPost)

/* 
    Response:

    Status: 422
    {
        "errors": [
            {
                "value": {},
                "msg": "Title must be a text value.",
                "param": "title",
                "location": "body"
            },
            {
                "value": [],
                "msg": "The content must be some text",
                "param": "content",
                "location": "body"
            },
            {
                "value": "no url",
                "msg": "Invalid URL format for the image",
                "param": "imageUrl",
                "location": "body"
            }
        ]
    }
*/