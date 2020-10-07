/*
    The better way of doing this is to instead of writing the whole path, we setup so that 
    the url is generated from enviroment variables on the server.

    https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html
*/

// To the index method
router.get('/', (req, res, next) => {
    ProductModel.find()
    .select('-__v') // Excludes the internal field __v from the response
    .then(products => {
        responseObject = {
            numOfProducts: products.length,
            products: products.map(product => {
                return {
                    _id: product._id,
                    name: product.name,
                    brand: product.brand,
                    price: product.price,
                    createdProduct:{
                        method: 'GET',
                        url: 'http://localhost:8083/products/' + product._id
                    }
                }
            })
        }
        
        res.json(responseObject)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})

// To the post method
router.post('/', (req, res, next) => {
    const productObject = {
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price
    }

    const product = new ProductModel(productObject)

    product.save().then(productCreated => {
        responseObject = {
            message: 'Product successfully created',
            request: {
                method: 'GET',
                url: 'http://localhost:8083/products/' + productCreated._id
            }
        }

        res.status(201).json(responseObject)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})