import React, { Component } from 'react';
import ListControlContext from './ListControlContext';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static contextType = ListControlContext

    render() { 
        const {hidden, list} = this.context

        const mappedList = list.map((item, index) => 
            <li key={index}>{item}</li>
        )

        return (  
            <ul className={hidden ? 'hidden' : ''}>
                {mappedList}
            </ul>
        );
    }
}
 
export default List;
