/*
    Portals can also be created for class components.

    We'll rewrite the PortalComponent.jsx from the previous exercise to a class component
*/

/* The PortalComponent.jsx class component */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PortalComponent extends Component{
    render(){
        return ReactDOM.createPortal(
            <div>
                <h2>This element is in a different DOM node</h2>
            </div>
            , document.getElementById('portal-root')
        )
    }
}
 
export default PortalComponent;
