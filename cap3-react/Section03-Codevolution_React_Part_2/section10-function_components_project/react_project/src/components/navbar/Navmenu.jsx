import React, { useContext } from 'react';
import { LoggedUserContext } from '../App';
import Navlink from './Navlink';

const Navmenu = React.forwardRef((props, ref) => {
    const {navMenuButtonRef} = props

    const {user} = useContext(LoggedUserContext)

    if(!user){
        return(
            <nav ref={ref} className='navmenu hidden big-screen-navlinks'>
                <ul>
                    <Navlink linkPage='Posts' navMenuButtonRef={navMenuButtonRef}/>
                    <Navlink linkPage='Login / Sign Up' navMenuButtonRef={navMenuButtonRef}/>
                </ul>
            </nav>
        )
    }
    return (  
        <nav ref={ref} className='navmenu hidden big-screen-navlinks'>
            <h3 id='logged-user-message'>Welcome, {user.name}</h3>
            <ul>
                <Navlink linkPage='Posts' navMenuButtonRef={navMenuButtonRef}/>
                <Navlink linkPage='My Posts' navMenuButtonRef={navMenuButtonRef}/>
                <Navlink linkPage='New Post' navMenuButtonRef={navMenuButtonRef}/>
                <Navlink linkPage='Logout' navMenuButtonRef={navMenuButtonRef}/>
            </ul>
        </nav>
    );
})
 
export default Navmenu;
