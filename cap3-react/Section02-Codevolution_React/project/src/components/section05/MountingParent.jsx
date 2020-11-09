import React, { Component } from 'react';
import MountingSon from './MountingSon';

class MountingParent extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }

        console.log('Parent constructor!')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Parent getDerivedStateFromProps!')

        return null
    }

    componentDidMount(){
        console.log('Parent componentDidMount!')
    }

    render() { 
        console.log('Parent render!')

        return(
            <div>
                <MountingSon />
            </div>
        )
    }
}
 
export default MountingParent;