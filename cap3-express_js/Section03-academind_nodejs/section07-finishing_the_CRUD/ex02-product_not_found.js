/*
    We'll handle an error that occurs when the route to an unexisting product is entered
*/

/* On ProductModel's getProduct(id) */
class Product{
    static getProduct(id){
        try{
            return products[id - 1]
        } catch(e){
            return null
        }
    }
}

/* The product_controller function */
exports.getProductDetailsPage = (req, res, next) => {
    const id = req.params.id

    product = ProductModel.getProduct(id)
    
    if(product){
        return res.status(200).render('product_details', {
            pageTitle: 'Product Details',
            product: product
        })
    }

    return res.status(404).render('not_found', {
        pageTitle: 'Product Not Found',
        error_message: 'Product not found'
    })
}

/* 
    not_found.ejs 

    <!DOCTYPE html>
    <html lang="en">
    <%- include('includes/head.ejs') %> 
    <body>
        <%- include('includes/navbar.ejs') %> 
        <h1 class="page-message red-text"><%= error_message %> </h1>
    </body>
    </html>
*/