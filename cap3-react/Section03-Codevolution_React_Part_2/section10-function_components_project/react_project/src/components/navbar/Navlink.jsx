import React, { useContext } from 'react';
import { LoggedUserContext, PageContext } from '../App';

const Navlink = (props) => {
    const {linkPage, navMenuButtonRef} = props

    const {setPage} = useContext(PageContext)
    const {setUser} = useContext(LoggedUserContext)

    const changePage = () => {
        if(linkPage === 'Logout'){
            setUser(false)
        }

        setPage(linkPage)
        setTimeout(() => navMenuButtonRef.current.click(), 200)
    }

    return (  
        <li className='nav-link' onClick={changePage}>{linkPage}</li>
    );
}
 
export default Navlink;