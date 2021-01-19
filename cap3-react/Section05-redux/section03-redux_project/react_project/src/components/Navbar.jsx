/* 
    To use font awesome we need 3 npm installs

    npm i --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/react-fontawesome
*/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faShoppingBasket, faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (  
        <header id='navbar'>
            <div id='upper-nav'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faBars} className=".pseudo-button" />
                    </li>
                    <li>
                        <Link to='/'>
                            The Choppa
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faShoppingBasket} className=".pseudo-button" />
                    </li>
                </ul>
            </div>

            <div id='mid-nav'>
                <form action="#" id='searchbar-form'>
                    <input type="search" placeholder="Search for products" className='button' />
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        </header>
    );
}
 
export default Navbar;