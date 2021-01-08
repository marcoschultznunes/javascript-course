/* 
    There are 2 ways we can make the category_product table:
        1 - passing a string;
        2 - creating a model, and passing that model (this is useful for when we want the table 
            to be slightly more complex).
*/

/* On app.js */
const Product = require('./models/product_model')
const Brand = require('./models/brand_model')
const Category = require('./models/category_model')

Product.belongsTo(Brand, {constraints: true, onDelete: 'CASCADE'})
Brand.hasMany(Product)

Product.belongsToMany(Category, { through: 'category_product' });
Category.belongsToMany(Product, { through: 'category_product' });

/* 
    Now the many to many table will be created.
*/
