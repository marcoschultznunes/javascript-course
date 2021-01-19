import {Link} from 'react-router-dom'

const CategoryCard = (props) => {
    const {category} = props

    return (
        <div className='category-card card'>
            <Link to={`categories/${category.id}/${category.name}`}>
                <img src={`http://localhost:8083/${category.image}`} alt=""/>
            </Link>
                <div className='text-container'>
                    <Link to={`categories/${category.id}/${category.name}`}>
                        <h3>{category.name}</h3>
                    </Link>
                </div>
        </div>
    );
}
 
export default CategoryCard;
