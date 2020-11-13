import React from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = () => {
    return ReactDOM.createPortal(
        <div>
            <h2>This element is in a different DOM node</h2>
        </div>
    , document.getElementById('portal-root'))
}
 
export default PortalComponent;