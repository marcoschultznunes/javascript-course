const ProductCard = (props) => {
    const {product} = props

    return (  
        <div className='product-card'>
            <img src={'http://localhost:8083/' + props.product.imageUrl} alt="" width="100px"/>
            <h3 className='card-price-tag'>${product.price.toFixed(2)}</h3>
            <h3 className='card-description'>{product.description}</h3>
        </div>
    );
}
 
export default ProductCard;
