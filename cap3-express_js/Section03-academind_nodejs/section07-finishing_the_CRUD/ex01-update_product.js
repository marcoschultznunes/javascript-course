/* 
    In this example, we'll add a product update form. We'll need to add an id field to all 
    products, so that we can make the dynamic update and delete routes
*/

/* The Product model */
const products = [] // We must change the products to be constructed using the class

class Product {
    constructor(name, brand, price){
        this.id = Product.count + 1
        this.name = name
        this.brand = brand
        this.price = price
        
        Product.count += 1
    }

    static count = products.length // Static count, to generate the unique IDs

    save(){
        products.push(this)
    }

    static fetchAll(){
        return products
    }

    static getProduct(id){
        try{
            return products[id - 1]
        } catch(e){
            return null
        }
    }
}

const p1 = new Product('Knife', 'Tramontina', 16)
const p2 = new Product('PC Desktop', 'Dell', 2600)
const p3 = new Product('Fan', 'Arno', 180)

p1.save()
p2.save()
p3.save()

module.exports = Product


/*
    Adding the buttons to the product list:

    <li>
        <h2><%= product.name %></h2>
        <p>Brand: <%= product.brand %></p>
        <p>Price: <%= product.price %></p>
        <a href="products/<%= product.id %>" class="product-list-button btn-blue unselectable">
            Update
        </a>
        <a href="" class="product-list-button btn-red unselectable">
            Delete
        </a>
    </li>
*/

/* The Product controller function */
exports.getProductUpdatePage = (req, res) => {
    const id = req.params.id

    product = ProductModel.getProduct(id)
    
    return res.status(200).render('product_update', {
        pageTitle: 'Product Update',
        product: product
    })
}

/* 
    The Product Update route:
    router.get('/:id', productController.getProductUpdatePage) 
*/

/* 
    product_Update.ejs for testing 

    <!DOCTYPE html>
    <html lang="en">
    <%- include('includes/head.ejs') %> 
    <body>
        <%- include('includes/navbar.ejs') %>
        <h1 class="page-title">Product Update</h1>
        <ul>
            <li><%= product.id %> </li>
            <li><%= product.name %> </li>
            <li><%= product.brand %> </li>
            <li><%= product.price %> </li>
        </ul>
    </body>
    </html>
*/

/*
    We'll improve this product_update.ejs file in the next example.
*/