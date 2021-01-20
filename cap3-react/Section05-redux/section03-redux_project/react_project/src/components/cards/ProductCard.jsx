import { formatMoney } from "../../utils/format";

const ProductCard = (props) => {
    const {product} = props

    return (  
        <div className='product-card h-card'>
            <div className='product-card-image-div'>
                <img src={`http://localhost:8083/${product.image}`} alt=""/>
            </div>
            <div className='product-card-details-div'>
                <div>
                    <h3 className='product-card-description'>{product.description}</h3>
                    <p className='product-card-brand'>By {product.brand.name}</p>
                </div>
                <h3 className='product-card-price'>$ {formatMoney(product.price)}</h3>
                <div>
                    <button className='product-card-button bg-green styled-button'>Buy</button>
                    <button className='product-card-button bg-yellow styled-button'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
 
export default ProductCard;