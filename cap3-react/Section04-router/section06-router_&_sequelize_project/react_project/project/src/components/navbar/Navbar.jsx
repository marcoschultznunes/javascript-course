import React, { useRef } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faShoppingBasket, faSearch} from '@fortawesome/free-solid-svg-icons'
import Navmenu from './Navmenu';

/* 
    To use font awesome we need 3 npm installs

    npm i --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/react-fontawesome
*/

const Navbar = () => {
    const navMenuRef = useRef()

    const toggleNavMenu = () => {
        navMenuRef.current.classList.toggle('hidden')
    }

    return (  
        <React.Fragment>
            <Navmenu ref={navMenuRef} toggleNavMenu={toggleNavMenu}/>
            <header id='navbar'>
                <ul id='top-navbar'>
                    <li>
                        <FontAwesomeIcon icon={faBars} onClick={toggleNavMenu}/>
                    </li>
                    <li>
                        MyChoppe
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faShoppingBasket} />
                    </li>
                </ul>
                <form action="" id='navbar-search-form'>
                    <input type="search" placeholder="Search for products"/>
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </header>
        </React.Fragment>
        
    );
}
 
export default Navbar;