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
