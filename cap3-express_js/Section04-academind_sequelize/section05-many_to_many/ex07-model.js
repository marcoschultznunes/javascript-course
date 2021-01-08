/*
    We can also, alternatively, make a model for the association itself, CategoryProductModel.

    With this we can modify some things in our many to many table, such as excluding the 
    timestamps.
*/

const CategoryProductModel = sequelize.define('category_model', {
    
}, { timestamps: false });
  
// as: 'name' => ALIAS
Category.belongsToMany(Product, { as: 'categories', through: CategoryProductModel });
Product.belongsToMany(Category, { as: 'products', through: CategoryProductModel });
