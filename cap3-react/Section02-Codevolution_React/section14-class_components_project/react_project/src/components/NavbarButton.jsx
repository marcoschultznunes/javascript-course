import React from 'react';
import { PageConsumer } from './context/pageContext';

const NavbarButton = (props) => {
    const {name, active} = props

    return(
        <li>
            <PageConsumer>
                {
                    (updatePage) => {
                        return (
                            <button 
                                className={'nav-button ' + active} 
                                onClick={() => updatePage(name)}
                            >
                                {name}
                            </button>
                        )
                    }
                }
            </PageConsumer>    
        </li>
    )
}

export default NavbarButton