const express = require('express')
const router = express.Router()

const products = [
    {
        name: 'Knife',
        brand: 'Tramontina',
        price: 16
    },
    {
        name: 'PC Desktop',
        brand: 'Dell',
        price: 2600
    },
    {
        name: 'Fan',
        brand: 'Arno',
        price: 180
    }
]

router.get('/', (req, res, next) => {
    return res.status(200).render('products', {
        pageTitle: 'Products',
        products: products
    })
})
router.get('/create', (req, res, next) => {
    return res.status(200).render('create_product', {
        pageTitle: 'Create Product'
    })
})
router.post('/create', (req, res, next) => {
    console.log(req.body)

    return res.redirect('/products')
})

module.exports = router