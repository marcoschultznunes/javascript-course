import { useSelector } from "react-redux";
import CategoryCard from "../cards/CategoryCard";

const Homepage = () => {
    // TODO => Fix this when there are properly 2 reducers
    const categoryStore = useSelector(state => state)


    console.log(categoryStore)

    const mapCategories = categoryStore.categories.map(category => 
        <CategoryCard category={category} />
    )
    const mapOffers = () => <li>Offers</li> 

    return (  
        <main>
            <div>
                {/* Categories */}
                <div className='category-card-list'>
                    {categoryStore.loading ? <h3>Fetching categories...</h3> : mapCategories}
                </div>
            </div>
            <div>
                <ul>
                    {/* {mapOffers()} */}
                </ul>
            </div>
        </main>
    );
}
 
export default Homepage;
