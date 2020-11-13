/*
    Portals allow us to access HTML elements outside of the 'root' element. This is useful 
for when you want elements to be unaffected by the CSS, such as popups. Another way to do 
this is by using module.css
*/

/* First we must add the element outside 'root' to our index.html file */
<body>
    <div id="root"></div>
    <div id="portal-root"></div>
</body>


/* Next, the portal component */
import React from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = () => {
    // This create portal function will transfer the render to the specified node
    return ReactDOM.createPortal( 
        <div>
            <h2>This element is in a different DOM node</h2>
        </div>
    , document.getElementById('portal-root')) // Element will render inside 'portal-root'
}
 
export default PortalComponent;


/* Finally, we add it to index.js, inside its render function(even it's rendered in 'root') */
ReactDOM.render(
    <React.StrictMode>
        <PortalComponent />
    </React.StrictMode>,
    document.getElementById('root') // Will be ignored by the portal component
);


/* We'll add css to the portal-root:

#portal-root{
    background-color: rgb(9, 9, 80);
    padding: 20px 0px;
}
#portal-root > * > h2{
    margin: 0px;
}

*/

/*
    IMPORTANT: Portal elements can still modify its child or parent component even if they
    are from a different HTML node, as it does not affect the React tree. 
        For instance, an on click handler will still affect the parent component even if they
    are from different root elements
*/