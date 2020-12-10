import React, {useContext} from 'react';
import {PageContext} from './App';

const NavLink = (props) => {
    const {dispatchPage} = useContext(PageContext)

    const {linkPage} = props

    return (  
        <li className='nav-item'>
            <button 
                className='nav-link' 
                onClick={() => dispatchPage({eff: 'change', page: linkPage})}
            >
                {linkPage}
            </button>
        </li>
    );
}
 
export default NavLink;