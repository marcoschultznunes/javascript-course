/*
    We can make the parent element use a direct ref to the child component's HTML element,
    by using the React.forwardRef(props, ref) function.

    We'll rewrite the previous example
*/

/* The Parent component */
import React, { Component } from 'react';
import List from './List'

class ListParent extends Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef()
    }

    fireBullet = () => { // The child method replaces the parent's method
        try{
            this.listRef.current.removeChild(this.listRef.current.childNodes[0])
        } catch{
            alert('Out of bullets!')
        }
    }

    render() { 
        return (  
            <div>
                <List ref={this.listRef}/> {/* Ref is passed to the component */}
                <button className='red-button' onClick={this.fireBullet}>Fire!</button>
            </div>
        );
    }
}
 
export default ListParent;


/* The List component */
import React from 'react';

const List = React.forwardRef((props, ref) => { // forwardRef provides the parent ref
    return (  
        <ul ref={ref}> {/* Parent ref is passed to the element*/}
            <li>Bullet</li>
            <li>Bullet</li>
            <li>Bullet</li>
            <li>Bullet</li>
            <li>Bullet</li>
        </ul>
    );
})
 
export default List;

/*
    This approach has way less lines of code than the previous
*/