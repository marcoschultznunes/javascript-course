import React, { Component } from 'react';
import NavbarButton from './NavbarButton';

class Navbar extends Component {
    render() { 
        const {page} = this.props
        
        return (
            <nav className='navbar'>
                <ul>
                    <NavbarButton name='Home' active={page === 'Home' ? 'active' : ''}/>
                    <NavbarButton name='Products' active={page === 'Products' ? 'active' : ''}/>
                    <NavbarButton name='Users' active={page === 'Users' ? 'active' : ''}/>
                    <NavbarButton name='Orders' active={page === 'Orders' ? 'active' : ''}/>
                    <NavbarButton name='Statistics' active={page === 'Statistics' ? 'active' : ''}/>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;