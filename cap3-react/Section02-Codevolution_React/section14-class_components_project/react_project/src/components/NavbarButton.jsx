import React, { useContext } from 'react';
import PageContext from './context/pageContext';

const NavbarButton = (props) => {
    const {name, active} = props

    const updatePage = useContext(PageContext)

    return(
        <li>
            <button className={'nav-button ' + active} onClick={() => updatePage(name)}>
                {name}
            </button>
        </li>
    )
}

export default NavbarButton