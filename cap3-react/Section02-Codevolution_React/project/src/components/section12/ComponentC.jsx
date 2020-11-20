import React, { Component } from 'react';
import UserContext from './userContext';

class ComponentC extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    static contextType = UserContext

    render() { 
        const {name, surname} = this.context

        return (  
            <h3>User {name} {surname}</h3>
        );
    }
}
 
export default ComponentC;