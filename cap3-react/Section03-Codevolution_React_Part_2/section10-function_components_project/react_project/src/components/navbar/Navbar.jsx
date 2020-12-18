/* 
    To use font awesome we need 3 npm installs

    npm i --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/react-fontawesome
*/
import React, { useRef } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Navmenu from './Navmenu';

const Navbar = () => {
    const navMenuButtonRef = useRef()
    const navMenuRef = useRef()

    const toggleNavMenu = () => {
        navMenuButtonRef.current.classList.toggle('nm-button-active')
        navMenuRef.current.classList.toggle('hidden')
    }

    return (  
        <React.Fragment>
            <nav id='navbar'>
                <ul>
                    <li className='navbar-item'>StatusMe</li>
                    
                    <li 
                        className='navbar-item' 
                        id='navmenu-button' 
                        onClick={toggleNavMenu}
                        ref={navMenuButtonRef}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </li>
                </ul>
            </nav>
            <Navmenu ref={navMenuRef} navMenuButtonRef={navMenuButtonRef}/>
        </React.Fragment>
    );
}
 
export default Navbar;
