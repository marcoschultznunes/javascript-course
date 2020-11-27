import React, {Component} from 'react';
import Axios from 'axios'

const formHOC = (WrappedComponent, endpoint) => {
    class formHOC extends Component {

        updateInput = (e) => {
            console.log(this.state)
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    
        onSubmit = (e) => {
            e.preventDefault()
            
            let path = 'http://localhost:8083/' + endpoint 
    
            if(this.props.method === 'patch'){
                path += '/' + this.props.item.id
            }
    
            Axios[this.props.method](path, this.state)
                .then(res => {
                    if(res){
                        alert(res.data.message)
                        this.props.changePage('Products')
                    } else{
                        alert('The server did not respond')
                    }
                })
                .catch(e => {
                    console.log(e.response)
                    alert(e.response.data)
                })
        }

        render(){
            return (
                <WrappedComponent
                    updateInput={this.updateInput}
                    onSubmit={this.onSubmit} 
                    {...this.props}
                />
            )           
        }
    }
     
    return formHOC;
}

export default formHOC