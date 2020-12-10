import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    return (  
        <div id='navbar'>
            <ul className='nav-list'>
                <NavLink linkPage='Home' />
                <NavLink linkPage='Products' />
                <NavLink linkPage='Orders' />
            </ul>
        </div>
    );
}
 
export default Navbar;