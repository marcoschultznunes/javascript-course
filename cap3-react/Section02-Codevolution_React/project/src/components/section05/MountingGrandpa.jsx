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

    static getDerivedStateFromProps(props, state){
        console.log('Grandpa getDerivedStateFromProps!')

        return null
    }

    componentDidMount(){
        console.log('Grandpa componentDidMount!')
    }

    render() { 
        console.log('Grandpa render!')

        return(
            <div>
                <MountingParent />
                <MountingUncle />
            </div>
        )
    }
}
 
export default MountingGrandpa;