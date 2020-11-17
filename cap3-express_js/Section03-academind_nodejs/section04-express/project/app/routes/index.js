const express = require('express')
const router = express.Router()

const view = require('../utils/paths/view')

router.get('/', (req, res, next) => {
    return res.status(200).sendFile(
        view('index.html')
    ) 
})

module.exports = router