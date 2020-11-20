/* 
    We'll now make the products index page display the products according to an array 
    passed by the route.
*/

/* On products.js route */
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
    return res.status(200).render('products', {products: products}) // p2 = passed vars
})