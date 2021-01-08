/* 
    We'll add the relation in app.js
*/
app.use('/products', product_routes)
app.use('/users', user_routes)
app.use('/brands', brand_routes)

const Product = require('./models/product_model')
const Brand = require('./models/brand_model')

Product.belongsTo(Brand, {constraints: true, onDelete: 'CASCADE'})
Brand.hasMany(Product)

/*
    Then, we'll remove the brand attribute from product_model.js and make the necessary changes 
*/

/* 
    We now need to replace the old product table with the new one. To do that, we can either 
    manually drop the table in the mysql workbench, or set sync({force:true}) on app.js
*/
db.sync({force: true}).then(result => {
    app.use((req, res, next) => {
        res.send('<h1>It just works!</h1>')
    })
}).catch(err => {
    console.log(err)
    app = null
})

/*
    Now a field called brandId will be added to the product table.
    On the next example, we'll modify the post and update product to work with this new 
    association
*/
