/*
    To protect routes with JWT, we'll use a middleware for authorization, meaning a 
    function that funnels and blocks the request from proceeding if the authorization 
    fails.
*/

/*
    We'll create a middleware folder and an authorization file, which will export the 
    middleware
*/
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.replace('Bearer ', '') 
            .replace('bearer ', '')
            .replace(' ', '')
        // jwt.verify(token, secret, options)
        const verified = jwt.verify(token, 'tawLsn3E4mboqp#fb9J', null) 
        next() // This command will allow the route to proceed as normal
    } catch(error){
        return res.status(401).json({error: {message: 'Authorization failed'}})
    }
}  

/*
    To add this middleware, we require it, and pass it as a parameter to the routes we 
    want.
*/
const authorization = require('../../middleware/authorization')

// The authorization is the middleware
router.get('/', authorization, (req, res, next) => {

})

/*
    This could also be done with router.use(authorization)
*/ 