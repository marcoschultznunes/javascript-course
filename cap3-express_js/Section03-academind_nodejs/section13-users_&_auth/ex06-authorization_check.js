/* authCheck.js */
const jwt = require('jsonwebtoken')

exports.authCheck = (req, res, next) => {
    const authHeader = req.get('Authorization')

    if(!authHeader){
        const err = new Error('User not authenticated.')
        err.statusCode = 401
        throw err
    }

    const token = authHeader.
        replace(' ', '').
        replace('bearer', '').
        replace('Bearer', '')

    let verifiedToken = ''
    
    try{
        verifiedToken = jwt.verify(token, 'secretkeyHAHAHAlol')
    } catch(e){
        const err = new Error('User not authenticated.')
        err.statusCode = 401
        throw err
    }

    if(!verifiedToken){
        const err = new Error('User not authenticated.')
        err.statusCode = 401
        throw err
    }

    req.userId = verifiedToken.userId // We'll use to check matching IDs later.
    next()
}


/* 
    After this, we still need to verify if an user is the creator of the post he wishes to
delete or update. For that, we'll need to connect the users and the posts endpoints. We'll do 
that in the next section.
*/
