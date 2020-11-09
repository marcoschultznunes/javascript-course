import React, { Component } from 'react';

class MountingUncle extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }

        console.log('Uncle constructor!')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Uncle getDerivedStateFromProps!')

        return null
    }

    componentDidMount(){
        console.log('Uncle componentDidMount!')
    }

    render() { 
        console.log('Uncle render!')

        return(
            <React.Fragment />
        )
    }
}
 
export default MountingUncle;