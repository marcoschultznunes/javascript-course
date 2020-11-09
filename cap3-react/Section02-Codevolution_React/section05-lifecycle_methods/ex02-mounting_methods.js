/*
    They are:
        constructor, 
        (static) getDerivedStateFromProps(props, state), 
        render, 
        and componentDidMount.

    1 - constructor:
        - Called whenever a new component is created
        - used for initializing the state and binding the 'this' to its methods
        - super(props) must be called

    2 - (static method) getDerivedStateFromProps(props, state):
        - Used when the state depends on the changes in props over time
        - therefore, it is used to set the state
        - since it is a static method, the this keyword does not work, so instead of 
            directly changing the state, it should return the new state value

    3 - render:
        - Read props and state and then return JSX
        - Do not change, or interact with the DOM, nor send http requests in this method.
        - Before moving on to componentDidMount, all mounting methods of each child child
            component are called.

    4 - componentDidMount:
        - Called only once, after the component and all its children have been rendered
        - It is the ideal method to interact with the DOM or send http requests, fetching
            or posting data.
*/

/* 
    To test we made 3 components: Grandpa, Parent, Uncle and Son. Grandpa's child 
    components are Parent, and then Uncle. Parent has Son as child component.
    Each of these component has a console.log(name + lifecycle_method) in each of their
    mounting methods.
*/

// The Grandpa component. The other 2 are identical, except for the name and children
import React, { Component } from 'react';
import MountingParent from './MountingParent';
import MountingUncle from './MountingUncle';

class MountingGrandpa extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        console.log('Grandpa constructor!')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Grandpa getDerivedStateFromProps!')

        return null
    }

    componentDidMount() {
        console.log('Grandpa componentDidMount!')
    }

    render() {
        console.log('Grandpa render!')

        return (
            <div>
                <MountingParent />
                <MountingUncle />
            </div>
        )
    }
}

export default MountingGrandpa;

/*
    The console had the following results:

    Grandpa constructor!
    Grandpa getDerivedStateFromProps!
    Grandpa render!
    Parent constructor!
    Parent getDerivedStateFromProps!
    Parent render!
    Son constructor!
    Son getDerivedStateFromProps!
    Son render!
    Uncle constructor!
    Uncle getDerivedStateFromProps!
    Uncle render!
    Son componentDidMount!
    Parent componentDidMount!
    Uncle componentDidMount!
    Grandpa componentDidMount!

    So the order was: 
    1 - Component
    2 - Child 1
    3 - Child 1's Child
    4 - Child 2
    5 - Child 1's Child componentDidMount
    6 - Child 1's componentDidMount
    7 - Child 2's componentDidMount
    8 - Component's componentDidMount
*/