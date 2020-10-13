const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.replace('Bearer ', '')
            .replace('bearer ', '')
            .replace(' ', '')
        const verified = jwt.verify(token, 'tawLsn3E4mboqp#fb9J', null)
        next()
    } catch(error){
        return res.status(401).json({error: {message: 'Authorization failed'}})
    }
}  