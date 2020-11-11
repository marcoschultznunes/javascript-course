import React from 'react';

const List = React.forwardRef((props, ref) => {
    return (  
        <ul ref={ref}>
            <li>Bullet</li>
            <li>Bullet</li>
            <li>Bullet</li>
            <li>Bullet</li>
            <li>Bullet</li>
        </ul>
    );
})
 
export default List;