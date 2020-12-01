const products = []

class Product {
    constructor(name, brand, price){
        this.id = Product.count + 1
        this.name = name
        this.brand = brand
        this.price = price
        
        Product.count += 1
    }

    static count = products.length

    save(){
        products[this.id - 1] = this
    }
    
    static updateProduct(id, newProduct){
        const p = Product.getProduct(id)

        if(!p){
            return false
        }

        p.name = newProduct.name
        p.brand = newProduct.brand
        p.price = newProduct.price        

        p.save()

        return true
    }

    static deleteProduct(id){
        const p = Product.getProduct(id)

        if(!p){
            return false
            
        }

        products[p.id - 1] = null
        return true
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