const CategoryProducts = (props) => {
    const {id, name} = props

    return (  
        <main>
            <h3>Categories {'>'} {name}</h3>
            <h3>{id} - {name}</h3>
        </main>
    );
}
 
export default CategoryProducts;