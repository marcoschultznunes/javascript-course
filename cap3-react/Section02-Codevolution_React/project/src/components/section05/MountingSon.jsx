import React, { Component } from 'react';

class MountingSon extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }

        console.log('Son constructor!')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Son getDerivedStateFromProps!')

        return null
    }

    componentDidMount(){
        console.log('Son componentDidMount!')
    }

    render() { 
        console.log('Son render!')

        return(
            <React.Fragment />
        )
    }
}
 
export default MountingSon;