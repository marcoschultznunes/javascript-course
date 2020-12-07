/* Trim is used for sanitization and it removes all whitespaces from start and end of the 
string */
router.post('/', 
[
    body('title')
        .isString()
        .withMessage('Title must be a text value.')
        .trim() // trim before isLength
        .isLength({min: 2, max: 150})
        .withMessage('Title must consist of 2-150 characters'),
    body('content')
        .isString()
        .withMessage('The content must be some text')
        .trim()
        .isLength({min: 2, max: 3000})
        .withMessage('Content must consist of 2-3000 characters'),
    body('imageUrl')
        .isURL()
        .withMessage('Invalid URL format for the image')
],
postController.createPost)

/*
    Now any title and content is trimmed, and if an empty value full of whitespaces would be 
    sent, whose spaces would be trimmed, after that, the length would be 0, and it would not 
    pass the minimum length validation.

    Other useful sanitization:
        .normalizeEmail() => lowercaps and trims emails.
*/