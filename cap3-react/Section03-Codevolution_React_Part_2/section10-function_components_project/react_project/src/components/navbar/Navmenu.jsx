import React from 'react';
import Navlink from './Navlink';

const Navmenu = React.forwardRef((props, ref) => {
    const {navMenuButtonRef} = props

    return (  
        <nav id='navmenu' ref={ref} className='hidden'>
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
