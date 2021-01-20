import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../../redux/products/productActions";
import ProductCard from "../cards/ProductCard";

const CategoryProducts = (props) => {
    const {id, name} = props

    // Fetching products
    const dispatch = useDispatch()
    const productStore = useSelector(state => state.product)
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const mapProducts = productStore.products.map(product => 
        <ProductCard product={product} category={{id, name}} />
    )

    return (  
        <main>
            <h3 className='route-display'>Categories {'>'} {name}</h3>
            <div className='product-card-list'>
                {productStore.loading ? 'Fetching products...' : mapProducts}
            </div>
        </main>
    );
}
 
export default CategoryProducts;