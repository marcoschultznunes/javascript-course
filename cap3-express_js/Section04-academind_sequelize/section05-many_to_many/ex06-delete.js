/*
    There is no need for major changes in the delete function. Product deletion stays the same.
    Then, i'll implement the new category deletion, which i didn't have previously.
*/

exports.deleteProduct = (req, res, next) => {
    const {id} = req.params

    ProductModel.findByPk(id).then(product => {
        if(!product){
            const err = new Error('No product found with given ID!')
            err.statusCode = 404
            throw err
        }

        return product.destroy()
    })
    .then(() => {
        res.status(200).json({message: 'Product deleted!'})
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not delete product.'
        res.status(statusCode).json({message: errMessage})
    })
}
