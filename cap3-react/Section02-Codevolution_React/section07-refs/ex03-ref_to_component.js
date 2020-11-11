/*
    Last example we assigned a ref to an HTML element. This time, the ref will be assigned
    to a class component
*/

/*
    In this example, we'll create a list component,
    and a parent with a button that removes elements from the list (bullets)
*/

/*
    In the list component we do just like ex 01, creating a ref, assigning it to the list
    and creating a function that removes the list items.

    The parent component will later call that function
*/

/* The List.jsx component */
import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef() // The ref
    }

    removeBullet = () => { // The function
        try{
            this.listRef.current.removeChild(this.listRef.current.childNodes[0])
        } catch{
            alert('No more bullets!')
            return null
        }
    }

    render() { 
        return (  
            <ul ref={this.listRef}> {/* Assigning the ref */}
                <li>Bullet</li>
                <li>Bullet</li>
                <li>Bullet</li>
                <li>Bullet</li>
                <li>Bullet</li>
            </ul>
        );
    }
}
 
export default List;

/*
    The parent component assigns the list component as a ref, creates a function that calls
    the ref's function that removes the items from the list. Then, that function it is 
    assigned as a button handler
*/

import List from './List';

class ListParent extends Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef()
    }

    fireBullet = () => { // Function calls the child function
        this.listRef.current.removeBullet()
    }

    render() { 
        return (  
            <div>
                <List ref={this.listRef}/> {/* The list ref */}
                <button className='red-button' onClick={this.fireBullet}> {/* The handler */}
                    Fire!
                </button>
            </div>
        );
    }
}
 
export default ListParent;
