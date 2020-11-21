const products = [
    {
        name: 'Knife',
        brand: 'Tramontina',
        price: 16
    },
    {
        name: 'PC Desktop',
        brand: 'Dell',
        price: 2600
    },
    {
        name: 'Fan',
        brand: 'Arno',
        price: 180
    }
]

class Product {
    constructor(name, brand, price){
        this.name = name
        this.brand = brand
        this.price = price
    }

    save(){
        products.push(this)
    }

    static fetchAll(){
        return products
    }
}

module.exports = Product