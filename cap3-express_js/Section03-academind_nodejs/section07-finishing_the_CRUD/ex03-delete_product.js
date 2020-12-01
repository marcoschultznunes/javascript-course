// The delete model function
class Product{
    static deleteProduct(id){
        const p = Product.getProduct(id)
        
        if(p){
            products[p.id - 1] = null
            return true
        } else{
            return false
        }

    }
}

// The delete controller function 

exports.deleteProduct = (req, res) => {
    const id = req.params.id

    const success = ProductModel.deleteProduct(id)

    if(success){
        res.status(200).redirect('/products')
    } else{
        return res.status(404).render('not_found', {
            pageTitle: 'Product Not Found',
            error_message: 'Product not found'
        })
    }
}

/* 
The route

router.get('/delete/:id', productController.deleteProduct)
*/


/*
The delete button on products.ejs

<a 
    href="products/delete/<%= product.id %>" 
    class="product-list-button btn-red unselectable"
>
    Delete
</a>
*/