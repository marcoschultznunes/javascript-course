// Index
router.get('/', (req, res, next) => {
    OrderModel.find()
    .select('-__v')
    .then(orders => {
        responseObject = { 
            numOfOrders: orders.length,
            orders: orders.map(order => {
                return {
                    _id: order._id,
                    product: order.product,
                    quantity: order.quantity,
                    request: {
                        method: 'GET',
                        url: 'http://localhost:8083/orders/' + order._id
                    }
                }
            })
        }

        res.status(200).json(responseObject)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})

// Post

/*
    We need to require the products model, as we will use it to check if the id of the product
    exists.
*/
require('../products/model')
const ProductModel = mongoose.model('products')

// The post
router.post('/', (req, res, next) => {
    ProductModel.findById(req.body.productId).then(product => { // Check product's existance
        if(product){
            const orderObject = {
                product: req.body.product,
                quantity: req.body.quantity
            } 
        
            const order = new OrderModel(orderObject)
        
            order.save().then((order) => {
                responseObject = {
                    message: 'Order created!',
                    createdOrder: {
                        method: 'GET',
                        url: 'http://localhost:8083/orders/' + order._id
                    }
                }
                res.status(201).json(responseObject)
            }).catch(error => {
                res.status(400).send({error: {message: error.message}})
            })
        } 
        else{
            res.status(404).send({error: {message: 'Product not found.'}})
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})