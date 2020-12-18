import React, { useContext } from 'react';
import { PageContext } from '../App';

const Navlink = (props) => {
    const {linkPage, navMenuButtonRef} = props

    const {page, setPage} = useContext(PageContext)

    const changePage = () => {
        setPage(linkPage)
        setTimeout(() => navMenuButtonRef.current.click(), 200)
    }

    return (  
        <li className='nav-link' onClick={changePage}>{linkPage}</li>
    );
}
 
export default Navlink;