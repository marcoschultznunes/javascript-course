import React, { Component } from 'react';
import List from './List'

class ListParent extends Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef()
    }

    fireBullet = () => { 
        try{
            this.listRef.current.removeChild(this.listRef.current.childNodes[0])
        } catch{
            alert('Out of bullets!')
        }
    }

    render() { 
        return (  
            <div>
                <List ref={this.listRef}/>
                <button className='red-button' onClick={this.fireBullet}>Fire!</button>
            </div>
        );
    }
}
 
export default ListParent;