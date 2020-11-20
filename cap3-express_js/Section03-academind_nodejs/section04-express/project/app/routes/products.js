const express = require('express')
const router = express.Router()

const view = require('../utils/paths/view')

router.get('/', (req, res, next) => {
    return res.status(200).sendFile(
        view('products.html')
    ) 
})
router.get('/create', (req, res, next) => {
    return res.status(200).sendFile(
        view('create_product.html')
    )
})
router.post('/create', (req, res, next) => {
    console.log(req.body)

    return res.redirect('/products')
})

module.exports = router