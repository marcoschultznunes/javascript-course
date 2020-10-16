//https://www.youtube.com/watch?v=srPXMt1Q0nY&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=10

/*
    We'll use form-data as our body instead of JSON to upload files through HTML forms. 
    Therefore, just like we needed a library to parse JSON, we'll use a library called 
    multer to parse form-data
        npm install --save multer
*/ 

// Now we'll add productImage to the products model
const multer = require('multer')

// Configuring the storage
const storage = multer.diskStorage({
    // Functions that multer execute when a new file is received
    destination: (req, file, callback) => {
        callback(null, './uploads/') // p1 => error (null because this is success) p2 => folder
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname) // p2 => file name
    }
})

const upload = multer({storage: storage}) // Multer middleware configuration


/*
    We'll also modify our product model to add the productImage field
*/
mongoose.model('products', {
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: false
    },
    price:{
        type: Number,
        required: true
    },

    // String typed (the URL), and required is optional
    productImage:{
        type: String,
        required: false
    }
}, 'products')

/*
    Then, we'll apply the upload function as a middleware to our product POST route, and
    modify it, adding the new productImage field where it is required
*/

// We must add the upload.single('name of the field') as a middleware, after authorization
router.post('/', authorization, upload.single('productImage'), (req, res, next) => {
    const productObject = {
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,

        // This req.file exists now, thanks to multer
        productImage: req.file.path
    }

    /* The rest stays the same */
    const product = new ProductModel(productObject)

    product.save().then(productCreated => {
        responseObject = {
            message: 'Product successfully created',
            createdProduct: {
                method: 'GET',
                url: 'http://localhost:8083/products/' + productCreated._id
            }
        }

        res.status(201).json(responseObject)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})