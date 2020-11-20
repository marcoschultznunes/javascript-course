import React, { Component } from 'react';
import ComponentB from './ComponentB';

class ComponentA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <ComponentB />
        );
    }
}
 
export default ComponentA;